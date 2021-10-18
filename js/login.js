 $(function() {
    console.log("Ready");

  $(".reg-container").hide();
  $(".create").click(function(){
      $(".main-container").slideUp();
      $(".button-1").hide()
      $(".reg-container").slideDown();
  });
// error function
 $(".log-btn").click(function(){

    if($(".required").val().length === 0){
        alert("please fill in required fields")
        $(".indicate").css("backgroundColor", "red" ); 
    }
 });
// error function

//Authentication function for login page
 $(".log-btn").on("click", function(){

    var username = $(".username").val();
    var password = $(".password").val();

    const url = "https://owmakerspace.co.za/users/data.json";

    $.getJSON(url, function(result){
        console.log(result.users);

        for(i = 0; i < result.users.length; i++){

            if(result.users[i].username === username){

                if(result.users[i].password === password){

                    if(result.users[i].account === "active"){
                        window.location.href = "../index.html";
                        sessionStorage.setItem("username", username);
                    }else {
                        // alert("Account not active, please contact support")
                        $(".indicate").css("backgroundColor", "red" );                     }
                }else {
                    // alert("please fill in required fields")
                    $(".indicate").css("backgroundColor", "red" ); 

                }

            }else {
                // alert("please fill in required fields")
                $(".indicate").css("backgroundColor", "red" ); 
            }
        }

    });



 });

 // Sign in function of redirecting
 $('.sign').click(function(){
    // alert("click")
    var firstName= $('#name1').val();
    var surname = $('#surname1').val();
    var username = $('#newUser1').val();

    sessionStorage.setItem('firstname', firstName);
    console.log(firstName);

    sessionStorage.setItem('surname', surname);
    console.log(surname);

    sessionStorage.setItem('username', username);

    



 });



});
