sap.ui.define([
    "./BaseController",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("com.ts.mdg.initiatesuppliercreation.controller.App", {
            onInit: function () {
                var oThisController = this;

                // oThisController.fnInitializeApp();
                //oThisController.getContentDensityClass();
                // this.startWorkflow();
            },
            // startWorkflow: function() {
            //     var token = this._fetchToken();
            //     this._startInstance(token);
            // },
            // _startInstance: function(token) {
            //     var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            //     var appPath = appId.replaceAll(".", "/");
            //     var appModulePath = jQuery.sap.getModulePath(appPath);
            //     var startContext = {};
            //     var workflowStartPayload = {definitionId: "myworkflow", context: startContext}
                             
            //     $.ajax({
            //         url: appModulePath+"/bpmworkflowruntime/v1/workflow-instances",
            //         method: "POST",
            //         async: false,
            //         contentType: "application/json",
            //         headers: {
            //             "X-CSRF-Token": token
            //         },
            //         data: JSON.stringify(workflowStartPayload),
            //         success: function(result, xhr, data) {
            //             MessageBox.alert("The workflow is started");
            //             // model.setProperty("/result", JSON.stringify(result, null, 4));
            //         },
            //         error: function (data) {
            //             MessageBox.alert("Error");
            //             // orderBusyDialog.close();
            //         }
            //     });
            // },
         
            // _fetchToken: function() {
            //     var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            //     var appPath = appId.replaceAll(".", "/");
            //     var appModulePath = jQuery.sap.getModulePath(appPath);

            //     var token;
            //     $.ajax({
            //         url: appModulePath+"/bpmworkflowruntime/v1/xsrf-token",
            //         method: "GET",
            //         async: false,
            //         headers: {
            //             "X-CSRF-Token": "Fetch"
            //         },
            //         success: function(result, xhr, data) {
            //             token = data.getResponseHeader("X-CSRF-Token");
            //         }
            //     });
            //     return token;
            // }
        });
    });
