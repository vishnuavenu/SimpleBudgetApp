// This file is responsible for all the Communicaton with MongoDB

// Creating a Global variable for DB

BUDGET_DB =  new Meteor.Collection("budget_db");


// Main Schema
BudgetScheme = new SimpleSchema({

	"date":{
		type: String,
		label: "Added Everyday"
	},

	"budget":{
		type: Number,
		label: "Days Budget"
	},
	'expenses.$.time':{
		type:String,
		label:"Time"
	},
	'expenses.$.name':{
		type:String,
		label: "Activity/Item"
	},
	'expenses.$.amount':{
		type: String,
		label: "Amount"
	},

	"total_expenditure":{
		type: Number,
		label: "Total Expenditure of the day"
	}
});


BUDGET_DB.attachSchema(BudgetScheme);