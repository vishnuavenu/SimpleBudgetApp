// Helper Methods for this Template
Template.main.helpers({

	budget: function(){
		return Meteor.call('getCurrentBudget', Session.get("budget"));
	},

	expense_list :function(){
		if(Session.get("expense").length === 0){
			return "Hmm! Have'nt Made any Expense";
		}
		// We return Entire Session
		return {"list": Session.get("expense")};
	},

	'expense_list2' : Session.get("expense")

});

// Add event handlers
Template.main.events({
	"submit .New_Expense": function(event){
		event.preventDefault();
		var expense  = {
			"name" : event.target.name.value,
			"amount": Number(event.target.spent.value),
			"time": new Date()
		}  

		console.log("Expense Recorded : " + expense.name +" , "+expense.amount+" . At "+expense.time);

		// Appending the Expense Session variable
		Session.set("expense", Session.get("expense").push(expense));
	}
});


