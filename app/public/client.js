function newFriend(name, photo, scoreArr) {
    this.name = name;
    this.photo = photo;
    this.scoreArr = scoreArr;
}

$("#formSubmit").on("click", function (e) {
    e.preventDefault();

    let inputs = $("input");
    let scoreArr = [];

    // get values from survey
    var name = $("#name").val().trim();
    var photo = $("#photo").val().trim();

    // creating new newFriend object
    var currentFriend = new newFriend(name, photo, scoreArr);

    // only taking survey values of questions that have values
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked === true) {
            scoreArr.push(inputs[i].value);
        }
    }

    // passing the array of scores to the friendScore function
    // compareScores(scoreArr);

    // making a post request to the /api/friends path in the apiRoutes.js file
    $.ajax({
        method: "POST",
        url: "/api/friends",
        data: currentFriend,
        success: "success"
    })
        .done(function (data) {
            let newFriendsArr = data;
            let currentScores = [];

            // for new survey takers
            var userScores = data[data.length - 1].scoreArr;
            var userTotal = 0;
            for (i = 0; i < userScores.length; i++) {
                userTotal += parseInt(userScores[i]);
            }

            // loop through all friends array
            for (i = 0; i < newFriendsArr.length - 1; i++) {
                let totals = 0;
                var eachScoreArr = newFriendsArr[i].scores;
                // loop through individual score arrays
                for (j = 0; j < eachScoreArr.length; j++) {
                    totals += eachScoreArr[j];
                }
                currentScores.push(totals);
            }
            compareScores(userTotal, currentScores, data);
        });
});



function compareScores(singleResult, dbResult, data) {
    let scoreCalcsArr = [];
    let singleRes = singleResult;
    console.log("User total = ", singleRes);
    let currScores = dbResult;
    console.log("Friend db Scores = ", currScores);

    for (i = 0; i < currScores.length; i++) {
        let scoreCalcs = currScores[i] - singleRes;
        scoreCalcsArr.push(scoreCalcs);
    }

    let scoresPositive = [];
    for (i = 0; i < scoreCalcsArr.length; i++) {
        if (scoreCalcsArr[i] < 0) {
            scoresPositive.push(scoreCalcsArr[i] * -1);
        } else {
            scoresPositive.push(scoreCalcsArr[i]);
        }
    }

    let bestMatchScore = Math.min.apply(Math, scoresPositive);
    let bestMatchIndex = scoresPositive.indexOf(bestMatchScore);

    console.log("Best Match", data[bestMatchIndex].name);

    let matchName = data[bestMatchIndex].name;
    let matchPicURL = data[bestMatchIndex].photo;
    console.log(matchPicURL);

    resultsModal(matchName, matchPicURL);

};

function resultsModal(name, photoURL) {
    $('#exampleModalCenter').modal('show');
    $("#matchName").text(name);
    $("#matchPic").attr("src", photoURL);
    $("body").on("click", function(){
        location.href = "home.html";
    });
};

