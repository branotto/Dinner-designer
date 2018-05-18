const MOCK_RECIPE_DATA = {
    "recipePreferences" : [
        {
            "id" : "11111",
            "name" : "Pizza",
            "frequency" : "weekly",
            "day" : "Friday"
        },
        {
            "id" : "22222",
            "name" : "Tacos",
            "frequency" : "monthly",
            "day" : "Tuesday"
        },
        {
            "id" : "33333",
            "name" : "Hamburgers",
            "frequency" : "weekly",
            "day" : "Any"
        },
        {
            "id" : "44444",
            "name" : "Meatloaf",
            "frequency" : "bi-weekly",
            "day" : "Any"
        },
        {
            "id" : "55555",
            "name" : "Pasta",
            "frequency" : "monthly",
            "day" : "Thursday"
        },
        {
            "id" : "66666",
            "name" : "Fish",
            "frequency" : "bi-weekly",
            "day" : "Wednesday"
        },
        {
            "id" : "77777",
            "name" : "BBQ Chicken",
            "frequency" : "bi-weekly",
            "day" : "Wednesday"
        },
        {
            "id" : "88888",
            "name" : "Steak",
            "frequency" : "weekly",
            "day" : "Any"
        },
        {
            "id" : "99999",
            "name" : "Pot Roast",
            "frequency" : "monthly",
            "day" : "Friday"
        }]
    };

//display the recipe preferences returned from the 
//database
function displayRecipePreferences(data)
{
    let preferences = `<div>`;

    for (index in data.recipePreferences)
    {
        preferences += `
            <div>
                <h2>${data.recipePreferences[index].name}</h2>
                <label class="hidden" for="name" placeholder="${data.recipePreferences[index].name}> <input id="name" type="text" class="hidden">
                <p>Recipe Frequency: ${data.recipePreferences[index].frequency}</p>
                <label class="hidden" for="frequency" placeholder="${data.recipePreferences[index].frequency}"> <input id="frequency" type="text" class="hidden">
                <p>Day Preference: ${data.recipePreferences[index].day}</p>
                <label class="hidden" for="day" placeholder="${data.recipePreferences[index].day}"> <input id="day" type="text" class="hidden">
                <button data-recipe-id="${data.recipePreferences[index].id}" class="hidden">Save</button> <button>Edit</button> <button>Delete</button>
            </div>`;
    }

    preferences += `</div>`;

    $('#recipePreferences').append(preferences);

    //handle recipe button clicks()
}

//request recipe preferences from database
function getRecipePreferences(callback)
{
    //replace with getJson when database is implemented.
    callback(MOCK_RECIPE_DATA);
}

//handle the request and display of recipes
function requestAndDisplayRecipePreferences()
{
    
    getRecipePreferences(displayRecipePreferences);
}   

//when the page load request meal history and 
//recipe preferences
function pageLoad()
{
    
    requestAndDisplayRecipePreferences();
    //requestAndDisplayPriorMeals();
}

(pageLoad());