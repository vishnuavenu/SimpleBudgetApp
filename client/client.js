if(Meteor.isClient){
		if(typeof(Session.get("budget_id")) === "undefined"){
			// Set Session to None 
			console.warn("Session was undefined!")
			Session.set("budget_id", "None");
			
		}
		// Else no problem session should unchanged!


}