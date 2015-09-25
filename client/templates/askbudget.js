


// handling events for this template

Template.askbudget.events({
	
	"submit .New_Budget": function(event){	
		event.preventDefault();
		var newBudget = Number(event.target.text.value);
		var today = new Date();
		var date = today.getDate()+'-'+today.getMonth()+1+"-"+today.getFullYear()


		var Budget = {
			"date" : date,
			"budget": newBudget,
			"expenses": [],
			"total_expenditure": 0
		}

		// Time to create the Fresh todays Budget

		var result = Meteor.call("createNewBudget", Budget, function(error, result){
		if (error) return "New  Budget could'nt created !"
		
			console.log(" Result from the Call : "+result);
			// Setting Session 
			Session.set("budget_id", result);
			console.log("Session Set to "+ Session.get(budget_id));

		});

		
		
		
		event.target.text.value="";



		Router.go("home");
		}
});