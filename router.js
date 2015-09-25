// Router for our App

Router.configure({
	layoutTemplate : 'layout',
	notFoundTemplate: 'notFound'
});

// Landing page
Router.route("/ask", {
	name: "ask",
	template:"askbudget",
});


// To main page
Router.route("/", {
	
	name: "home",
	template : "main",

	waitOn : function(){
		return Meteor.subscribe("todays-detail");
	}
	,

	data: function(){
		return Budget.find();
	},

	onBeforeAction: function(){
		if(Session.equals('budget', "None")){
			Router.go("ask");
			//this.render("askbudget");
		}else{
			this.next();
			
		}
	}
});
