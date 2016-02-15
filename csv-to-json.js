var fs = require('fs');

var inputFile = process.argv[2];
var outputFile = process.argv[3];

fs.readFile(inputFile, 'utf8', function (err, data) {
	var outArr = []
	data = data.split('\n').map(cur => cur.split(','));
	var keys = data.shift()
	var keyLength = keys.length
	
	// console.log(JSON.stringify(data, ['name', 'age']))
	
	var output = JSON.stringify(data.map( function (cur) {
		var out = {};
		for (var i = 0; i < keyLength; i++) {
			out[keys[i]] = cur[i]
		}
		return out;
	} ), null, 4)
	fs.writeFile(outputFile, output, function(err) {if (err) throw err; console.log('saved')})
})