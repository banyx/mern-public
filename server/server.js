const express = require('express');
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json(message:"Hi")
});

app.listen(port, () => console.log(`Listening on port: ${port}`))