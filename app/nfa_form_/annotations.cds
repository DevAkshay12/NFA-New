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
            $Type : 'UI.CollectionFacet',
            Label : 'General Details',
            ID : 'GeneralDetails',
            Facets : [
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'GeneralDetails',
                    ID : 'GeneralDetails1',
                    Target : '@UI.FieldGroup#GeneralDetails',
                },
                {
                    $Type : 'UI.ReferenceFacet',
                    Label : 'Event History',
                    ID : 'EventHistory',
                    Target : 'tab1totab2/@UI.LineItem#EventHistory',
                },
            ],
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Response Details',
            ID : 'VendorResponseDetails',
            Target : 'tab1tovendor_data/@UI.LineItem#VendorResponseDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Justification',
            ID : 'Justification',
            Target : '@UI.FieldGroup#Justification',
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
    UI.FieldGroup #GeneralDetails : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : PAN_Number,
                Label : 'PAN_Number',
            },
            {
                $Type : 'UI.DataField',
                Value : BUORPurchasing_Group,
                Label : 'BUORPurchasing_Group',
            },
            {
                $Type : 'UI.DataField',
                Value : Plant_Code,
                Label : 'Plant_Code',
            },
            {
                $Type : 'UI.DataField',
                Value : Project_Description,
                Label : 'Project_Description',
            },
            {
                $Type : 'UI.DataField',
                Value : PR_NumberBKTsBKT,
                Label : 'PR_NumberBKTsBKT',
            },
            {
                $Type : 'UI.DataField',
                Value : Subject_of_ProposalOROrder,
                Label : 'Subject_of_ProposalOROrder',
            },
            {
                $Type : 'UI.DataField',
                Value : Split_OrderORNo_of_vendors,
                Label : 'Split_OrderORNo_of_vendors',
            },
            {
                $Type : 'UI.DataField',
                Value : Order_Location_OR_Plant,
                Label : 'Order_Location_OR_Plant',
            },
            {
                $Type : 'UI.DataField',
                Value : Base_line_spend,
                Label : 'Base_line_spend',
            },
            {
                $Type : 'UI.DataField',
                Value : Project_CurrencyORBase_Currency,
                Label : 'Project_CurrencyORBase_Currency',
            },
            {
                $Type : 'UI.DataField',
                Value : Order_CurrencyORBid_currency,
                Label : 'Order_CurrencyORBid_currency',
            },
            {
                $Type : 'UI.DataField',
                Value : Final_proposed_Value,
                Label : 'Final_proposed_Value',
            },
            {
                $Type : 'UI.DataField',
                Value : Savings_achieved_btw_initial_and_final_quote,
                Label : 'Savings_achieved_btw_initial_and_final_quote',
            },
            {
                $Type : 'UI.DataField',
                Value : Savings_against_base_line_spend_of_RFP,
                Label : 'Savings_against_base_line_spend_of_RFP',
            },
            {
                $Type : 'UI.DataField',
                Value : Number_of_Vendors_Shortlisted_for_RFP,
                Label : 'Number_of_Vendors_Shortlisted_for_RFP',
            },
            {
                $Type : 'UI.DataField',
                Value : RFP_Number,
                Label : 'RFP_Number',
            },
            {
                $Type : 'UI.DataField',
                Value : RFP_Publish_Date,
                Label : 'RFP_Publish_Date',
            },
            {
                $Type : 'UI.DataField',
                Value : Time_Taken_for_FinalizationDASHIn_DAYS,
                Label : 'Time_Taken_for_FinalizationDASHIn_DAYS',
            },
            {
                $Type : 'UI.DataField',
                Value : status,
                Label : 'status',
            },
            {
                $Type : 'UI.DataField',
                Value : number_of_vendors_invited,
                Label : 'number_of_vendors_invited',
            },
        ],
    },
    UI.FieldGroup #Justification : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : tab1tocom.Comments,
                Label : 'Comments',
            },
        ],
    },
);

