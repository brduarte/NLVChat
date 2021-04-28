import express from "express";

const app = express()

app.listen(3333, () => console.log("Server is running on port http://localhost:3333"))

app.get('/', (request, response) => {
    response.json({
        description: 'Chat NLW #5',
    })
})
