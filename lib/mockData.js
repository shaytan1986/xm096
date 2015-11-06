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
	dict.PushNVP("ITEM", "1");
	dict.PushNVP("WSODISSUE", "205778");

	return dict;

})();

exports.PostData = dict;
