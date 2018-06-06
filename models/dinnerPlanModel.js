const mongoose = require('mongoose');

//Dinner plan schema

const dinnerPlanSchema = mongoose.Schema(
    {
        userId : {type: String, required : true},
        priorMeals : [
            {
                Sunday : String,
                Monday : String,
                Tuesday : String,
                Wednesday : String,
                Thursday : String,
                Friday : String,
                Saturday : String
            }]

    });

//serialize instance method for generating return object
dinnerPlanSchema.methods.serialize = function()
{
    return {
        priorMeals : this.priorMeals
    };
}

const DinnerPlans = mongoose.model('dinnerPlans', dinnerPlanSchema);

module.exports = {DinnerPlans};