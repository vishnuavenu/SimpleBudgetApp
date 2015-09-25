


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

		console.log("Is the Budget is already set: " +Meteor.call("isBudgetSet",date), function(err, res){
			if(err) return false; 
			else return true;
		});
		if(Session.equals("budget", "None")){
			console.log("No BudgetSet safe to proceed with this session")
			Session.set("budget", date);
		}else{
			console.log("Seems users Already set the budget for the day")
			Session.set("budget", date);
		}

		
		var result = Meteor.call("createNewBudget", Budget, function(error, result){
			if (error) return "New  Budget could'nt created !"
		
			console.log(" Result fromt the Call : "+result);
			return result
		});

		
		console.log("New Budget Created   : "+ Session.get("budget"));
		event.target.text.value="";



		Router.go("home");
		}
});