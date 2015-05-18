var restify = require('restify');
var fs = require('fs');

var controller = {};
var path_controller = process.cwd() + '/controllers';

fs.readdirSync(path_controller).forEach(function (file) {
	if (file.indexOf('.js') != -1) {
			controllers[file.split('.')[0]] = require(controllers_path + '/' + file)			
	}
});

var server = restify.createServer({
	name: 'pubsub_management', 
	version: '1.0.0'
});

server.use(restify.fullResponse());
server.use(restify.bodyParser());

