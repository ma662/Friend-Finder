var path = require("path");

var people = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(people);
    });

    app.post("/api/friends", function(req, res) {
        // handle incoming survey results
        // handle compatability logic
        // res.json( { ok : true });
    });
}