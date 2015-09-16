// Router for our App

Router.configure({
	layoutTemplate : 'layout',
	notFoundTemplate: 'notFound'
});


// Router
Router.route("/", {
	
	name: "home",
	template : "main",


	onBeforeAction: function(){
		if(Session.equals('budget', "None")){
			this.render("askbudget");
		}else{
			console.log("Session : "+ Session.get("expense"))
			this.next();
			
		}
	}
});
