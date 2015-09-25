Template.main.onCreated(function(){
	//create new reactive variable
	this.expense_list= new ReactiveVar();
	this.expense_list.set(false);
});


// Helper Methods for this Template
Template.main.helpers({

	budget: function(){
		
        return Budget.findOne({date: Session.get("budget")});
	},

	expense_list :function(){
		
		Meteor.call("getExpenseDetail", Session.get("budget"), function(error, result){
			if(error) return "Error In Accessing List";
			console.log("Expense List"+ result);
			Template.instance().expense_list.set(result)
		});
			return Template.instance().expense_list.get();
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


	}
});


