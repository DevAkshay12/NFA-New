sap.ui.define([
    "sap/m/MessageToast",
    "sap/suite/ui/commons/Timeline",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button",
    "sap/suite/ui/commons/TimelineItem"
], function(MessageToast, Timeline, Dialog, Text, Button, TimelineItem) {
    'use strict';
    var baseuri

    return {
        comment: function(oEvent) {
            baseuri = this._view.getParent().getAppComponent().getManifestObject()._oBaseUri._string;
            debugger
            // Define the settings for the AJAX request
            var settings = {
                // url: "/odata/v4/catalog/PAN_Comments_APR",  // URL for fetching the comments
                url: baseuri + "odata/v4/catalog/PAN_Comments_APR",  // URL for fetching the comments
                method: "GET",  // Use GET method to fetch data
                headers: {
                    "Accept": "application/json"  // Indicate the response type you expect
                }
            };

            // Return a Promise to handle the AJAX request asynchronously
            new Promise((resolve, reject) => {
                $.ajax(settings)
                    .done((results, textStatus, request) => {
                        resolve(results);  // Resolve with the fetched data (comments)
                    })
                    .fail((err) => {
                        reject(err);  // Reject with the error if the request fails
                    });
            })
            .then((results) => {
                // Now that the request is done, we can proceed
                var data = results.value;  // Extract the data from the response
                var entries = [];  // Array to hold the mapped comment entries

                // Map the data into the desired structure
                for (var a = 0; a < data.length; a++) {
                    var entry = {
                        createdAt: data[a].createdAt,  // Map createdAt from data[a]
                        comment: data[a].Comments,      // Map comment from data[a]
                        createdBy: data[a].createdBy   // Map createdBy from data[a]
                    };
                    entries.push(entry);  // Push the entry into the entries array
                }

                // Create the dialog
                var cdialog = new Dialog({
                    title: "Comments",
                    width: "80%",  // Set width to 80% of the parent container's width
                    maxWidth: "90%",  // Set max width to 90% of the screen (optional, you can adjust as needed)
                    endButton: new Button({
                        text: "Close",
                        press: function () {
                            cdialog.close();  // Close the dialog when the Close button is pressed
                        }
                    })
                });

                // Iterate over the entries array and create TimelineItems for each comment
                entries.forEach(function(entry) {
                    var oTimelineItem = new TimelineItem({
                        dateTime: entry.createdAt,  // Comment timestamp
                        text: entry.comment,  // Comment text
                        userName: entry.createdBy  // Comment creator
                    });

                    // Add each TimelineItem as content to the dialog
                    cdialog.addContent(oTimelineItem);
                });

                // Open the dialog now that the data is processed and ready
                cdialog.open();
            })
            .catch((err) => {
                console.error("Error fetching comments:", err);  // Handle any errors
                MessageToast.show("Error fetching comments.");
            });
        }
    };
});
