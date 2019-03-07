// init dependencies
var express = require("express");

var app = express();
var PORT = process.envPORT || 9001;

// init express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/public'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Listening on http://localhost:" + PORT);
});