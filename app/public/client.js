

function newFriend(name, photo, scoreArr) {
    this.name = name;
    this.photo = photo;
    this.scoreArr = scoreArr;
}

$("form").on("submit", function(e){
    e.preventDefault();
    let inputs = $("input");
    let scoreArr = [];

    var name = $("#name").val().trim();
    var photo = $("#photo").val().trim();
    
    var currentFriend = new newFriend(name, photo, scoreArr);
    console.log("Current friend is : ", currentFriend);

    console.log(inputs);
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].checked === true){
            scoreArr.push(inputs[i].value);
        }
    }

    $.ajax({
        method: "POST",
        url: "/api/friends",
        data: currentFriend,
        success: "success"
      })
        .done(function(data) {
          console.log("This is the friends array ", data);
          data.push(currentFriend);
        });
});