annotate service.tab2 with @(
    UI.LineItem #EventHistory : [
        {
            $Type : 'UI.DataField',
            Value : eventNo,
            Label : 'eventNo',
        },
        {
            $Type : 'UI.DataField',
            Value : number,
            Label : 'number',
        },
        {
            $Type : 'UI.DataField',
            Value : date,
            Label : 'date',
        },
        {
            $Type : 'UI.DataField',
            Value : numberOfVendorsParticipated,
            Label : 'numberOfVendorsParticipated',
        },
        {
            $Type : 'UI.DataField',
            Value : l1AmountObtained,
            Label : 'l1AmountObtained',
        },
    ],
    UI.LineItem #VendorResponseDetails : [
    ],
);

annotate service.vendor_data with @(
    UI.LineItem #VendorResponseDetails : [
        {
            $Type : 'UI.DataField',
            Value : Awarded_Vendor,
            Label : 'Awarded_Vendor',
        },
        {
            $Type : 'UI.DataField',
            Value : Vendor_Name,
            Label : 'Vendor_Name',
        },
        {
            $Type : 'UI.DataField',
            Value : Original_quote,
            Label : 'Original_quote',
        },
        {
            $Type : 'UI.DataField',
            Value : Final_Quote,
            Label : 'Final_Quote',
        },
        {
            $Type : 'UI.DataField',
            Value : Vendor_Location,
            Label : 'Vendor_Location',
        },
        {
            $Type : 'UI.DataField',
            Value : Order_amount_OR_Split_order_amount,
            Label : 'Order_amount_OR_Split_order_amount',
        },
        {
            $Type : 'UI.DataField',
            Value : Discount_Amount,
            Label : 'Discount_Amount',
        },
        {
            $Type : 'UI.DataField',
            Value : Discount_percentage,
            Label : 'Discount_percentage',
        },
        {
            $Type : 'UI.DataField',
            Value : Rank,
            Label : 'Rank',
        },
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Response',
            ID : 'VendorResponse',
            Target : '@UI.FieldGroup#VendorResponse',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Payment Term Details',
            ID : 'PaymentTermDetails',
            Target : 'vendtoptd/@UI.LineItem#PaymentTermDetails',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Terms and Conditions',
            ID : 'TermsandConditions',
            Target : '@UI.FieldGroup#TermsandConditions',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Item Details',
            ID : 'ItemDetails',
            Target : 'vendtopd/@UI.LineItem#ItemDetails',
        },
    ],
    UI.FieldGroup #VendorResponse : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Proposed_Vendor_Name,
                Label : 'Proposed_Vendor_Name',
            },
            {
                $Type : 'UI.DataField',
                Value : Supplier_Origin_State,
                Label : 'Supplier_Origin_State',
            },
            {
                $Type : 'UI.DataField',
                Value : Destination_State_BKTShipDASHto_LocationBKT,
                Label : 'Destination_State_BKTShipDASHto_LocationBKT',
            },
            {
                $Type : 'UI.DataField',
                Value : Vendor_GST_Number,
                Label : 'Vendor_GST_Number',
            },
            {
                $Type : 'UI.DataField',
                Value : Vendor_Contact_PersonDASH1,
                Label : 'Vendor_Contact_PersonDASH1',
            },
            {
                $Type : 'UI.DataField',
                Value : Vendor_Contact_PersonDASH2,
                Label : 'Vendor_Contact_PersonDASH2',
            },
            {
                $Type : 'UI.DataField',
                Value : Technical_Committee_who_cleared_the_proposal,
                Label : 'Technical_Committee_who_cleared_the_proposal',
            },
            {
                $Type : 'UI.DataField',
                Value : Commercial_Committee_who_cleared_the_proposal,
                Label : 'Commercial_Committee_who_cleared_the_proposal',
            },
            {
                $Type : 'UI.DataField',
                Value : Incoterms,
                Label : 'Incoterms',
            },
            {
                $Type : 'UI.DataField',
                Value : Order_Value_BKTIn_Bid_CurrencyBKT,
                Label : 'Order_Value_BKTIn_Bid_CurrencyBKT',
            },
            {
                $Type : 'UI.DataField',
                Value : Order_Value_BKTIn_Project_CurrencyBKT,
                Label : 'Order_Value_BKTIn_Project_CurrencyBKT',
            },
            {
                $Type : 'UI.DataField',
                Value : Vendor_Final_Quotation_Amount,
                Label : 'Vendor_Final_Quotation_Amount',
            },
            {
                $Type : 'UI.DataField',
                Value : Vendor_Final_Quotation_Date,
                Label : 'Vendor_Final_Quotation_Date',
            },
            {
                $Type : 'UI.DataField',
                Value : Project_CurrencyORBase_Currency,
                Label : 'Project_CurrencyORBase_Currency',
            },
            {
                $Type : 'UI.DataField',
                Value : Order_CurrencyORBid_currency,
                Label : 'Order_CurrencyORBid_currency',
            },
        ],
    },
    UI.FieldGroup #TermsandConditions : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : Scope_and_Responsibilities,
                Label : 'Scope_and_Responsibilities',
            },
            {
                $Type : 'UI.DataField',
                Value : Commercial_Terms,
                Label : 'Commercial_Terms',
            },
            {
                $Type : 'UI.DataField',
                Value : Compliance_Terms,
                Label : 'Compliance_Terms',
            },
            {
                $Type : 'UI.DataField',
                Value : Others,
                Label : 'Others',
            },
        ],
    },
);

