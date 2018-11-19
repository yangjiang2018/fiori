sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("MockServer.controller.App", {
		
		onInit:function(){
			// var sUrl = "sap/opu/odata/sap/ZTEST_YWD_01_SRV";
			var url = "sap/test/jasidf/";
			var oModel = new  sap.ui.model.odata.v2.ODataModel(url);
			this.getView().setModel(oModel);
		}

	});
});