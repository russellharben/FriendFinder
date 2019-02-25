function newFriend(name, photo, scoreArr) {
    this.name = name;
    this.photo = photo;
    this.scoreArr = scoreArr;
}

$("form").on("submit", function (e) {
    e.preventDefault();

    let inputs = $("input");
    let scoreArr = [];

    var name = $("#name").val().trim();
    var photo = $("#photo").val().trim();

    var currentFriend = new newFriend(name, photo, scoreArr);
    console.log("Current friend is : ", currentFriend);

    console.log(currentFriend.scoreArr);


    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked === true) {
            scoreArr.push(inputs[i].value);
            console.log("Yes");
        }
    }

    // passing the array of scores to the friendScore function
    compareScores(scoreArr);

    // making a post request to the /api/friends path in the apiRoutes.js file
    $.ajax({
        method: "POST",
        url: "/api/friends",
        data: currentFriend,
        success: "success"
    })
        .done(function (data) {
            console.log("This is the friends array ", data);

            let newFriendsArr = data;

            let currentScores = [];

            for (i = 0; i < newFriendsArr.length -1; i++) {
                let totals = 0;
                var eachScoreArr = newFriendsArr[i].scores;
                // console.log("each score array = ", eachScoreArr);
                for(j = 0; j < eachScoreArr.length; j++){
                    totals += eachScoreArr[j];
                    
                }
                currentScores.push(totals);
                console.log("Total Score for " + newFriendsArr[i].name + " = ", totals);
                console.log(currentScores, "Current scores");
            }

            // compareScores( ,currentScores);
        });
});



function compareScores(friendScores, totals) {

}
