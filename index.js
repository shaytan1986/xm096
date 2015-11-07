// Module imports
var express = require("express"),
	mockData = require("./lib/mockData.js"),
	handlebars = require("express-handlebars").create({
		defaultLayout:"main"
	}),
	// A library of useful JS functions
	util = require("./lib/util.js"),
	styles = require('./lib/styles.js');

// Initialize and setup the app and stuff
var app = express();
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

var oAlertData = {
	alertItemId:util.req("ITEM", ""),
	WSODISSUE:util.req("WSODISSUE", ""),
	Symbol:util.req("Symbol", ""),
	CompanyName:util.req("CompanyName", ""),
	styles:styles.XMStyles,
	dtNow:new Date().toDateString()
};

// This is the main heavy lifter. It does all the data fetching and assignment
app.use(function(req, res, next) {
	// MG
	res.locals.mgDat = mockData.MGQidData;
	res.locals.mgStyles = styles.MGStyles;

	// XM
	switch (oAlertData.alertItemId) {
		case "1":
			break;
		case "2":
			break;
		case "3":
			oAlertData.TRIGGER_PRICE = util.req("TRIGGER_PRICE", "");
			oAlertData.TRIGGER_LIMIT = util.req("TRIGGER_LIMIT", "");
			oAlertData.TRIGGER_VALUE = util.req("TRIGGER_VALUE", "");
			break;
	}
	// If there is no partials object, create it
	if (!res.locals.partials) res.locals.partials = {};
	// This has to be at the locals level, because the dynamic lookup must find the variable here
	res.locals.alertItemId = oAlertData.alertItemId;
	// Not strictly necessary, but this sort of keeps with the model of our existing alert templates.
	// Alternatively, I dont see why everything could'nt simply be appended to res.locals.
	// My book talks about res.locals.partials as the partials namespace, but I assume you could use whatever's clever.
	res.locals.oAlertData = oAlertData;

	next();
})

app.get('/', function(req, res){
	res.render("H");
})

app.get("/mg", function(req, res){
	res.render("mg", { layout:null});
})

app.listen(app.get("port"), function(){
  console.log( "Express started on http://localhost:" + 
    app.get("port") + '; press Ctrl-C to terminate.' );
});