const express = require('express')
const app = express()
app.get('*', function routeHandler(req, res) {
	res.status(501).sendFile(__dirname + '/errors/updating/index.html')
	// res.status(501).send('Please wait while the sever reverts any changes...');
});
app.listen(443)
// const Path = require("path");
// const FS   = require("fs");
// let Files  = [];

// function ThroughDirectory(Directory) {
//     FS.readdirSync(Directory).forEach(File => {
//         const Absolute = Path.join(Directory, File);
//         if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
//         else return Files.push(Absolute);
//     });
// }

// ThroughDirectory("./build/public");