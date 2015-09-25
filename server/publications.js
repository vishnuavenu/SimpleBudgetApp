Meteor.publish("todays-detail", function(){
	return Budget.find();
});