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

    var firstName2= $('#name2').val();
    var surname2 = $('#surname2').val();
    var username2 = $('#newUser2').val();

    if(pass1 != pass2 ){
        alert("Your passwords do not match")

    }else{

    sessionStorage.setItem('firstname', firstName);
    console.log(firstName2);

    sessionStorage.setItem('surname', surname);
    console.log(surname2);

    sessionStorage.setItem('username', username);

    
    sessionStorage.setItem('firstname', firstName2);
    console.log(firstName2);

    sessionStorage.setItem('surname', surname2);
    console.log(surname2);

    sessionStorage.setItem('username', username2);
    console.log(username2)
    
    window.location.href = "../index.html";
 }

 });



});


// "username": "Pam Beesly",
// 		"password": "<<L5EVys4LFe[9}C", 
//         "account": "active"
//     },