annotate service.PAN_Comments_APR with {
    Comments @UI.MultiLineText : true
};

annotate service.PAYMENT_TERM_DETAILS with @(
    UI.LineItem #PaymentTermDetails : [
        {
            $Type : 'UI.DataField',
            Value : slNo,
            Label : 'slNo',
        },
        {
            $Type : 'UI.DataField',
            Value : Payment_methord,
            Label : 'Payment_methord',
        },
        {
            $Type : 'UI.DataField',
            Value : Percentage,
            Label : 'Percentage',
        },
        {
            $Type : 'UI.DataField',
            Value : Description,
            Label : 'Description',
        },
        {
            $Type : 'UI.DataField',
            Value : Due_date,
            Label : 'Due_date',
        },
        {
            $Type : 'UI.DataField',
            Value : Mandatory_Documents_OR_Submissions,
            Label : 'Mandatory_Documents_OR_Submissions',
        },
        {
            $Type : 'UI.DataField',
            Value : To_be_certified_in_Company,
            Label : 'To_be_certified_in_Company',
        },
    ]
);

annotate service.PAN_PRICE_DETAILS with @(
    UI.LineItem #ItemDetails : [
        {
            $Type : 'UI.DataField',
            Value : Item_Code,
            Label : 'Item_Code',
        },
        {
            $Type : 'UI.DataField',
            Value : HSN_OR_SAC_Code,
            Label : 'HSN_OR_SAC_Code',
        },
        {
            $Type : 'UI.DataField',
            Value : Item_Short_Description,
            Label : 'Item_Short_Description',
        },
        {
            $Type : 'UI.DataField',
            Value : UOM,
            Label : 'UOM',
        },
        {
            $Type : 'UI.DataField',
            Value : Quantity,
            Label : 'Quantity',
        },
        {
            $Type : 'UI.DataField',
            Value : Unit_Price,
            Label : 'Unit_Price',
        },
        {
            $Type : 'UI.DataField',
            Value : Amount,
            Label : 'Amount',
        },
        {
            $Type : 'UI.DataField',
            Value : Indian_Tax_PER,
            Label : 'Indian_Tax_PER',
        },
    ]
);

