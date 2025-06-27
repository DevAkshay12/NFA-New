sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('nfaform.ext.controller.List', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf nfaform.ext.controller.List
             */
			onInit: function () {
				debugger
				var filter = sap.ui.getCore().byId("nfaform::tab1List--fe::FilterBar::tab1::FilterField::created_by");
				filter.setVisible(false);
				debugger;
				// var name = "rajendraakshay1@gmail.com"
				var name = sap.ushell.Container.getUser().getEmail();
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();

				var oCondition = {
					operator: "Contains", // Set the operator to "Contains"
					values: [name]  // Set the value to be filtered
				};

				
				filter.setConditions([oCondition]);
			}
		}
	});
});
