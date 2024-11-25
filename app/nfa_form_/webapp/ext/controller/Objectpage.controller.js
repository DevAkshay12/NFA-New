sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
    'use strict';

    return ControllerExtension.extend('nfaform.ext.controller.Objectpage', {
        // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
        override: {
            onInit: function () {
                // this is where you can perform initialization tasks if necessary
            },
            routing: {
                onAfterBinding: async function (oEvent) {
                    debugger
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
                        url: "/odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",  // URL for fetching the data
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
                                oModel.setData({ PAN_WORKFLOW_HISTORY_APR: results.value });  // Assuming `results` is an array
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
                        { header: "Employee Id", path: "PAN_Number" },
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
            }
        }
    });
});
