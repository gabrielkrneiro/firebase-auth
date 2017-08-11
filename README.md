# Project: firebase-auth
# Author: Gabriel Marques Carneiro
    
# Purpose

This project has as purpose demonstrate in a easiest way how firebase authentication SDK works, 
    
# How to use

- **Configuring Firebase**
    - Access https://console.firebase.google.com/u/0/?hl=pt-br&pli=1 and choose a project (if you don't have one, first create it).
    - Click in **Authentication** tile in your left.
    - In **Methods** tile choose email/password and active it.
    - In **User** tile click in **Add User** and choose an email/password.
    
- **Configuring the firebase-auth**    
    - Accessing your firebase project console, click in **Adicionar o Firebase ao seu aplicativo da Web** 
    - The line `<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>` is default to every project, **don't copy it**.
    - The second script you have to copy and paste in firebase-auth/assets/js/app/firebase.js within connection(), as bellow:

![Connection()](https://github.com/GabrielCarneiroDeveloper/firebase-auth/blob/master/assets/img/token01.png "Connection()")

Open index.html in your browser (preferably in Google Chrome):

![Home](https://github.com/GabrielCarneiroDeveloper/firebase-auth/blob/master/assets/img/home-view.png "Home")
    
    
# The Project

As the project purposes is to be simple to show how Firebase Authentication SDK works, has been used a feel files. By default the SDK uses some kind of Design Patterns. The project presents Object Oriented Programming and by using Bootstrap, it is responsive. To improve the UX, has been used Jquery library.
    
# Project Folders Description
    - assets      = stores the libraries, css and js has been used in project.
    - js          = besides the project javascript files, stores the app folder, which has the firebase class
    - app         = stores the firebase class.
    - css         = stores css files.
    - img         = stores project images.
    
# Contacts

Any problem, bugs, doubts please contact me:
  - Name: Gabriel M. Carneiro
  - Email: carneiro.developer@gmail.com
  
# I hope you enjoy and thanks in advance !!!


