//will handle requests - acts as a controller

const users = require('../data.json')//placeholder for a database - data.json contains users

module.exports = {//creates an object of methods available for export to other files
    getAllUsers: (req, res) => {
        res.status(200).send(users)//on status 200('ok' status) sends users
        const {email} = req.query //creates a listener for an e-mail query

        if(!email){ //if no email query is sent
            res.status(200).send(users) //send all users
        } else { //if an email query is sent
            const filteredUsers = users.filter((element) => element.email.includes(email)) //filters the array to only elements including the value of the query
        }
    },
    getSingleUser: (req, res) => {
        const{user_id} = req.params//pulls in user_id from api/users/:user_id -- from the request parameters

        const user = users.find((element) => element.id === +user_id) //sets user to equal the first user with the id that matches user_id

        if(user) { //sets a condition for the user declared above
            res.status(200).send(user) //if found sends the user info
        } else res.status(404).send(`There's no one here by that name.`) //if not found responds 404 status and sends the message 
    }
}
