var http = require("http")

var oof = http.get(process.argv[2], (response) => {
	response.setEncoding("utf8")
	response.on("data", function (data) { 
		console.log(data)

	 })
});