var friendData = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.send(friendData);
    });

    app.post('/api/friends', function (req, res) {
        let newFriend = req.body;
        friendData.push(newFriend);
        res.send(friendData);
    });
};

