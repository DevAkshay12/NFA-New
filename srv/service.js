const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    // Access the entities defined in your CDS model
    const { PAN_attachments_APR } = this.entities;

    // Before a CREATE operation on PAN_attachments_APR
    this.before('CREATE', 'PAN_attachments_APR', async req => {
        // Log the request data
        console.log('Create called');
        console.log(JSON.stringify(req.data));
        debugger
        // Check if an attachment with the same ID already exists
        const existingAttachment = await SELECT.from(PAN_attachments_APR).where({ ID: req.data.ID });
        req.data.url = `/odata/v4/catalog/PAN_attachments_APR(ID=${req.data.ID},PAN_Number='${req.data.PAN_Number}')/content`;
    });
});
