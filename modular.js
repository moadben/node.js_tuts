var fs = require('fs')
var path = require("path");

exports.find_file = function (dir_name, f_ext, callback){
	fs.readdir(dir_name, function doneReading(err, list) {
			for(var i in list){
				//console.log(path.extname(list[i]));
				if(path.extname(list[i]) == ("."+f_ext)){
					console.log(list[i])
				}
			}
		callback()
		})
	}