// Get the environment variables.
require('dotenv').config()

// Require needed node modules.
const express = require('express')

// Initialize my app
const app = express()

// White Page
app.get('/', function (req, res) {
    res.send(`
    <body style="margin: 0;">
        <div style="border: 1px solid black; height: 10vh; background-color: white;">
            <h2 style="text-align: center;">NAV BAR</h2>
        </div>
        <h1>White Page</h1>
    </body>
    `)
})

// Listen to a port number defined by a local environment variable.
app.listen(process.env.PORT)

