sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
	var panNumber;
	var baseuri;

    return {
        onPress: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },
        onAfterItemAdded: function(oEvent) {
			debugger
			baseuri = oEvent.oSource.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;
			var item = oEvent.getParameter("item");
			var id = location.href;
			const regex = /PAN_Number='([^']+)'/;
			const match = id.match(regex);
			if (match) {
				panNumber = match[1];
				console.log(panNumber);  // Output: Doc1025528402
			} else {
				console.log('PAN_Number not found');
			}
			var draft = 1;
			var _createEntity = function(item) {
				var data = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: draft,
					PAN_Number : panNumber,
				};
		

				var settings = {
					url: baseuri + "odata/v4/catalog/attachments",
					// url: "/odata/v4/catalog/attachments",
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					data: JSON.stringify(data)
				};
		
				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((results, textStatus, request) => {
							resolve(results.ID);
						})
						.fail((err) => {
							reject(err);
						});
				});
			};
		
			_createEntity(item)
				.then((id) => {
					 
					var url = baseuri + `odata/v4/catalog/attachments(ID=${id},PAN_Number='${panNumber}')/content`;
					// var url = `/odata/v4/catalog/attachments(ID=${id},PAN_Number='${panNumber}')/content`;
					debugger
					item.setUploadUrl(url);
					var oUploadSet = this.byId("uploadSet");
					oUploadSet.setHttpRequestMethod("PUT");
					debugger
					oUploadSet.uploadItem(item);
				})
				.catch((err) => {
					console.log(err);
				});
		},
        
			onUploadCompleted: function (oEvent) {
				debugger
				var oUploadSet = this.byId("uploadSet");
				oUploadSet.removeAllIncompleteItems();
				oUploadSet.getBinding("items").refresh();
			},

			onRemovePressed: function (oEvent) {
				debugger
				// oEvent.preventDefault();
				// oEvent.getParameter("item").getBindingContext().delete();
				// MessageToast.show("Selected file has been deleted");
				// sap.ui.getCore.byId("panappbeta::tab1ObjectPage--fe::CustomSubSection::Attachment--uploadSet-deleteDialog").destroy();
				// oEvent.getParameter("item").destroy();
			},

			onOpenPressed: function(oEvent) {
				 debugger
				oEvent.preventDefault();
				var item = oEvent.getSource();
				let itemUrl = item.getUrl();
				var fileName = item.getFileName();
				var url111 = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl
				let itemPath = itemUrl.replace('/odata/v4/catalog', '');

				// Step 2: Concatenate url111 with the modified itemPath
				let mergedUrl = url111 + itemPath;

				var _download = function(item) {
					var settings = {
						// url: url111 + item.getUrl(),
						url: mergedUrl,
						method: "GET",
						headers: {
							"Content-type": "application/octet-stream"
						},
						xhrFields: {
							responseType: 'blob'
						}
					};
			
					return new Promise((resolve, reject) => {
						$.ajax(settings)
							.done((result) => {
								resolve(result);
							})
							.fail((err) => {
								reject(err);
							});
					});
				};
			
				_download(item)
					.then((blob) => {
						var url = window.URL.createObjectURL(blob);
						// Open the file in a new tab
						window.open(url, '_blank');
					})
					.catch((err) => {
						console.log(err);
					});
			},
			

			_createEntity: function (item) {
				debugger
				var data = {
					mediaType: item.getMediaType(),
					fileName: item.getFileName(),
					size: item.getFileObject().size
				};

				var settings = {
					url: "/odata/v4/catalog/attachments",
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					data: JSON.stringify(data)
				}

				return new Promise((resolve, reject) => {
					$.ajax(settings)
						.done((results, textStatus, request) => {
							resolve(results.ID);
						})
						.fail((err) => {
							reject(err);
						})
				})
			},

			//formatters
			formatThumbnailUrl: function (mediaType) {
				var iconUrl;
				switch (mediaType) {
					case "image/png":
						iconUrl = "sap-icon://card";
						break;
					case "text/plain":
						iconUrl = "sap-icon://document-text";
						break;
					case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
						iconUrl = "sap-icon://excel-attachment";
						break;
					case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
						iconUrl = "sap-icon://doc-attachment";
						break;
					case "application/pdf":
						iconUrl = "sap-icon://pdf-attachment";
						break;
					default:
						iconUrl = "sap-icon://attachment";
				}
				return iconUrl;
			}
    };
});
