






module.exports = function (dirName, fileExt, func) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dirName, function (err, list) {
        if (err) {
            func(err);
        } else {
            var files = [];
            list.forEach(function (file) {
                if (path.extname(file) === '.' + fileExt) {
                    files.push(file);
                }
            });

            func(null, files);
        }
    });

};