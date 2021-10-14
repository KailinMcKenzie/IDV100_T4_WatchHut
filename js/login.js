 $(function() {
    console.log("Ready");

  $(".reg-container").hide();
  $(".create").click(function(){
      $(".main-container").slideUp();
      $(".button-1").hide()
      $(".reg-container").slideDown();
  });
  
 $(".log-btn").click(function(){

    if($(".required").val().length === 0){
        alert("please fill in required fields")
        $(".indicate").css("backgroundColor", "red" ); 
    }

 });

 });