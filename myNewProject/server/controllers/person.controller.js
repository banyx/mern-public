const { response } = require("express")

module.exports.index = (req, res) => {
    response.json({mess: "Hello World"});
}