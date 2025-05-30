sap.ui.define([
    "sap/m/MessageToast",
    "sap/suite/ui/commons/Timeline",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/suite/ui/commons/TimelineItem"
], function(MessageToast, Timeline, Dialog, Button, TimelineItem) {
    'use strict';

    return {
        comment: function(oEvent) {
            var url = location.href;
            const regex = /PAN_Number='([^']+)'/;
            const match = url.match(regex);
            var panNumber = match ? match[1] : null;

            if (!panNumber) {
                console.log("PAN Number not found");
                MessageToast.show("PAN Number not found in the URL.");
                return;
            }

            var baseuri = this._view.getParent().getAppComponent().getManifestObject()._oBaseUri._string;

            var settings = {
                url: baseuri + `odata/v4/catalog/PAN_Comments`,
                // url: "/odata/v4/catalog/PAN_Comments",
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };

            // Fetch the data using an AJAX call
            new Promise((resolve, reject) => {
                $.ajax(settings)
                    .done((results) => resolve(results))
                    .fail((err) => reject(err));
            })
            .then((results) => {
                var data = results.value;
                var filteredData = data.filter(entry => entry.PAN_Number.trim() === panNumber);

                // Create a new dialog
                var dialog = new sap.m.Dialog({
                    title: "Comments",
                    width: "350%",
                    maxWidth: "450%",
                    endButton: new sap.m.Button({
                        text: "Close",
                        press: function() {
                            dialog.close();
                        }
                    })
                });
                dialog.addStyleClass("customDialogWidth");

                // Create a new timeline
                var timeline = new sap.suite.ui.commons.Timeline({
                    width: "900%",
                    enableScroll: true
                });

                if (filteredData.length > 0) {
                    // Add comments to the timeline
                    filteredData.forEach(function(entry) {
                        var timelineItem = new sap.suite.ui.commons.TimelineItem({
                            dateTime: entry.createdAt,
                            text: entry.Comments,
                            userName: entry.createdBy
                        });
                        timeline.addContent(timelineItem);
                    });
                } else {
                    // Add a "No comments available" entry
                    var noCommentsItem = new sap.suite.ui.commons.TimelineItem({
                        dateTime: new Date().toISOString(),
                        text: "No comments available.",
                        userName: "System"
                    });
                    timeline.addContent(noCommentsItem);
                }

                // Add the timeline to the dialog
                dialog.addContent(timeline);
                dialog.open();
            })
            .catch((err) => {
                console.error("Error fetching comments:", err);
                MessageToast.show("Error fetching comments.");
            });
        }
    };
});
