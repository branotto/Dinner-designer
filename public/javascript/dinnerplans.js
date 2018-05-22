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

function editRecipe()
{
    let $recipes = $('#recipePreferences');

    $recipes.on('click', '.editRecipe', ()=>
    {
        let $li = $(this).closest('li');

        $li.find('input.name').val( $li.find('label.name').html() );
        $li.find('input.frequency').val( $li.find('label.frequency').html() );
        $li.find('input.day').val( $li.find('label.day').html() );
        $li.addClass('edit');
       
    });

    $recipes.on('click', '.cancelEdit', ()=>
    {
        let $li = $(this).closest('li');
        $li.removeClass('edit');
       
    });
}

function deleteRecipe()
{
    let $recipes = $('#recipePreferences');

    $recipes.on('click', '#delete', ()=>
    {
        console.log("Delete Pressed!");
      
        let $li = $(this).parent();

        //remove when API is implemented
        $li.remove();

    /* Implement AJAX delete to API

    $.ajax({
        type : "DELETE",
        url : `/recipes/$(this).attr('data-recipe-id')`,
        succes : () => 
        {
           $li.remove(); 
        },
        error ; () =>
        {
            console.log("Error deleteing recipe.");
        };
    });

    */
        
    });
}

function addNewRecipe()
{
    let $name = $('#newRecipeName');
    let $frequency = $('#newRecipeFrequency');
    let $day = $('#newRecipeDay');

    $('#newRecipe').on('click', (event) =>
    {
        event.preventDefault();
        let recipe = 
        {
            name : $name.val(),
            frequency : $frequency.val(),
            day : $day.val()
        };

        //replace with AJAX when API is ready
        displayRecipe(recipe);

        /* use when API is ready
        $.ajax({
            type : 'POST',
            url : '/recipes',
            data : recipe,
            succes : (newRecipe) =>
                {
                    displayRecipe(newRecipe);
                },
            error : () =>
                {
                    console.log('Error saving recipe.');
                }
        })
        */
    })
}

function displayRecipe(recipe) {
    let newRecipe = `
    <li>
        <p>Name:
            <label class="noEdit name" for="name">${recipe.name} 
                <input id="name" type="text" class="edit name">
            </label>
        </p>
        
        <p>Frequency:
            <label class="noEdit frequency" for="frequency"> ${recipe.frequency}
                <input id="frequency" type="text" class="edit frequency">
            <label>
        </p>
        
        <p>Day Preference:
            <label class="noEdit day" for="day">${recipe.day}
                <input id="day" type="text" class="edit day">
            </label>
        </p>
        <button class="saveEdit edit">Save</button>
        <button class="cancelEdit edit">Cancel</button>  
        <button class="editRecipe noEdit">Edit</button> 
        <button data-id="${recipe.id}" id="delete">Delete</button>
    </li>`;

    $('#recipePreferences').append(newRecipe);
}

//display the recipe preferences returned from the 
//database
function displayRecipePreferences(data)
{
    for (index in data.recipePreferences)
    {
        displayRecipe(data.recipePreferences[index]);
    }

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

function handleRecipes()
{
    requestAndDisplayRecipePreferences();

    addNewRecipe();

    deleteRecipe();

    editRecipe();

}

//when the page load request meal history and 
//recipe preferences
function pageLoad()
{
    handleRecipes();
    
    //requestAndDisplayPriorMeals();

    
}

(pageLoad());