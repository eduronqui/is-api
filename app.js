var express = require('express');
var app = express();

var setup = require('./bin/setup.js');
setup(app);

app.listen(3000, function(){
    console.log('Server up and listening on port 3000');
});
