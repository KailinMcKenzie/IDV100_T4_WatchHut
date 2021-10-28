$(function() {
    const urlMovies = "https://api.themoviedb.org/3/movie/popular?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US&page=1";
    const urlGenreId = "https://api.themoviedb.org/3/genre/movie/list?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US";

    $.getJSON(urlGenreId,function(Genre){

        console.log(Genre.genres);
    });

    //Fetching the movies in the watch later and adding according to id

    var listing = localStorage.getItem("movieBank").split(",");

    for(var i= 0; i < listing.length; i++){

      var urlMovie = 'https://api.themoviedb.org/3/movie/'+ listing[i] +'?api_key=fbdaccb39dfca477ec685d5da0f0e705&language=en-US';

      $.getJSON(urlMovie, function(block){

      

      var adult = block.adult;

      if(adult === false){
          $(".Pg").css("backgroundColor", "Green");
          $(".Pg").text("PG");
      } else {
          $(".Pg").css("backgroundColor", "Red");
          $(".Pg").text("Adult");
      }

      var MovieBlock = "<div class='col-lg-3 col-md-4 col-sm-4 block'>\
      <div class='one'>\
        <div class='image'><img src='https://image.tmdb.org/t/p/original"+ block.poster_path +"'style='height: 100%; width: 100%; object-fit: cover'><div class='knoppie'>Remove</div>\
        <div class='info'>\
          <h3 class='Movie_title'>"+ block.original_title +"</h3>\
          <ul>\
            <li class='Rating'>"+ block.vote_average +"</li>\
            <li class='Genre'>Genre</li>\
            <li class='Pg'>Adult</li>\
          </ul>\
        </div>\
      </div><!-- one -->\
    </div>"
      

    $('.watchLater-row').append(MovieBlock);
  });

  $(document).on('click', '.knoppie', function() {
    console.log("yess");
    $(this).parent().parent().hide();
  });

  };

     
});