Template.registerHelper("equals", function(a, b){
	return a === b;
});

// Helper Methods for this Template
Template.main.helpers({

	budget: function(){
		
        return Budget.findOne({_id: Session.get("budget_id")});
	},

	expense_list :function(){
			var result = Budget.findOne({ _id: Session.get("budget_id") }, { _id:0, expenses:1 });
			if(result === 'null'){
				console.log("Got Nothing !");
				return "Expenditure is yet to make";}

			if(result.expenses.length == 0){
				console.log("Expenses Empty");
				return "None";
			}
			console.log("result from the expense_list : ")
			console.log(result.expenses);
			return result.expenses;
		},

	budget2: function(){
		return "Nothing"
	}



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
		Meteor.call("recordExpense", Session.get("budget_id"), expense);
		
		event.target.name.value = "";
		event.target.spent.value = "";
	}
});


