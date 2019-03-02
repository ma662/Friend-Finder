var path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        return res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/:test", function(req, res) {
        console.log(req.params.test);
        return res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}