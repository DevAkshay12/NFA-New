namespace proj_schema;
using {
    cuid,
    managed
} from '@sap/cds/common';

@cds.persistance.exists
entity PAN_Details{
key PAN_Number : String default'def';
SBG : String;
SBU : String;
BUORPurchasing_Group : String;
Plant_Code : String;
Project_Description : String;
PR_NumberBKTsBKT : String; 
Subject_of_ProposalOROrder : String;
Previous_PAN_References : String;
Split_OrderORNo_of_vendors : String;
SOP_Type : String;
Order_Type_OR_Document_tyFuuidpe : String;
Asset_Type : String;
Nature_of_Transaction : String;
Order_Location_OR_Plant : String;
Base_line_spend : String;
Project_CurrencyORBase_Currency : String;
Order_CurrencyORBid_currency : String;
Final_proposed_Value : String;
Savings_achieved_btw_initial_and_final_quote : String;
Savings_against_base_line_spend_of_RFP : String;
Number_of_Vendors_Shortlisted_for_RFP : String;
Number_of_Vendors_Technically_Qualified : String;
Required_at_Site_Date : String;
RFP_Number : String;
RFP_Publish_Date : String;
Time_Taken_for_FinalizationDASHIn_DAYS : String;
status : String;
statusInd :Integer;//used for criticality rep
created_by :String;
task_id : String;
type : String;
status_a :String;
switch_control:Boolean default false;
ProjectId :String;
number_of_vendors_invited : String;
total_levels_of_approval : String(2);
Current_level_of_approval : String(2);
Sap_workitem_id:String;
Comments : LargeString;
submitted_by :String;
submitted_date :String;tab1totab2 : Composition of many PAN_WEB_EVENT on tab1totab2.tab2totab1 = $self;
}

@cds.persistance.exists
entity  PAN_WEB_EVENT{
key idd : String;
key PAN_Number : String;
eventNo : String;
number:String;
date:String;
numberOfVendorsParticipated :String;
l1AmountObtained : String;
tab2totab1 : Association to one PAN_Details on tab2totab1.PAN_Number = PAN_Number; 
}
