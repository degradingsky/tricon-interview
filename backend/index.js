const express = require('express')
const uniqid = require('uniqid');

const app = express()
express. urlencoded({ extended: true })

app.listen(3000, ()=>{console.log('started')})

const allusers = [
    {
        "id": 1,
        "name": "Alan Jones",
        "email": "alan.jones@gmail.com",
        "company": {
             "name": "Right Solutions",
             "email": "info@rightsolutions.com"
          }
        },
        {
            "id": 2,
            "name": "Alan",
            "email": "alan.walker@gmail.com",
            "company": {
                 "name": "Right Solutions",
                 "email": "info@rightsolutions.com"
              }
            }
]

app.get ('/users', (req, res) => {
    res.json(allusers)
})

app.get ('/users/:id',(req, res) => {
    const id = req.params.id
    const userWithID = allusers.find((user) => user.id == id)
    res.sendStatus(200).json(userWithID)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = uniqid()
    allusers.push(newUser)
    res.send('New user added successfully')
})

app.patch('/users' , (req, res) => {
    const id = req.params.id
    allusers.forEach((user)=> {
        if(user.id == id){
            user.name = req.body.name
            user.email = req.body.email
            user.company = req.body.company
        }
    })
    res.send("Updated successfully")
})

app.delete('/users', (req, res) => {
    const id = req.params.id
    // allusers.filter((user) => user.id !== id)
    const index = allusers.findIndex((user) => user.id =id)
    allusers.splice(index, 1)
    res.send('Deleted successfully')
})

