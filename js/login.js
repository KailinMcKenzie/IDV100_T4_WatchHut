 $(function() {
    console.log("Ready");

  $(".reg-container").hide();
  $(".create").click(function(){
      $(".main-container").slideUp();
      $(".button-1").hide()
      $(".reg-container").slideDown();
  });

 $(".log-btn").on("click", function(){

    var username = $(".username").val();
    var password = $(".password").val();

     url = "https://owmakerspace.co.za/users/data.json";

    $.getJSON(url, function(result){
        console.log(result.users);

        for(i = 0; i < result.users.length; i++){

            if(result.users[i].username === username){

                if(result.users[i].password === password){

                    if(result.users[i].account === "active"){
                        window.location.href = "../index.html";
                        sessionStorage.setItem("username", username);
                    }else {
                       // console.log("Account not active, please contact support.")
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
});