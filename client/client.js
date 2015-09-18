if(Meteor.isClient){
		if(typeof(Session.get("budget")) === "undefined"){
			// Set Session to None 
			console.warn("Session was undefined!")
			Session.set("budget", "None");
			Session.set("expense", []);
		}
		// Else no problem session should unchanged!


}