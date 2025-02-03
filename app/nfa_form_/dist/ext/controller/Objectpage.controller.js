sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";var t;var a;var o;var s,n,r,i;n=/PAN_Number='([^']+)'/;o=location.href;i=o.match(n);if(i){a=i[1];console.log(a)}else{console.log("PAN Number not found")}return e.extend("nfaform.ext.controller.Objectpage",{override:{onInit:function(){},editFlow:{onBeforeSave:async function(e){r=this;const t=new Promise(async(t,o)=>{debugger;var s=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var n=s.getValue();var i=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");i.setUploadButtonInvisible(false);i.setUploadEnabled(false);if(i.getItems()){for(let e=0;e<i.getItems().length;e++){i.getItems()[0].setEnabledRemove(false);i.getItems()[0].setVisibleRemove(false)}}sap.m.MessageBox.confirm("Do you want to send for Approval?",{actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:async function(i){if(i===sap.m.MessageBox.Action.YES){debugger;if(n.length==0){const e=new sap.ui.model.json.JSONModel([{type:"Error",title:"Comments Required",description:"Comments cannot be empty. Please enter a value",subtitle:"Comments section"}]);const t=new sap.m.MessagePopover({items:{path:"/",template:new sap.m.MessageItem({type:"{type}",title:"{title}",description:"{description}",subtitle:"{subtitle}"})}});t.setModel(e);t.openBy(s);o(true)}else{var l="rajendraakshay1@gmail.com";console.log("Save action confirmed");var m=e.context.getModel().bindContext(`/${"sendforapproval"}(...)`);var u={key:a,status:"Approval",name:l};u=JSON.stringify(u);m.setParameter("data",u);await m.execute();let o=m.getBoundContext();let s=o.getObject();t(true);r.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit")}}else{console.log("Save action cancelled");t(true)}}})});await t},onAfterSave:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var o=t.getValue();if(o.length>0){console.log("Save action confirmed");debugger;var s=e.context.getModel().bindContext(`/${"comment"}(...)`);var n=sap.ushell.Container.getUser().getEmail();var r={type:"insert",NFA_Number:a,comment:o,user:n,status:"demo"};r=JSON.stringify(r);s.setParameter("data",r);await s.execute();let i=s.getBoundContext();let l=i.getObject();t.setEditable(false)}},onAfterDiscard:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var a=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var o=t.getValue();t.setEditable(false);a.setUploadButtonInvisible(true);a.setUploadEnabled(false);if(a.getItems()){for(let e=0;e<a.getItems().length;e++){a.getItems()[e].setEnabledRemove(false);a.getItems()[e].setVisibleRemove(false)}}},onBeforeEdit:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var a=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");a.setEditable(true);t.setUploadButtonInvisible(false);t.setUploadEnabled(true);if(t.getItems()){for(let e=0;e<t.getItems().length;e++){t.getItems()[e].setEnabledRemove(true);t.getItems()[e].setVisibleRemove(true)}}}},routing:{onAfterBinding:async function(e){debugger;var t;s=this;var o=s.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;const r=/PAN_Number='([^']+)'/;var i=location.href;const l=i.match(r);var m=o+`odata/v4/catalog/tab1?$filter=PAN_Number eq '${l[1]}'`;$.ajax({url:m,method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){debugger;t=e.value[0].status;if(t=="pending for Approval"||t=="Approved"){s.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit")}else{s.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].removeStyleClass("edit")}console.log("Data retrieved successfully:",e)}).catch(function(e){debugger;console.error("Error occurred during AJAX call:",e)});if(!this._attachmentsInitialized){this._attachmentsInitialized=true;var u=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var c=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var g=location.href.match(/IsActiveEntity=([^,)]+)/);var d=g[1];if(d==="true"){c.setEditable(false);u.setUploadButtonInvisible(true);u.setUploadEnabled(false);if(u.getItems()){for(let e=0;e<u.getItems().length;e++){u.getItems()[0].setEnabledRemove(false);u.getItems()[0].setVisibleRemove(false)}}}else{c.setEditable(true);u.setUploadButtonInvisible(false);u.setUploadEnabled(true);if(u.getItems()){for(let e=0;e<u.getItems().length;e++){u.getItems()[0].setEnabledRemove(true);u.getItems()[0].setVisibleRemove(true)}}}}o=this.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;debugger;var f=sap.ui.getCore().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Workflow--sampleTable");f.addStyleClass("workFlowTable");f.addStyleClass("sapUiRespGrid");f.addStyleClass("sapUiRespGridHSpace1");if(!f){console.error("Table not found.");return}var b={url:o+"odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(b).done(async(a,o,s)=>{console.log("AJAX Results:",a);if(!a.value||!Array.isArray(a.value)){console.error("Invalid AJAX response structure. Expected `results.value` to be an array.");return t("Invalid data structure")}const n=location.href;const r=/PAN_Number='([^']+)'/;const i=n.match(r);if(!i||!i[1]){console.error("PAN Number not found in URL.");return t("PAN Number extraction failed")}const l=i[1];const m=a.value.filter(e=>e.PAN_Number===l);console.log("Filtered Results:",m);if(m.length===0){console.warn("No data found for the given PAN Number:",l)}const u=new sap.ui.model.json.JSONModel;u.setData({PAN_WORKFLOW_HISTORY_APR:m});f.setModel(u);console.log("Model Data:",u.getData());await new Promise(e=>setTimeout(e,2e3));f.bindItems({path:"/PAN_WORKFLOW_HISTORY_APR",template:new sap.m.ColumnListItem({cells:[new sap.m.Text({text:"{PAN_Number}"}),new sap.m.Text({text:"{Employee_Name}"}),new sap.m.Text({text:"{level}"}),new sap.m.Text({text:"{Notification_Status}"}),new sap.m.Text({text:"{Approved_by}"})]})});console.log("Table Model Data:",f.getModel().oData);e(a)}).fail(e=>{console.error("AJAX request failed:",e);t(e)})});var p=[{header:"PAN Number",path:"PAN_Number"},{header:"Employee Name",path:"Employee_Name"},{header:"Level",path:"level"},{header:"Status",path:"Notification_Status"},{header:"Approved By",path:"Approved_by"}];f.destroyColumns();p.forEach(function(e){var t=new sap.m.Column({header:new sap.m.Text({text:e.header})});f.addColumn(t)});var v=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var h=this.getView().getModel().bindContext(`/${"comment"}(...)`);n=/PAN_Number='([^']+)'/;m=location.href;g=m.match(n);a=g[1];var A={type:"get",NFA_Number:a};A=JSON.stringify(A);h.setParameter("data",A);await h.execute();let S=h.getBoundContext();let y=S.getObject();y=JSON.parse(y.value);debugger;console.log("Execution Result:",y);if(y[0]&&y[0].Comments){v.setValue(y[0].Comments);console.log("Comment data updated:",y[0].Comments)}else{v.setValue("");console.warn("No comments found. Setting to empty.")}return y}}}})});
//# sourceMappingURL=Objectpage.controller.js.map