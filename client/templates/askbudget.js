
// Custom helper function for Template askbudget.js

Template.askbudget.created = function(){
		console.log("We Created the askbudget Template!");

	}

Template.askbudget.rendered = function(){
		console.log("Rendering Completed");
		this.$('p').html("Hey we are now ready!");
	}

Template.askbudget.destroyed = function(){
		console.log('Destroyed the Template !');
	}

// Custom helpers!
Template.askbudget.helpers({

	exampleHelper: function(){
		return new Spacebars.SafeString("This text came from a helper with some <strong> HTML </strong>.");
	}
});


// handling events for this template

Template.askbudget.events({
	
	"submit .New_Budget": function(event){	
		event.preventDefault();
		var newBudget = Number(event.target.text.value);

		if(Session.equals("budget", "None")){
			Session.set("budget", newBudget);
		}else{

			Session.set("budget", Number(Session.get("budget"))+newBudget);
		}

		
		console.log("Expense   : "+ Session.get("budget"));
		event.target.text.value="";

		Router.go("home");
		}
});