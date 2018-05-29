const mongoose = require('mongoose');

//recipe schema
const recipePreferencesSchema = mongoose.Schema(
    {
        userId : {type: String, required : true},
        recipes : [{ id: String, name: String, frequeny: String, day: String}]
    }); 

//serialize instance method for generating a return object
recipePreferencesSchema.methods.serialize = function()
{
    return {
        recipes : this.recipes
    };
}

const RecipePreferences = mongoose.model('RecipePreferences', recipePreferencesSchema);

module.exports = {RecipePreferences};