const mongoose = require('mongoose');

//recipe schema
const recipePreferencesSchema = mongoose.Schema(
    {
        userId : {type: String, required : true},
        recipePreferences : [
            { 
                id : String, 
                name : String, 
                frequeny : String, 
                day : String
            }]
    }); 

//serialize instance method for generating a return object
recipePreferencesSchema.methods.serialize = function()
{
    return {
        recipePreferences : this.recipePreferences
    };
}

const RecipePreferences = mongoose.model('recipes', recipePreferencesSchema);

module.exports = {RecipePreferences};