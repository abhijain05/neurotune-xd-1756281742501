sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.fiscalinformationview.controller.App", {
		onInit: function() {
			// Get the router instance
			var oRouter = UIComponent.getRouterFor(this);

			// Initialize routing and handle potential errors
			if (oRouter) {
				oRouter.attachBypassed(function(oEvent) {
					console.log("Route bypassed:", oEvent.getParameter("hash"));
					// Implement error handling here - display a user-friendly message or redirect to a default view
				});

        // Navigate to main view if no hash is present.
        if (!window.location.hash || window.location.hash === "#") {
          setTimeout(function() {
            oRouter.navTo("RouteMain"); // Assuming 'RouteMain' is defined in manifest.json
          }, 100);
        }
			} else {
				console.error("Router not found in App controller");
				// Implement more robust error handling - maybe show a message to the user.
			}
		}
	});
});
