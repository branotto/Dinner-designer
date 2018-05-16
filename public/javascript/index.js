//Listen for the user to login
function login()
{
    //listen for log in click
    $('#logInForm').on('submit', function(event)
    {
        event.preventDefault();
        console.log('Log In Form Submitted');
    
        let $userName = $('#username').val();
        console.log(`Username entered is ${$userName}`);

        let $passWord = $('#password').val();
        console.log(`Password entered is ${$passWord}`);

        //display dinnerplans.html
        window.location = 'http://localhost:8080/dinnerplans.html';
    
    });

    
}

(login());