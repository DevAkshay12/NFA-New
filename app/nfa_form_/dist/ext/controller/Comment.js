sap.ui.define(["sap/m/MessageToast","sap/suite/ui/commons/Timeline","sap/m/Dialog","sap/m/Text","sap/m/Button","sap/suite/ui/commons/TimelineItem"],function(e,t,n,o,a,r){"use strict";var s;var m;return{comment:function(o){var i=location.href;const c=/PAN_Number='([^']+)'/;const l=i.match(c);if(l){m=l[1];console.log(m)}else{console.log("PAN Number not found")}s=this._view.getParent().getAppComponent().getManifestObject()._oBaseUri._string;debugger;var d={url:s+"odata/v4/catalog/PAN_Comments_APR",method:"GET",headers:{Accept:"application/json"}};new Promise((e,t)=>{$.ajax(d).done((t,n,o)=>{e(t)}).fail(e=>{t(e)})}).then(e=>{var o=e.value;var s=o.filter(e=>e.PAN_Number.trim()===m);var i=[];if(s.length!=0){for(var c=0;c<o.length;c++){var l={createdAt:s[c].createdAt,comment:s[c].Comments,createdBy:s[c].createdBy};i.push(l)}var d=new n({title:"Comments",width:"150%",maxWidth:"150%",endButton:new a({text:"Close",press:function(){d.close()}})});var u=new t({width:"400%",enableScroll:true});i.forEach(function(e){var t=new r({dateTime:e.createdAt,text:e.comment,userName:e.createdBy});u.addContent(t);d.addContent(t)});d.open()}else{var h=new r({dateTime:(new Date).toISOString(),text:"No comments available.",userName:"System"});d.addContent(h);d.open()}}).catch(t=>{console.error("Error fetching comments:",t);e.show("Error fetching comments.")})}}});
//# sourceMappingURL=Comment.js.map