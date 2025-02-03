const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
  // Access the entities defined in your CDS model
  const { PAN_attachments_APR, PAN_WORKFLOW_HISTORY_APR, tab1, PAN_Comments_APR } = this.entities;

  // Before a CREATE operation on PAN_attachments_APR
  this.before('CREATE', 'PAN_attachments_APR', async req => {
    // Log the request data
    console.log('Create called');
    console.log(JSON.stringify(req.data));
    debugger
    // Check if an attachment with the same ID already exists
    const existingAttachment = await SELECT.from(PAN_attachments_APR).where({ ID: req.data.ID });
    req.data.url = `/odata/v4/catalog/PAN_attachments_APR(ID=${req.data.ID},PAN_Number='${req.data.PAN_Number}')/content`;
  });
  this.on('sendforapproval', async (req) => {
    debugger
    var wf_up;
    const data = JSON.parse(req.data.data);
    console.log(data);
    if (data.status == 'Approval') {
      var wf = await SELECT.from(PAN_WORKFLOW_HISTORY_APR).where`PAN_Number=${data.key}`;
      var tb1 = await SELECT.from(tab1).where`PAN_Number=${data.key}`;
      console.log(wf);
      let maxLevel = -Infinity;
      var currentLevel;
      for (let i = 0; i < wf.length; i++) {
        try {

          currentLevel = parseInt(wf[i].level, 10);

          // Update maxLevel if the current level is higher
          if (currentLevel > maxLevel) {
            maxLevel = currentLevel;
          }

          const wf_up = await UPDATE(PAN_WORKFLOW_HISTORY_APR)
            .where({ idd: wf[i].idd, PAN_Number: data.key })
            .with({ Remarks: "pending for Approval" });
          console.log("Update result:", wf_up);
        } catch (error) {
          console.error("Error updating record:", error.message);
        }
      }

      for (let i = 0; i < wf.length; i++) {
        try {
          const tb1_up = await UPDATE(tab1)
            .where({ PAN_Number: data.key })
            .with({ status: "pending for Approval" });
        } catch (error) {
          console.error("Error updating record:", error.message);
        }
      }

      //bpa trigger code 
      try {
        const client = 'sb-403abd10-fd1a-4b84-845a-cad6024d1bba!b359670|xsuaa!b49390';
        const secret = 'ecd33297-4a8c-49d6-9bc8-049bf88f657a$9rtv07ya5uOAc7L2HfFaKaC0zx39zzWCsd-V1i3apvQ=';
        const auth1 = Buffer.from(client + ':' + secret, 'utf-8').toString('base64');
    
        const response1 = await axios.request('https://aa7beafetrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + auth1
            }
        });
    
        console.log('Authentication Response:', response1.data);
    
        const body =JSON.parse(JSON.stringify( {
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
        const filteredArray = postbpa.data.filter(item => item.subject === "nfaprocess");
        console.log(filteredArray);
        const wf_up = await UPDATE(tab1)
        .where({ PAN_Number: data.key})
        .with({ Sap_workitem_id: postbpa.data.id});
        console.log(wf_up);

       const wf = await UPDATE(PAN_WORKFLOW_HISTORY_APR)
        .where({ PAN_Number: data.key})
        .with({ Employee_ID: postbpa.data.id, Notification_Status: "1"});
        console.log(wf);
        
        
    } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
    }


    }
    return "successfully inserted to workflow and tab1"

  })

  this.on('comment', async (req) => {
    debugger;
    var data = JSON.parse(req.data.data);
    var query = await SELECT.from(PAN_Comments_APR).where`PAN_Number=${data.NFA_Number}`;
    if (data.type == "insert") {
      if (query.length > 0) {
        const wf_up = await UPDATE(PAN_Comments_APR)
          .where({ PAN_Number: data.NFA_Number })
          .with({ Comments: data.comment });
        return "updated"
      }
      else {
        var query = await INSERT.into(PAN_Comments_APR).entries([{
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
