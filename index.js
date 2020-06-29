const express = require('express');
const path = require('path');

const app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//set public folder
app.use(express.static(path.join(__dirname, 'public')));
//home route
app.get('/', function(req, res){
   res.render('index', {
       title:'My Portfolio'
   });
});

//about_me route
app.get('/about_me', function(req, res){
    res.render('about_me', {
        title: 'About Me'
    });
});

//projects route
app.get('/projects', function(req, res){
    res.render('projects', {
        title: 'Projects'
    });
});

//services route
app.get('/services', function(req, res){
    res.render('services', {
        title: 'Services'
    });
});

//contact route
app.get('/contact_me', function(req, res){
    res.render('contact_me', {
        title: 'Contact Me'
    });
});

//start server
app.listen(3000, function(){
    console.log('Server started on port 3000');
});