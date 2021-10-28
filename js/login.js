 $(function() {
    console.log("Ready");

  $(".reg-container").hide();
  $(".create").click(function(){
      $(".main-container").slideUp();
      $(".button-1").hide()
      $(".reg-container").slideDown();
  });

//Authentication function for login page
 $(".log-btnn").on("click", function(){

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
                        $(".indicate").css("backgroundColor", "red" );
                        alert("Account not active suspended (U SUS)");}
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

 //register functionallity
 $('.sign1').click(function(){
    // alert("click")

    var pass1 = $("#pass1").val();
    var pass2 = $("#confirm").val();
    var firstName = $('#name1').val();
    var surname = $('#surname1').val();
    var username = $('#newUser1').val();
    var mail= $('#mail1').val();

    if(pass1 === pass2  && pass1 != "" && pass2 != ""){

    sessionStorage.setItem('firstname', firstName);
    sessionStorage.setItem('surname', surname);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('mail', mail);


    window.location.href = "../index.html";

    }else{
        alert("Your passwords do not match")
    }

});

$('.sign').click(function(){

    var smallPass1 = $("#pass2").val();
    var smallPass2 = $("#confirm2").val();
    var firstName1 = $('#name2').val();
    var surname1 = $('#surname2').val();
    var username1 = $('#newUser2').val();
    var mail1= $('#mail2').val();


    if(smallPass1 === smallPass2 && smallPass1 != "" && smallPass2 != ""){
       
    sessionStorage.setItem('firstname', firstName1);
    sessionStorage.setItem('surname', surname1);
    sessionStorage.setItem('username', username1);
    sessionStorage.setItem('mail', mail1);
    
     window.location.href = "../index.html";

    }else{

        alert("Your passwords do not match")

    }

 });



});


