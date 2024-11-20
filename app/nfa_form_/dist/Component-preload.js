//@ui5-bundle nfaform/Component-preload.js
sap.ui.require.preload({
	"nfaform/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("nfaform.Component",{metadata:{manifest:"json"}})});
},
	"nfaform/i18n/i18n.properties":'# This is the resource bundle for nfaform\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=nfa_form_\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,35\nflpTitle=NFAFORM\n',
	"nfaform/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"nfaform","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.5","toolsId":"d7cc83d9-a7dc-4a0e-99be-ad470840a37e"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"nfaformflp-display":{"semanticObject":"nfaformflp","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.130.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"nfaform.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"tab1List","target":"tab1List"},{"pattern":"tab1({key}):?query:","name":"tab1ObjectPage","target":"tab1ObjectPage"}],"targets":{"tab1List":{"type":"Component","id":"tab1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/tab1","variantManagement":"Page","navigation":{"tab1":{"detail":{"route":"tab1ObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"GridTable"}}}}}},"tab1ObjectPage":{"type":"Component","id":"tab1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/tab1"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"nfaformapprouter"}}'
});
//# sourceMappingURL=Component-preload.js.map