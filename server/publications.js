Meteor.publish("todays-detail", function(){
	return BUDGET.find();
});