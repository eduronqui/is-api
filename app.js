var express = require('express'),
    app = express();
    
var setup = require('./bin/setup.js');
setup(app);

var server = app.listen(3000, function(){
    console.log('Server up and listening on port 3000');
});
