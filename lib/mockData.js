Array.prototype.PushNVP = function(n, v) {
	this.push({name:n, value:v});
}

var dict = (function() { 
	var dict = [];
	dict.PushNVP("DclCore.SystemId", "XM");
	dict.PushNVP("TRIGGER_TIME", "2015-08-29 11:13:01");
	dict.PushNVP("TRIGGER_PRICE", "42.1");
	dict.PushNVP("TRIGGER_VALUE", "1.08");
	dict.PushNVP("TRIGGER_LIMIT", "1");
	dict.PushNVP("ORDER_ID", "20150829111301257D31E7-BB31-4FDF-B7B6-B99C06932653");
	dict.PushNVP("ITEM", "3");
	dict.PushNVP("WSODISSUE", "205778");
	dict.PushNVP("Symbol", "MSFT");
	dict.PushNVP("CompanyName", "Microsoft");

	return dict;

})();
var GetDisplayDate = function(date) {
	if (date == "" || date == undefined) {
		return "&nbsp;";
	} else {
		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	}
}

function mgQidRow(vehicleName, vehicleType, riskDate, perfDate) {
	this.VehicleName = vehicleName;
	this.isPortfolio = (vehicleType == "P") ? true : false;
	this.RiskDate = GetDisplayDate(riskDate);
	this.PerfDate = GetDisplayDate(perfDate);

}

var mgQidData = (function(){
	var results = [];
	results.push(new mgQidRow("Achmea Holdings", "P", new Date("2015-10-25"), new Date("2015-10-25")));
	results.push(new mgQidRow("Bobs No-Holds-Barred Investments", "M", "", new Date("2015-10-24")));
	results.push(new mgQidRow("Raptors, Inc.", "M", new Date("2015-10-24"), ""));
	results.push(new mgQidRow("Humpdy Dumptys Big Boner Jam", "M", new Date("2015-10-27"), new Date("2015-10-28")));
	results.push(new mgQidRow("Taco's Truck", "P", new Date("2015-10-28"), ""));
	results.push(new mgQidRow("Raptors, Inc.", "M", new Date("2015-10-28"), ""));
	results.push(new mgQidRow("Dildopolis", "P", "", new Date("2015-10-28")));

	return results;
})();

exports.PostData = dict;
exports.MGQidData = mgQidData;