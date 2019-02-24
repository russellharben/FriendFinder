$(".custom-control-label").on("click", function(){
    alert("Test success");
    if($(this).checked === true){
        console.log($(this).val());
    }
}); 