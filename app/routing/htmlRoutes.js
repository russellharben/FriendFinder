var path = require('path');
var friendData = require('../data/friends');


module.exports = function (app) {
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/:anything', function (req, res) {
        var anything = req.params.anything;
        if(anything === "" || anything != "survey"){
            res.sendFile(path.join(__dirname, '../public/home.html'));
        } else {
            res.sendFile(path.join(__dirname, '../public/survey.html'));
        }
    })
};