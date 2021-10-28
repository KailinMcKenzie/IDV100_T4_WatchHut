//clear session storage and local storage
$(function() {
    
    var test = sessionStorage.getItem('username');
    console.log(test);

    $(".deleteSession").click(function(){
        sessionStorage.clear();
        localStorage.clear();
    })

    if(test === null){

        window.location.href = "../pages/login.html";

    }

});