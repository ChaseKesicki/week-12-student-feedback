const express = require('express')  //Express is whats allowing our website to have multiple pages
const router = express.Router()  //figures out what code to run in response to a request
//typically based on the URL, and the method, GET, POST, ...

// responds to get request to home page /
router.get('/', function(req, res, next) { //request, response, next
    // name of Handlebars file - name of a template, optional object with data for the template
    res.render('index', {  //render loads what the page will be, as well as defines elements for that page
         title: 'Feedback Application',
        author: 'Chase',
        timePageLoadedAt: new Date()
        })
} )  //get request to the home page

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})


router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // const formData = req.query // for a GET request - read the URL query
    const formData = req.body //for a POST request
    console.log(formData)

    // todo - save to a database
    // automatically email someone when feedback was submitted

    res.render('thank_you', {
        name: formData.student_name,
        email: formData.student_email,
        comments: formData.student_comments,
        currentStudent: formData.conformation
      })
})


module.exports= router