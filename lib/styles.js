xmStyles = (function(){
	var s = {};

	s.table="border:1px solid black;",
	s.td_header="font-weight:bold;",
	s.h1="background-color:light-grey;",
	s.div_container="padding:20px;",
	s.td_cell="font-weight:normal;padding:5px;background-color:light-grey;border:1px solid grey;text-align:center;"

	return s;
})();

mgStyles = (function(){
	var s = {};
	// Styles for the big gray header box
	s.header_table_grey = "border:2px solid #C9C9C9;border-spacing:0px;"
	s.header_td = "border:2px solid #C9C9C9;border-spacing:0px;width:650px;height:150px;background-color:#C9C9C9;"
	s.blue_hr_spacer = "height:3px;background-color:blue;margin:0px;padding:0px;";

	// Styles for data table
	s.data_td_colheader = "border-bottom:2px solid #434343;height:25px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:bold;";
	s.data_table = "border-spacing:0px;border:1px solid black;padding:10px;";
	return s;
})();

exports.XMStyles = xmStyles;
exports.MGStyles = mgStyles;