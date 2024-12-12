sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
    'use strict';
    var baseuri;
    var panNumber;
    var url = location.href;
    // Regular expression to match the PAN_Number value
        const regex = /PAN_Number='([^']+)'/;

        // Execute the regex on the URL
        const match = url.match(regex);

        if (match) {
            panNumber = match[1]; // Extracted PAN Number
            console.log(panNumber); // Output: Doc1007339210
        } else {
            console.log("PAN Number not found");
        }

    return ControllerExtension.extend('nfaform.ext.controller.Objectpage', {
        // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
        override: {
            onInit: function () {
                // this is where you can perform initialization tasks if necessary
            },
            editFlow: {
                onAfterSave: async function (oEvent) {
                    debugger;
                    sap.m.MessageBox.confirm(
                        "Do you want to send for Approval?", // Message
                        {
                            actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO], 
                            onClose: async function (oAction) {
                                if (oAction === sap.m.MessageBox.Action.YES) {
                                    debugger
                                    console.log("Save action confirmed");
                                   var oFunction= oEvent.context.getModel().bindContext(`/${'sendforapproval'}(...)`)
                                   var key = 
                                   { "key": panNumber, 
                                     "status": "Approval", 
                                   };
                                   key = JSON.stringify(key);
                                   oFunction.setParameter("data", key);
                                   await oFunction.execute();
                                   let oContext1 = oFunction.getBoundContext();
                                   let result1 = oContext1.getObject();
                                   result1 = JSON.parse(result1.value);

                                } else {
                                    console.log("Save action cancelled");
                                }
                            }
                        }
                    );
                }
            },
            routing: {
                onAfterBinding: async function (oEvent) {
                    debugger
                   
                    baseuri = this.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;
                    var workflow_table = sap.ui.getCore().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Workflow--sampleTable");
					workflow_table.addStyleClass("workFlowTable"  );
				
					workflow_table.addStyleClass("sapUiRespGrid"  );
					workflow_table.addStyleClass("sapUiRespGridHSpace1"  );
                    // Check if the table is correctly referenced
                    if (!workflow_table) {
                        console.error("Table not found.");
                        return;
                    }

                    // Define the settings for the AJAX call
                    var settings = {
                        url: baseuri + "odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",  // URL for fetching the data
                        // url: "/odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",  // URL for fetching the data
                        method: "GET",  // Use GET method to fetch data
                        headers: {
                            "Accept": "application/json"  // Expect JSON response
                        }
                    };

                    // Fetch data and set the model
                    new Promise((resolve, reject) => {
                        $.ajax(settings)
                            .done((results, textStatus, request) => {
                                // Create a JSON model and set the data
                                var oModel = new sap.ui.model.json.JSONModel();

                                const filteredResults = results.value.filter(item => item.PAN_Number === panNumber);
                                oModel.setData({ PAN_WORKFLOW_HISTORY_APR: filteredResults });  // Assuming `results` is an array
                                // Set the model to the table
                                workflow_table.setModel(oModel);  // Bind the model to the table
								console.log(results);

                                // Bind the items to the table
                                workflow_table.bindItems({
                                    path: "/PAN_WORKFLOW_HISTORY_APR",  // Path to the array in the model
                                    template: new sap.m.ColumnListItem({
                                        cells: [
                                            new sap.m.Text({ text: "{PAN_Number}" }),
                                            new sap.m.Text({ text: "{Employee_Name}" }),
                                            new sap.m.Text({ text: "{level}" }),
                                            new sap.m.Text({ text: "{Notification_Status}" }),
                                            new sap.m.Text({ text: "{Approved_by}" })
                                        ]
                                    })
                                });

                                resolve(results);
                            })
                            .fail((err) => {
                                reject(err);  // Handle error if the AJAX request fails
                            });
                    });

                    // Define the columns dynamically
                    var columns = [
                        { header: "PAN Number", path: "PAN_Number" },
                        { header: "Employee Name", path: "Employee_Name" },
                        { header: "Level", path: "level" },
                        { header: "Status", path: "Notification_Status" },
                        { header: "Approved By", path: "Approved_by" }
                    ];

                    // Clear existing columns in case of re-binding
                    workflow_table.destroyColumns();

                    // Add columns dynamically to the table
                    columns.forEach(function (col) {
                        var column = new sap.m.Column({
                            header: new sap.m.Text({ text: col.header })
                        });
                        workflow_table.addColumn(column);  // Add each column to the table
                    });
                }
            },            
        }
    });
});
