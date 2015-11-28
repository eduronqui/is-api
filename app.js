var setup = require('./bin/setup.js');
var app = setup(app);

app.listen(3000, function(){
    console.log('Server up and listening on port 3000');
});
