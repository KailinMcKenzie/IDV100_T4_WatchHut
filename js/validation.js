$(function() {
    
    var test = sessionStorage.getItem('username');
    console.log(test);

    $(".deleteSession").click(function(){
        sessionStorage.clear();
    })

    if(test === null){

        window.location.href = "../pages/login.html";

    }

});