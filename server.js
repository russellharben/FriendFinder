var express = require('express');
var path = require('path');
var app = express();


var PORT = 3005;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start our server
app.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});


// static path to CSS Style Sheets
app.use(express.static(path.join(__dirname, 'app/public')));
console.log(path.join(__dirname, 'app/public'));

