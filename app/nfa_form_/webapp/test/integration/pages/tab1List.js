sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'nfaform',
            componentId: 'tab1List',
            contextPath: '/tab1'
        },
        CustomPageDefinitions
    );
});