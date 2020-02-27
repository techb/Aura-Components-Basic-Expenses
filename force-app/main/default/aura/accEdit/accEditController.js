({
    handleSaveRecord : function(component, event, helper) {
        component.find("AccountRecordCreator").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                var err = "";
                for (var i = 0; i < saveResult.error.length; i++) {
                    err += saveResult.error[i].message + "\n";
                }
                component.set("v.recordSaveError", err);
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
    }
})
