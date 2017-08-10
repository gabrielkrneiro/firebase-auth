$(document).ready(function()
{
    let firebase = new Firebase();
    firebase.connection();
    firebase.checkUser();

    $('#sign-in-button').on('click', function()
    {
        let login = $('#login').val();
        let password = $('#password').val();

        firebase.signin(login, password);

    });

    $('#sign-out-button').on('click', function()
    {
        firebase.signout();
    });
});
