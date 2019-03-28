var path = require("path");
var people = require("../data/friends");

module.exports = function(app) {

    app.get("/api/peep", function(req, res) {
      res.json(people);
    });

    app.post("/api/friends", function(req, res) {
      // handle incoming survey results
      console.log("going to console the request");
      console.log(req.body);
      // console.log(req.body.respArr);
      // console.log(req.body.name);
  
      var convArr = req.body.respArr;
      for (var i=0; i<req.body.respArr.length; i++) {
        if (convArr[i] === "Strongly Disagree" ) { convArr[i] = 1; }
        if (convArr[i] === "Disagree" ) { convArr[i] = 2; }
        if (convArr[i] === "No Opinion" ) { convArr[i] = 3; }
        if (convArr[i] === "Agree" ) { convArr[i] = 4; }
        if (convArr[i] === "Strongly Agree" ) { convArr[i] = 5; }
      }
  
      console.log("Converted array");
      console.log(convArr);
  
      let person = {
        "name": req.body.name,
        "photo": "https://via.placeholder.com/150",
        "scores": convArr
      };
      people.push(person);
      console.log("Updated people");

      // now find a match
      console.log("Now, finding match");

      var totalDifference = 200;
      var theFriend;
      // go-through people
      for (var i=0; i<people.length; i++) {
        var prospectName = people[i].name;
        var prospectScore = people[i].scores;

        if (prospectName !== person.name) {
          var diff = 0;

          // go-through scores
          for (var y=0; y<prospectScore.length; y++) {
            console.log( Math.abs(prospectScore[y] - person["scores"][y]) );

            diff = diff + Math.abs(prospectScore[y] - person["scores"][y]);
          }
          console.log("totalDifference with this person is: " + diff);

          if (diff<totalDifference) {
            totalDifference = diff;
            console.log("This ran");
            theFriend = prospectName;
          }
        }
        else {
          console.log("Not processing user against theirself");
        }
        console.log("end-person");
        console.log(theFriend);
        console.log(totalDifference);

      }

      // go through people
      for (var i=0; i<people.length; i++) {
        // send appropriate response
        if (people[i].name === theFriend) {
          return res.json(people[i]);
        }
      }
    });
}