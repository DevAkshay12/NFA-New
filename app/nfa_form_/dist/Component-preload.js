//@ui5-bundle nfaform/Component-preload.js
sap.ui.require.preload({
	"nfaform/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("nfaform.Component",{metadata:{manifest:"json"}})});
},
	"nfaform/ext/controller/Comment.js":function(){
sap.ui.define(["sap/m/MessageToast","sap/suite/ui/commons/Timeline","sap/m/Dialog","sap/m/Button","sap/suite/ui/commons/TimelineItem"],function(e,t,n,o,a){"use strict";return{comment:function(t){var n=location.href;const o=/PAN_Number='([^']+)'/;const a=n.match(o);var i=a?a[1]:null;if(!i){console.log("PAN Number not found");e.show("PAN Number not found in the URL.");return}var s=this._view.getParent().getAppComponent().getManifestObject()._oBaseUri._string;var m={url:s+`odata/v4/catalog/PAN_Comments_APR`,method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(m).done(t=>e(t)).fail(e=>t(e))}).then(e=>{var t=e.value;var n=t.filter(e=>e.PAN_Number.trim()===i);var o=new sap.m.Dialog({title:"Comments",width:"350%",maxWidth:"450%",endButton:new sap.m.Button({text:"Close",press:function(){o.close()}})});o.addStyleClass("customDialogWidth");var a=new sap.suite.ui.commons.Timeline({width:"900%",enableScroll:true});if(n.length>0){n.forEach(function(e){var t=new sap.suite.ui.commons.TimelineItem({dateTime:e.createdAt,text:e.Comments,userName:e.createdBy});a.addContent(t)})}else{var s=new sap.suite.ui.commons.TimelineItem({dateTime:(new Date).toISOString(),text:"No comments available.",userName:"System"});a.addContent(s)}o.addContent(a);o.open()}).catch(t=>{console.error("Error fetching comments:",t);e.show("Error fetching comments.")})}}});
},
	"nfaform/ext/controller/Just.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{just:function(e){s.show("Custom handler invoked.")}}});
},
	"nfaform/ext/controller/Objectpage.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";var t;var a;var o;var s,n,r,i;n=/PAN_Number='([^']+)'/;o=location.href;i=o.match(n);if(i){a=i[1];console.log(a)}else{console.log("PAN Number not found")}return e.extend("nfaform.ext.controller.Objectpage",{override:{onInit:function(){},editFlow:{onBeforeSave:async function(e){r=this;const t=new Promise(async(t,o)=>{debugger;var s=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var n=s.getValue();var i=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");i.setUploadButtonInvisible(false);i.setUploadEnabled(false);if(i.getItems()){for(let e=0;e<i.getItems().length;e++){i.getItems()[0].setEnabledRemove(false);i.getItems()[0].setVisibleRemove(false)}}sap.m.MessageBox.confirm("Do you want to send for Approval?",{actions:[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO],onClose:async function(i){if(i===sap.m.MessageBox.Action.YES){debugger;if(n.length==0){const e=new sap.ui.model.json.JSONModel([{type:"Error",title:"Comments Required",description:"Comments cannot be empty. Please enter a value",subtitle:"Comments section"}]);const t=new sap.m.MessagePopover({items:{path:"/",template:new sap.m.MessageItem({type:"{type}",title:"{title}",description:"{description}",subtitle:"{subtitle}"})}});t.setModel(e);t.openBy(s);o(true)}else{var l="rajendraakshay1@gmail.com";console.log("Save action confirmed");var m=e.context.getModel().bindContext(`/${"sendforapproval"}(...)`);var u={key:a,status:"Approval",name:l};u=JSON.stringify(u);m.setParameter("data",u);await m.execute();let o=m.getBoundContext();let s=o.getObject();t(true);r.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit")}}else{console.log("Save action cancelled");t(true)}}})});await t},onAfterSave:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var o=t.getValue();if(o.length>0){console.log("Save action confirmed");debugger;var s=e.context.getModel().bindContext(`/${"comment"}(...)`);var n=sap.ushell.Container.getUser().getEmail();var r={type:"insert",NFA_Number:a,comment:o,user:n,status:"demo"};r=JSON.stringify(r);s.setParameter("data",r);await s.execute();let i=s.getBoundContext();let l=i.getObject();t.setEditable(false)}},onAfterDiscard:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var a=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var o=t.getValue();t.setEditable(false);a.setUploadButtonInvisible(true);a.setUploadEnabled(false);if(a.getItems()){for(let e=0;e<a.getItems().length;e++){a.getItems()[e].setEnabledRemove(false);a.getItems()[e].setVisibleRemove(false)}}},onBeforeEdit:async function(e){debugger;var t=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var a=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");a.setEditable(true);t.setUploadButtonInvisible(false);t.setUploadEnabled(true);if(t.getItems()){for(let e=0;e<t.getItems().length;e++){t.getItems()[e].setEnabledRemove(true);t.getItems()[e].setVisibleRemove(true)}}}},routing:{onAfterBinding:async function(e){debugger;var t;s=this;var o=s.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;const r=/PAN_Number='([^']+)'/;var i=location.href;const l=i.match(r);var m=o+`odata/v4/catalog/tab1?$filter=PAN_Number eq '${l[1]}'`;$.ajax({url:m,method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){debugger;t=e.value[0].status;if(t=="pending for Approval"||t=="Approved"){s.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit")}else{s.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].removeStyleClass("edit")}console.log("Data retrieved successfully:",e)}).catch(function(e){debugger;console.error("Error occurred during AJAX call:",e)});if(!this._attachmentsInitialized){this._attachmentsInitialized=true;var u=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");var c=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var g=location.href.match(/IsActiveEntity=([^,)]+)/);var d=g[1];if(d==="true"){c.setEditable(false);u.setUploadButtonInvisible(true);u.setUploadEnabled(false);if(u.getItems()){for(let e=0;e<u.getItems().length;e++){u.getItems()[0].setEnabledRemove(false);u.getItems()[0].setVisibleRemove(false)}}}else{c.setEditable(true);u.setUploadButtonInvisible(false);u.setUploadEnabled(true);if(u.getItems()){for(let e=0;e<u.getItems().length;e++){u.getItems()[0].setEnabledRemove(true);u.getItems()[0].setVisibleRemove(true)}}}}o=this.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;debugger;var f=sap.ui.getCore().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Workflow--sampleTable");f.addStyleClass("workFlowTable");f.addStyleClass("sapUiRespGrid");f.addStyleClass("sapUiRespGridHSpace1");if(!f){console.error("Table not found.");return}var b={url:o+"odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(b).done(async(a,o,s)=>{console.log("AJAX Results:",a);if(!a.value||!Array.isArray(a.value)){console.error("Invalid AJAX response structure. Expected `results.value` to be an array.");return t("Invalid data structure")}const n=location.href;const r=/PAN_Number='([^']+)'/;const i=n.match(r);if(!i||!i[1]){console.error("PAN Number not found in URL.");return t("PAN Number extraction failed")}const l=i[1];const m=a.value.filter(e=>e.PAN_Number===l);console.log("Filtered Results:",m);if(m.length===0){console.warn("No data found for the given PAN Number:",l)}const u=new sap.ui.model.json.JSONModel;u.setData({PAN_WORKFLOW_HISTORY_APR:m});f.setModel(u);console.log("Model Data:",u.getData());await new Promise(e=>setTimeout(e,2e3));f.bindItems({path:"/PAN_WORKFLOW_HISTORY_APR",template:new sap.m.ColumnListItem({cells:[new sap.m.Text({text:"{PAN_Number}"}),new sap.m.Text({text:"{Employee_Name}"}),new sap.m.Text({text:"{level}"}),new sap.m.Text({text:"{Notification_Status}"}),new sap.m.Text({text:"{Approved_by}"})]})});console.log("Table Model Data:",f.getModel().oData);e(a)}).fail(e=>{console.error("AJAX request failed:",e);t(e)})});var p=[{header:"PAN Number",path:"PAN_Number"},{header:"Employee Name",path:"Employee_Name"},{header:"Level",path:"level"},{header:"Status",path:"Notification_Status"},{header:"Approved By",path:"Approved_by"}];f.destroyColumns();p.forEach(function(e){var t=new sap.m.Column({header:new sap.m.Text({text:e.header})});f.addColumn(t)});var v=this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");var h=this.getView().getModel().bindContext(`/${"comment"}(...)`);n=/PAN_Number='([^']+)'/;m=location.href;g=m.match(n);a=g[1];var A={type:"get",NFA_Number:a};A=JSON.stringify(A);h.setParameter("data",A);await h.execute();let S=h.getBoundContext();let y=S.getObject();y=JSON.parse(y.value);debugger;console.log("Execution Result:",y);if(y[0]&&y[0].Comments){v.setValue(y[0].Comments);console.log("Comment data updated:",y[0].Comments)}else{v.setValue("");console.warn("No comments found. Setting to empty.")}return y}}}})});
},
	"nfaform/ext/fragment/Attachments.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros" displayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" width="100%"><Button id="dewdewdw" visible="false" core:require="{ handler: \'nfaform/ext/fragment/Attachments\'}"  press="handler.onPress" /><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'nfaform/ext/fragment/Attachments\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tuploadButtonInvisible="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\t\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/PAN_attachments_APR\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\tenabledRemove="false"\n\t\t\t\t\t\t\tselected="false"\n\t\t\t\t\t\t\tvisibleRemove="false"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\t\t\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>',
	"nfaform/ext/fragment/Attachments.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t;var a;return{onPress:function(t){e.show("Custom handler invoked.")},onAfterItemAdded:function(e){debugger;a=e.oSource.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;var n=e.getParameter("item");var r=location.href;const o=/PAN_Number='([^']+)'/;const i=r.match(o);if(i){t=i[1];console.log(t)}else{console.log("PAN_Number not found")}var c=1;var s=function(e){var n={mediaType:e.getMediaType(),fileName:e.getFileName(),size:c,PAN_Number:t};var r={url:a+"odata/v4/catalog/PAN_attachments_APR",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(n)};return new Promise((e,t)=>{$.ajax(r).done((t,a,n)=>{e(t.ID)}).fail(e=>{t(e)})})};s(n).then(e=>{var r=a+`odata/v4/catalog/PAN_attachments_APR(ID=${e},PAN_Number='${t}')/content`;debugger;n.setUploadUrl(r);var o=this.byId("uploadSet");o.setHttpRequestMethod("PUT");debugger;o.uploadItem(n)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){debugger;var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(e){debugger},onOpenPressed:function(e){debugger;e.preventDefault();var t=e.getSource();let a=t.getUrl();var n=t.getFileName();var r=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl;let o=a.replace("/odata/v4/catalog","");let i=r+o;var c=function(e){var t={url:i,method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};c(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_createEntity:function(e){debugger;var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var a={url:"/odata/v4/catalog/PAN_attachments_APR",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(a).done((t,a,n)=>{e(t.ID)}).fail(e=>{t(e)})})},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"nfaform/ext/fragment/Justification.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><VBox id="_IDGenVBox" core:require="{ handler: \'nfaform/ext/fragment/Justification\'}"><TextArea id="textareafrag" width="100%" textDirection="LTR" placeholder="Enter a comment" liveChange="handler.live" height="175px"\n\tmaxLength="40" valueState="Success" \n\t></TextArea></VBox></core:FragmentDefinition>',
	"nfaform/ext/fragment/Justification.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(n){e.show("Custom handler invoked.")},live:function(e){debugger}}});
},
	"nfaform/ext/fragment/Workflow.fragment.xml":'<core:FragmentDefinition\n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"\n    xmlns:u="sap.ui.unified"\n    xmlns:rich="sap.ui.richtexteditor"\n    xmlns:commons="sap.suite.ui.commons"\n><VBox id="box" width="100%"><ScrollContainer id="_IDGenScrollContainer"\n            width="100%"\n            height="auto"\n            horizontal="true" \n            vertical="false" \n        ><Table id="sampleTable" width="110vw"></Table></ScrollContainer></VBox></core:FragmentDefinition>\n',
	"nfaform/ext/fragment/Workflow.js":function(){
sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{onPress:function(e){s.show("Custom handler invoked.")}}});
},
	"nfaform/i18n/i18n.properties":'# This is the resource bundle for nfaform\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=nfa_form_\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,35\nflpTitle=NFAFORM\n',
	"nfaform/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"nfaform","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.5","toolsId":"d7cc83d9-a7dc-4a0e-99be-ad470840a37e"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"nfaformflp-display":{"semanticObject":"nfaformflp","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"nfaform.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"tab1List","target":"tab1List"},{"pattern":"tab1({key}):?query:","name":"tab1ObjectPage","target":"tab1ObjectPage"},{"name":"tab1_tab1tovendor_dataObjectPage","pattern":"tab1({key})/tab1tovendor_data({tab1tovendor_dataKey}):?query:","target":"tab1_tab1tovendor_dataObjectPage"}],"targets":{"tab1List":{"type":"Component","id":"tab1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/tab1","variantManagement":"Page","navigation":{"tab1":{"detail":{"route":"tab1ObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"GridTable"}}}}}},"tab1ObjectPage":{"type":"Component","id":"tab1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/tab1","content":{"body":{"sections":{"Attachments":{"template":"nfaform.ext.fragment.Attachments","position":{"placement":"After","anchor":"VendorResponseDetails"},"title":"Attachments"},"Workflow":{"template":"nfaform.ext.fragment.Workflow","position":{"placement":"After","anchor":"Justification"},"title":"Workflow History"},"Justification":{"template":"nfaform.ext.fragment.Justification","position":{"placement":"After","anchor":"Attachments"},"title":"Justification","actions":{"CommentHistory":{"press":"nfaform.ext.controller.Comment.comment","visible":true,"enabled":true,"text":"Comment History"}}}}}},"navigation":{"tab1tovendor_data":{"detail":{"route":"tab1_tab1tovendor_dataObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.FieldGroup#Justification":{"actions":{"CommentHistory":{"press":"nfaform.ext.controller.Comment.comment","visible":true,"enabled":true,"text":"Comment History"}}}}}}},"tab1_tab1tovendor_dataObjectPage":{"type":"Component","id":"tab1_tab1tovendor_dataObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"navigation":{},"contextPath":"/tab1/tab1tovendor_data"}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#nfaform::tab1ObjectPage":{"controllerName":"nfaform.ext.controller.Objectpage"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"nfaformapprouter"}}'
});
//# sourceMappingURL=Component-preload.js.map
