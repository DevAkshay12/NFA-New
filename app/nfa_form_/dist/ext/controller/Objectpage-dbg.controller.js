sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
    'use strict';
    var baseuri;
    var panNumber;
    var url;;
    var that, regex,view, match;
    // Regular expression to match the PAN_Number value
    regex = /PAN_Number='([^']+)'/;
    url = location.href;
    // Execute the regex on the URL
    match = url.match(regex);

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
                onBeforeSave: async function (oEvent) {
                    view = this;
                    const userActionPromise = new Promise(async (resolve, reject) => {
                        debugger;

                        var textarea = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                        var comment = textarea.getValue();

                        var attachments = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");
                        attachments.setUploadButtonInvisible(false);
                        attachments.setUploadEnabled(false);
                        if (attachments.getItems()) {
                            for (let a = 0; a < attachments.getItems().length; a++) {
                                attachments.getItems()[0].setEnabledRemove(false);
                                attachments.getItems()[0].setVisibleRemove(false);
                            }
                        }
                        sap.m.MessageBox.confirm(
                            "Do you want to send for Approval?", // Message
                            {
                                actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
                                onClose: async function (oAction) {
                                    if (oAction === sap.m.MessageBox.Action.YES) {
                                        debugger;
                                        // if (comment.length == 0) {
                                        //     const oMessageModel = new sap.ui.model.json.JSONModel([
                                        //         {
                                        //             type: "Error",
                                        //             title: "Comments Required",
                                        //             description: "Comments cannot be empty. Please enter a value",
                                        //             subtitle: "Comments section"
                                        //         }
                                        //     ]);


                                        //     const oMessagePopover = new sap.m.MessagePopover({
                                        //         items: {
                                        //             path: "/",
                                        //             template: new sap.m.MessageItem({
                                        //                 type: "{type}",
                                        //                 title: "{title}",
                                        //                 description: "{description}",
                                        //                 subtitle: "{subtitle}"
                                        //             })
                                        //         }
                                        //     });

                                            
                                        //     oMessagePopover.setModel(oMessageModel);

                                        //     // Open the MessagePopover
                                        //     oMessagePopover.openBy(textarea); // Opens relative to the textarea
                                        //     reject(true);


                                        // }
                                        // if (comment.length > 0) {
                                        //     console.log("Save action confirmed");
                                        //     debugger
                                        //     var cFunction = oEvent.context.getModel().bindContext(`/${'comment'}(...)`);
                                        //     // var name = sap.ushell.Container.getUser().getEmail(); // Replace with actual user email
                                        //     var name = "rajendraakshay1@gmail.com" // Replace with actual user email
                                        //     var comment1 = {
                                        //         "type": "insert",
                                        //         "NFA_Number": panNumber,
                                        //         "comment": comment,
                                        //         "user": name,
                                        //         status: "demo"
                                        //     };
                                        //     comment1 = JSON.stringify(comment1);
                                        //     cFunction.setParameter("data", comment1);
                                        //     await cFunction.execute();
                                        //     let Context1 = cFunction.getBoundContext();
                                        //     let result1 = Context1.getObject();
                                        //     textarea.setEditable(false);
                                        //     resolve(true);
                                        // }
                                        if (comment.length == 0) {
                                            // Create message model for error
                                            const oMessageModel = new sap.ui.model.json.JSONModel([
                                                {
                                                    type: "Error",
                                                    title: "Comments Required",
                                                    description: "Comments cannot be empty. Please enter a value",
                                                    subtitle: "Comments section"
                                                }
                                            ]);

                                            // Instantiate MessagePopover
                                            const oMessagePopover = new sap.m.MessagePopover({
                                                items: {
                                                    path: "/",
                                                    template: new sap.m.MessageItem({
                                                        type: "{type}",
                                                        title: "{title}",
                                                        description: "{description}",
                                                        subtitle: "{subtitle}"
                                                    })
                                                }
                                            });

                                            // Set the model to the MessagePopover
                                            oMessagePopover.setModel(oMessageModel);

                                            // Open the MessagePopover
                                            oMessagePopover.openBy(textarea); // Opens relative to the textarea

                                            // Reject the promise to stop further execution
                                            reject(true);
                                        }
                                        else {
                                             var name = sap.ushell.Container.getUser().getEmail(); // Replace with actual user email
                                        // var name = "rajendraakshay1@gmail.com" // Replace with actual user email
                                        console.log("Save action confirmed");

                                        var oFunction = oEvent.context.getModel().bindContext(`/${'sendforapproval'}(...)`);
                                        var key = {
                                            key: panNumber,
                                            status: "Approval",
                                            name: name
                                        };
                                        key = JSON.stringify(key);
                                        oFunction.setParameter("data", key);
                                        await oFunction.execute();
                                        let oContext1 = oFunction.getBoundContext();
                                        let result1 = oContext1.getObject();
                                        // result1 = JSON.parse(result1.value); // If necessary, uncomment to parse

                                        // resolve(true); // Resolve the promise once the "Approval" request is sent
                                            resolve(true);
                                            view.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit");
                                        }

                                       
                                    }


                                    else {
                                        console.log("Save action cancelled");
                                        resolve(true);
                                         // Reject the promise if user cancels
                                    }
                                }
                            }
                        );
                    });

                    await userActionPromise; // Wait for the user's response to the confirmation

                },
                onAfterSave : async function (oEvent) {
                    debugger
                    var textarea = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                    var comment = textarea.getValue();
                    if (comment.length > 0) {
                        console.log("Save action confirmed");
                        debugger
                        var cFunction = oEvent.context.getModel().bindContext(`/${'comment'}(...)`);
                        var name = sap.ushell.Container.getUser().getEmail(); // Replace with actual user email
                        // var name = "rajendraakshay1@gmail.com" // Replace with actual user email
                        var comment1 = {
                            "type": "insert",
                            "NFA_Number": panNumber,
                            "comment": comment,
                            "user": name,
                            status: "demo"
                        };
                        comment1 = JSON.stringify(comment1);
                        cFunction.setParameter("data", comment1);
                        await cFunction.execute();
                        let Context1 = cFunction.getBoundContext();
                        let result1 = Context1.getObject();
                        textarea.setEditable(false);
                    }
                },
                onAfterDiscard : async function(oEvent)
                {
                    debugger
                    var textarea = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                    var attachments = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");
                    var comment = textarea.getValue();
                    textarea.setEditable(false);
                    attachments.setUploadButtonInvisible(true);
                    attachments.setUploadEnabled(false);
                    if(attachments.getItems())
                    {
                        for(let a = 0;a < attachments.getItems().length;a++)
                            {
                                attachments.getItems()[a].setEnabledRemove(false)
                                attachments.getItems()[a].setVisibleRemove(false);
                            }
                    }
                    
                },



                onBeforeEdit: async function (oEvent) {
                    debugger
                    var attachments = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");
                    // var edit = this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].mProperties.visible;
                    // if(edit == true)
                    // {
                    var textarea = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                    textarea.setEditable(true);
                    attachments.setUploadButtonInvisible(false);
                    attachments.setUploadEnabled(true)
                    if (attachments.getItems()) {
                        for (let a = 0; a < attachments.getItems().length; a++) {
                            attachments.getItems()[a].setEnabledRemove(true);
                            attachments.getItems()[a].setVisibleRemove(true);
                        }
                    }
                }
            },
            routing: {
                onAfterBinding: async function (oEvent) {
                    debugger
                    // if (this._isExecuted) {
                    //     // If the function has already been executed, return early to prevent re-execution
                    //     return;
                    // }
                
                    // this._isExecuted = true;
                    var stat
                    that = this;
                    var baseuri = that.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string
                    const regex1 = /PAN_Number='([^']+)'/;
                    var url1 = location.href;
                    const match1 = url1.match(regex1);
                    var url = baseuri + `odata/v4/catalog/tab1?$filter=PAN_Number eq '${match1[1]}'`;
                    // var url = `/odata/v4/catalog/tab1?$filter=PAN_Number eq '${match1[1]}'`;
                    $.ajax({
                        url: url,
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json" // Content type header
                        }
                    })
                        .then(function (response) {
                            debugger
                            stat = response.value[0].status;
                            if ((stat == "pending for Approval") || (stat == "Approved")) {
                                that.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].addStyleClass("edit");
                            }
                            else {
                                that.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].removeStyleClass("edit");
                            }
                            console.log("Data retrieved successfully:", response);
                        })
                        .catch(function (error) {
                            debugger
                            console.error("Error occurred during AJAX call:", error);
                        });
                    if (!this._attachmentsInitialized) {
                        this._attachmentsInitialized = true;
                        var attachments = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Attachments--uploadSet");
                        var textarea = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                        //    var edit = this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[2].mProperties.visible;
                        var match = location.href.match(/IsActiveEntity=([^,)]+)/);
                        var isActiveEntity = match[1];
                        if (isActiveEntity === "true") {
                            textarea.setEditable(false)
                            attachments.setUploadButtonInvisible(true);
                            attachments.setUploadEnabled(false)
                            if (attachments.getItems()) {
                                for (let a = 0; a < attachments.getItems().length; a++) {
                                    attachments.getItems()[0].setEnabledRemove(false);
                                    attachments.getItems()[0].setVisibleRemove(false);
                                }
                            }
                        }
                        else {
                            textarea.setEditable(true)
                            attachments.setUploadButtonInvisible(false);
                            attachments.setUploadEnabled(true)
                            if (attachments.getItems()) {
                                for (let a = 0; a < attachments.getItems().length; a++) {
                                    attachments.getItems()[0].setEnabledRemove(true);
                                    attachments.getItems()[0].setVisibleRemove(true);
                                }
                            }
                        }
                    }
                    baseuri = this.getView().getParent().getAppComponent().getManifestObject()._oBaseUri._string;
                    debugger
                    var workflow_table = sap.ui.getCore().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Workflow--sampleTable");
                    workflow_table.addStyleClass("workFlowTable");

                    workflow_table.addStyleClass("sapUiRespGrid");
                    workflow_table.addStyleClass("sapUiRespGridHSpace1");
                    // Check if the table is correctly referenced
                    if (!workflow_table) {
                        console.error("Table not found.");
                        return;
                    }

                    // Define the settings for the AJAX call
                    var settings = {
                        // url: baseuri + "odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",  // URL for fetching the data
                        url: "/odata/v4/catalog/PAN_WORKFLOW_HISTORY_APR",  // URL for fetching the data
                        method: "GET",  // Use GET method to fetch data
                        headers: {
                            "Accept": "application/json"  // Expect JSON response
                        }
                    };

                    // Fetch data and set the model
                    new Promise((resolve, reject) => {
                        $.ajax(settings)
                            .done(async (results, textStatus, request) => {
                                // Create a JSON model and set the data
                                var oModel = new sap.ui.model.json.JSONModel();
                                url = location.href;
                                regex = /PAN_Number='([^']+)'/;
                                match = url.match(regex);
                                panNumber = match[1];
                                const filteredResults = results.value.filter(item => item.PAN_Number === panNumber);
                                oModel.setData({ PAN_WORKFLOW_HISTORY_APR: filteredResults });  // Assuming `results` is an array
                                // Set the model to the table
                                workflow_table.setModel(oModel);  // Bind the model to the table
                                console.log(results);
                                await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
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
                    var comment_data = this.getView().byId("nfaform::tab1ObjectPage--fe::CustomSubSection::Justification--textareafrag");
                    var cFunction = this.getView().getModel().bindContext(`/${'comment'}(...)`);
                    regex = /PAN_Number='([^']+)'/;
                    url = location.href;
                    // Execute the regex on the URL
                    match = url.match(regex);
                    panNumber = match[1];
                    var comment =
                    {
                        "type": "get",
                        "NFA_Number": panNumber,
                    }

                
                            // Convert the comment to JSON
                            comment = JSON.stringify(comment);

                            // Set the parameter
                            cFunction.setParameter("data", comment);

                            // Execute the function
                            await cFunction.execute();

                            // Get the context and parse the result
                            let oContext1 = cFunction.getBoundContext();
                            let result1 = oContext1.getObject();
                            result1 = JSON.parse(result1.value);
                            debugger
                            // Log the result
                            console.log("Execution Result:", result1);
                            if (result1[0] && result1[0].Comments) {
                                comment_data.setValue(result1[0].Comments);
                                console.log("Comment data updated:", result1[0].Comments);

                            } else {
                                comment_data.setValue(""); // Set to empty if no comments are found
                                console.warn("No comments found. Setting to empty.");

                            }
                            return result1; // Return the result if needed
                    }

                }
            },
    });
});
