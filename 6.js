var currentDir = process.argv[2];
var extFilter = process.argv[3];

var mymodule = require('./mod6.js');

mymodule(currentDir, extFilter, function (err, data) {
    if (err) {
        console.log('something effed up');
    } else {
        data.forEach(function(el) {
            console.log(el);

        });
    }
});