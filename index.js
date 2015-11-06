// Module imports
var express = require("express"),
	mockData = require("./lib/mockData"),
	handlebars = require("express-handlebars").create({
		defaultLayout:"main"
	}),
	// A library of useful JS functions
	util = require("./lib/util");

// Initialize and setup the app and stuff
var app = express();
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);



app.use(function(req, res, next) {
	// If there is no partials object, create it
	if (!res.locals.partials) res.locals.partials = {};
	res.locals.partials.postData = mockData.PostData;
	res.locals.AlertItemId = util.req("ITEM", "");
	next();
})
app.get('/', function(req, res){
	res.render("H");
})

app.listen(app.get("port"), function(){
  console.log( "Express started on http://localhost:" + 
    app.get("port") + '; press Ctrl-C to terminate.' );
});