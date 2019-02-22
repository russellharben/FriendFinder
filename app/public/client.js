

module.exports = function(app){

    app.get('/', function(req, res){
        console.log("test");
    })

    friendData.forEach(function (items) {
        console.log("client.js file : " + items.name);
        $("#text").text(items.name);
    });
}


