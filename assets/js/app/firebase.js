class Firebase
{
    connection()
    {
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        };
        return firebase.initializeApp(config);
    }

    signin(login,password)
    {
        firebase.auth().signInWithEmailAndPassword(login, password)

            .then(function(user)
            {
                sessionStorage.setItem('logged','true');
                $('#advise-success')
                    .text('Successfully Logged')
                    .fadeIn();
                $('.signin-form-group').removeClass('has-error');

                setTimeout(function()
                {
                    $('#advise-success')
                        .fadeOut();
                },2000);

            })

            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;

                $('#advise-error')
                    .text(errorMessage)
                    .fadeIn();

                $('.signin-form-group').addClass('has-error');

                setTimeout(function()
                {
                    $('#advise-error').fadeOut();
                },2000);

            });
    }

    signout()
    {
        firebase.auth().signOut().then(function() {
            sessionStorage.setItem('logged','false');
            $('#advise-success')
                .text('Successfully Logged out')
                .fadeIn();

            setTimeout(function()
            {
                $('#advise-success').fadeOut();
            },2000)

        }, function(error) {
            console.log(error);
        });
    }

    checkUser()
    {
        firebase.auth().onAuthStateChanged(function(user) {
            console.log('is user logged?: '+sessionStorage.getItem('logged'));
            if(user)
            {
                $('#sign-in-button').hide();
                $('#sign-out-button').fadeIn();
            }
            else
            {
                $('#sign-out-button').hide();
                $('#sign-in-button').fadeIn();
            }
            $('#body').css('visibility','visible');

        });
    }

}