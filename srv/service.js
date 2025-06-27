const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
  // Access the entities defined in your CDS model
  const { attachments, WORKFLOW_HISTORY, tab1, PAN_Comments } = this.entities;

  // Before a CREATE operation on PAN_attachments_APR
  this.before('CREATE', 'attachments', async req => {
    // Log the request data
    console.log('Create called');
    console.log(JSON.stringify(req.data));
    debugger
    // Check if an attachment with the same ID already exists
    const existingAttachment = await SELECT.from(attachments).where({ ID: req.data.ID });
    req.data.url = `/odata/v4/catalog/attachments(ID=${req.data.ID},PAN_Number='${req.data.PAN_Number}')/content`;
  });
  this.on('sendforapproval', async (req) => {
    debugger
    const data = JSON.parse(req.data.data);
    //for clarification check
    var clarify = await SELECT.from(tab1).where`PAN_Number=${data.key}`;
    if(clarify[0].status == 'need for clarification')
    {
      const wf =  await UPDATE(tab1)
      .where({ PAN_Number: data.key })
      .with({ status: "pending for Approval"});
       return "updated as pending for approval from need for clarification"
    }

    //////////////////




    var wf_up;
    
    console.log(data);
    if (data.status == 'Approval') {
      var wf = await SELECT.from(WORKFLOW_HISTORY).where`PAN_Number=${data.key}`;
      var tb1 = await SELECT.from(tab1).where`PAN_Number=${data.key}`;
      console.log(wf);
      let maxLevel = -Infinity;
      var currentLevel;
      var appLevel=false;
      for (let i = 0; i < wf.length; i++) {
        try {

          currentLevel = parseInt(wf[i].level, 10);

          // Update maxLevel if the current level is higher
          if (currentLevel > maxLevel) {
            maxLevel = currentLevel;
          }

          // const wf_up = await UPDATE(WORKFLOW_HISTORY)
          //   .where({ idd: wf[i].idd, PAN_Number: data.key })
          //   .with({ Remarks: "pending for Approval" });
          if(!appLevel && wf[i].Remarks!='Approved'){
          const wf_up = await UPDATE(WORKFLOW_HISTORY, { PAN_Number: `${data.key}`, idd: `${wf[i].idd}` }).with({ Remarks: "pending for Approval" })
          appLevel=true;
          }

          // const pan_det = await UPDATE(tab1).where({PAN_Number : data.key}).with({status : "pending for Approval"})
          console.log("Update result:", wf_up);
        } catch (error) {
          console.error("Error updating record:", error.message);
        }
      }

      // for (let i = 0; i < wf.length; i++) {
        try {
          const tb1_up = await UPDATE(tab1)
            .where({ PAN_Number: data.key })
            .with({ status: "pending for Approval",submitted_date: new Date()});
        } catch (error) {
          console.error("Error updating record:", error.message);
        }
      // }

      //bpa trigger code 
      try {
        const client = 'sb-f5db712d-7e56-4659-8aa0-a43859ddd675!b449023|xsuaa!b49390';
        const secret = '8dbe1dd1-2557-49e7-938d-3cb18bb0b753$bqbpGc9HXFf9XSFuSSXM9RH4V-FUh_J3_OL-tZ4uqUM=';
        const auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');

        const response1 = await axios.request('https://d6a19604trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials', {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + auth1
          }
        });

        console.log('Authentication Response:', response1.data);

        const body = JSON.parse(JSON.stringify({
          "definitionId": "us10.aa7beafetrial.nfa.nfaprocess",
          "context": {
            "count": maxLevel,
            "nfanumber": data.key,
            "email": data.name,
            "init": 0
          }
        }));

        const postbpa = await axios.request('https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + response1.data.access_token,
            'Content-Type': 'application/json'
          },
          data: body
        });
        // const postbpa = await axios.request('https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': 'Bearer ' + response1.data.access_token,
        //         'Content-Type': 'application/json'
        //     },
        // });

        console.log('Workflow Response:', postbpa.data);
        // const filteredArray = postbpa.data.filter(item => item.subject === "nfaprocess");
        const workflowData = Array.isArray(postbpa.data) ? postbpa.data : [postbpa.data];

        // Now filter safely
        const filteredArray = workflowData.filter(item =>
          item.definitionId && item.definitionId.endsWith('.nfaprocess')
        );
        console.log(filteredArray);
        const wf_up = await UPDATE(tab1)
          .where({ PAN_Number: data.key })
          .with({ Sap_workitem_id: filteredArray[0].id });
        console.log(wf_up);

         const wf = await UPDATE(WORKFLOW_HISTORY)
          .where({ PAN_Number: data.key})
          .with({ Employee_ID: postbpa.data.id,Begin_DateAND_Time : new Date()})
        //   console.log(wf);

        //updated 1 june 2025





        //updated 1 june 2025





      } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
      }


    }
    return "successfully inserted to workflow and tab1"

  })

  this.on('comment', async (req) => {
    var data = JSON.parse(req.data.data);
    var query = await SELECT.from(PAN_Comments).where`PAN_Number=${data.NFA_Number}`;
    if (data.type == "insert") {
      if (query.length > 0) {
        const wf_up = await UPDATE(PAN_Comments)
          .where({ PAN_Number: data.NFA_Number })
          .with({ Comments: data.comment });
        return "updated"
      }
      else {
        var query = await INSERT.into(PAN_Comments).entries([{
          PAN_Number: data.NFA_Number,
          user: data.comment,
          Comments: data.comment,
          status: data.status
        }])
        return "inserted";
      }
    }
    else {
      return JSON.stringify(query);
    }
  });
});
