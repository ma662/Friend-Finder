// init dependencies
var express = require("express");
// var path = require("path");

var app = express();
var PORT = process.envPORT || 9001;

// init express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});