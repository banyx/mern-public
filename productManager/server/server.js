const express = require("express");
const cors =require('cors');
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
    
const AllMyProductRoutes = require("./routes/product.routes");
AllMyProductRoutes(app);
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
