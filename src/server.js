const express = require('express')
const app = express()

const score = [
    {
        "name": "James",
        "Guesses": "1",
        "Word": "CHIPS"
    }
]

app.listen('3004', () => {
    console.log("server running on port 3002");
});

app.get('/score', (req, res) => {
    res.send(score)
})