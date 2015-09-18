// All Function intended to be at Server 
if(Meteor.isServer){



	// Defining Methods 

	Meteor.methods({

		// This function is Triggred on Intialize askbudget view
		// this will create a new Document on which detail of 
		// day will be recorded.
		"createNewBudget": function(newBudget){
			check(newBudget, BUDGET_DB.simpleSchema());

			try{
				var id = BUDGET_DB.insert(newBudget);
				return id;
			}catch(expection){
				return expection;
			}
		},

		// This method will update the current day document's 
		// expenditure list on insertion of each new expenses.
		"updateCurrentBudget": function(updates){
			check(updates, Object);

			try{
				BUDGET_DB.update({_id: updates._id}, {$set: updates});
			}catch(expection){
				return expection;
			}
		},

		// This method help the user to delete the days budget document
		// if they want start from all over again
		"deleteBudget": function(budget_id){
			check(budget_id, String);

			try{
				BUDGET_DB.remove(pizzaId);
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
					if(BUDGET_DB.findOne(date))
					{
						return true;
					}				

				}catch(expection){
				return expection;
			}
			return false;
		},

		// Get the current Budget on  given date
		"getCurrentBudget": function(date){
			check(date, String);
			// only returning the Current Budget
			return BUDGET_DB.findOne({date:date}, {date:0, expenses:0, 
				total_expenditure: 0,_id: 0 , budget: 1});

		}

	});

}