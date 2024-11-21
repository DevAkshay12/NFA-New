using { proj_schema as my } from '../db/schema';

service CatalogService {
     @odata.draft.enabled
 entity tab1 as projection on my.PAN_Details;
 entity tab2 as projection on my.PAN_WEB_EVENT;
  entity tab3 as projection on my.PAN_TYPE;
  entity vendor_data as projection on my.PAN_vendor_data;
  entity Fvendor_responseoo as projection on my.PAN_vendor_response; 
 entity PAYMENT_TERM_DETAILS as projection on my.PAN_PAYMENT_TERM_DETAILS;
  //  @odata.draft.enabled
 entity PAN_PRICE_DETAILS as projection on my.PAN_PRICE_DETAILS;
  entity PAN_attachments_APR as projection on my.PAN_attachments;
   entity PAN_Comments_APR as projection on my.PAN_Comments;
   entity PAN_WORKFLOW_HISTORY_APR as projection on my.PAN_WORKFLOW_HISTORY;
    entity approversKeys as projection on my.approversKeys;
}