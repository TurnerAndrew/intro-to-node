const express = require('express') //ensures that 
const app = express()
const usersCtrl = require('./userController')//allows use of functions written in userController.js by referencing usersCtrl

app.get('/test', (req, res) => { //gives the server the ability to process get requests
    res.status(200).send(`These are not the droids you're looking for.`) //first parameter is the endpoint
                                                            //second parameter is a callback function that defines the action on a request and response
    }) 

app.get('/reject', (req, res) => {
    res.status(404).send('404 - You must be lost!')
})

app.get('/api/users', usersCtrl.getAllUsers) //when a get request is received to the api/users endpoint it performs the function getAllUsers from userController
app.get('api/users/:user_id', usersCtrl.getSingleUser) //:user_id is a placeholder - anything entered after users/ becomes the value of user_id -- sends the userId to getSingleUser in userController

app.listen(3005, () => console.log('server listening on port 5000'))

