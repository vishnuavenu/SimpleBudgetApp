// All Function intended to be at Server 
if(Meteor.isServer){

	// Defining Methods 

Meteor.methods({

		// This function is Triggred on Intialize askbudget view
		// this will create a new Document on which detail of 
		// day will be recorded.
		"createNewBudget": function(newBudget){
			check(newBudget, Budget.simpleSchema());

			try{
				var id = Budget.insert(newBudget);
				return id;
			}catch(expection){
				return expection;
			}


		},

		// This method will update the current day document's 
		// expenditure list on insertion of each new expenses.
		"updateCurrentBudget": function(updates ){
			check(updates, Object);

			try{
				Budget.update({_id: updates._id}, {$set: updates});
			}catch(expection){
				return expection;
			}
		},

		// This method help the user to delete the days budget document
		// if they want start from all over again
		"deleteBudget": function(budget_id){
			check(budget_id, String);

			try{
				Budget.remove(pizzaId);
			}catch(expection){
				return expection;
			}
		},
		// This function check if the todays the budget is already 
		// set if yes then we then set the session and force the user to 
		// main view.
		"isBudgetSet": function(date){
			check(date, String);

			try{
					if(Budget.findOne({date:date}))
					{
						return true;
					}				

				}catch(expection){
				return false;
			}
		},

		"recordExpense": function(id, expense){
			check(id, String);
			check(expense, Object);

			try{
				Budget.update({_id: id},{$push:{ expenses: expense}});
				return true;
			}catch(expection){
				return false
			}
		},
		
		// Get the current Budget on  given date
		"getCurrentBudget": function(date){
			check(date, String);
			// only returning the Current Budget
			return Budget.findOne({date:date}, {date:0, expenses:0, 
				total_expenditure: 0,_id: 0 , budget: 1});

		},

		// Days expense details 
		"getExpenseDetail": function(date){
			check(date, String);

			// Only returning the Expenditure list
			return Budget.findOne({date: date}, {date:0, expenses:1, 
				total_expenditure: 0,_id: 0 , budget: 0})
		},

		// Test method 
		"check": function(data){
			console.log("Hey");
			return "Hello "+ data;
		}

	});

}