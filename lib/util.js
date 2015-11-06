var mockData = require("./mockData.js");

exports.req = function(keyName, defaultValue) {
	return (mockData.PostData.find(function(v) {
		return v.name == keyName;
	}) || {}).value || defaultValue;
}
exports.getItemPartial = function(alertItemId) {
	return alertItemId.toString();
}