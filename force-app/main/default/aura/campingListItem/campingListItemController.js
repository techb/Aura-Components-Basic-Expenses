({
    packItem : function(component, event, helper) {
        var packed = component.get("v.item", true);
        packed.Packed__c = true;
        component.set("v.item", packed);

        event.getSource().set("v.disabled", true);
    }
})
