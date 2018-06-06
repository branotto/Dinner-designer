const mongoose = require('mongoose');

//Dinner plan schema

const dinnerPlansSchema = mongoose.Schema(
    {
        userId : {type: String, required : true},
        priorMeals : [
            {
                id : String,
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
dinnerPlansSchema.methods.serialize = function()
{
    return {
        priorMeals : this.priorMeals
    };
}

const DinnerPlans = mongoose.model('dinnerPlans', dinnerPlansSchema);

module.exports = {DinnerPlans};