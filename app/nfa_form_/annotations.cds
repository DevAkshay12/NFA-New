using CatalogService as service from '../../srv/service';
annotate service.tab1 with @(
     UI.CreateHidden : true,
    UI.DeleteHidden :true,
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PAN_Number',
                Value : PAN_Number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SBG',
                Value : SBG,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SBU',
                Value : SBU,
            },
            {
                $Type : 'UI.DataField',
                Label : 'BUORPurchasing_Group',
                Value : BUORPurchasing_Group,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Plant_Code',
                Value : Plant_Code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Project_Description',
                Value : Project_Description,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PR_NumberBKTsBKT',
                Value : PR_NumberBKTsBKT,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Subject_of_ProposalOROrder',
                Value : Subject_of_ProposalOROrder,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Previous_PAN_References',
                Value : Previous_PAN_References,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Split_OrderORNo_of_vendors',
                Value : Split_OrderORNo_of_vendors,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SOP_Type',
                Value : SOP_Type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Order_Type_OR_Document_tyFuuidpe',
                Value : Order_Type_OR_Document_tyFuuidpe,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Asset_Type',
                Value : Asset_Type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Nature_of_Transaction',
                Value : Nature_of_Transaction,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Order_Location_OR_Plant',
                Value : Order_Location_OR_Plant,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Base_line_spend',
                Value : Base_line_spend,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Project_CurrencyORBase_Currency',
                Value : Project_CurrencyORBase_Currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Order_CurrencyORBid_currency',
                Value : Order_CurrencyORBid_currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Final_proposed_Value',
                Value : Final_proposed_Value,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Savings_achieved_btw_initial_and_final_quote',
                Value : Savings_achieved_btw_initial_and_final_quote,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Savings_against_base_line_spend_of_RFP',
                Value : Savings_against_base_line_spend_of_RFP,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Number_of_Vendors_Shortlisted_for_RFP',
                Value : Number_of_Vendors_Shortlisted_for_RFP,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Number_of_Vendors_Technically_Qualified',
                Value : Number_of_Vendors_Technically_Qualified,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Required_at_Site_Date',
                Value : Required_at_Site_Date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'RFP_Number',
                Value : RFP_Number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'RFP_Publish_Date',
                Value : RFP_Publish_Date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Time_Taken_for_FinalizationDASHIn_DAYS',
                Value : Time_Taken_for_FinalizationDASHIn_DAYS,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status',
                Value : status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'statusInd',
                Value : statusInd,
            },
            {
                $Type : 'UI.DataField',
                Label : 'created_by',
                Value : created_by,
            },
            {
                $Type : 'UI.DataField',
                Label : 'task_id',
                Value : task_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'type',
                Value : type,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status_a',
                Value : status_a,
            },
            {
                $Type : 'UI.DataField',
                Label : 'switch_control',
                Value : switch_control,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ProjectId',
                Value : ProjectId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'number_of_vendors_invited',
                Value : number_of_vendors_invited,
            },
            {
                $Type : 'UI.DataField',
                Label : 'total_levels_of_approval',
                Value : total_levels_of_approval,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Current_level_of_approval',
                Value : Current_level_of_approval,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Sap_workitem_id',
                Value : Sap_workitem_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Comments',
                Value : Comments,
            },
            {
                $Type : 'UI.DataField',
                Label : 'submitted_by',
                Value : submitted_by,
            },
            {
                $Type : 'UI.DataField',
                Label : 'submitted_date',
                Value : submitted_date,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PAN_Number',
            Value : PAN_Number,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SBG',
            Value : SBG,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SBU',
            Value : SBU,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BUORPurchasing_Group',
            Value : BUORPurchasing_Group,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Plant_Code',
            Value : Plant_Code,
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Label : 'status',
            Criticality : statusInd,
        },
    ],
);

