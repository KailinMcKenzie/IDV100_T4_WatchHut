$(function() {
    const urlMovies = "https://api.themoviedb.org/3/movie/popular?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US&page=1";
    const urlGenreId = "https://api.themoviedb.org/3/genre/movie/list?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US";


    $.getJSON(urlMovies,function(Movies){

        console.log(Movies.results);

        


        for(var i= 0; i < Movies.results.length; i++){

            

            var MovieBlock = "<div class='one one"+ Movies.results[i].genre_ids[0] +" one"+ Movies.results[i].genre_ids[1] +" col-lg-2 col-md-4 col-sm-4 block'>\
              <div class='image'><img src='https://image.tmdb.org/t/p/original"+ Movies.results[i].poster_path +"'style='height: 100%; width: 100%; object-fit: cover'><div class='knoppie'>Watch Later</div><div class='Save'></div>\
              <div class='info'>\
                <h3 class='Movie_title'>"+ Movies.results[i].original_title +"</h3>\
                <ul>\
                  <li class='Rating'>"+ Movies.results[i].vote_average +"</li>\
                  <li class='Genre'>Genre</li>\
                  <li class='Pg'>Adult</li>\
                </ul>\
            </div><!-- one -->\
          </div>"
            

            $('.movies-row').append(MovieBlock);

            var adult = Movies.results[i].adult;

            if(adult === false){
                $(".Pg").css("backgroundColor", "Green");
                $(".Pg").text("PG");
            } else {
                $(".Pg").css("backgroundColor", "Red");
                $(".Pg").text("Adult");
            }
    
        }

 
 
    });

    $.getJSON(urlGenreId,function(Genre){

      console.log(Genre);

      
     
 
    });


    //filter
    $(".all").click(function() {
      //first remove all active states
      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".all").addClass("filter-active");
      
      $(".one").fadeIn();
  });

  $(".horror").click(function() {

      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".horror").addClass("filter-active");

      $(".one").hide();
      $(".one27").fadeIn();

  });

  $(".animation").click(function() {
      //first remove all active states
      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".animation").addClass("filter-active");

      $(".one").hide();
      $(".one16").fadeIn();
  });

  $(".comedy").click(function() {
      //first remove all active states
      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".comedy").addClass("filter-active");

      $(".one").hide();
      $(".one35").fadeIn();
  });

  $(".romance").click(function() {
      //first remove all active states
      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".romance").addClass("filter-active");

      $(".one").hide();
      $(".one10749").fadeIn();
  });

  $(".fiction").click(function() {
      //first remove all active states
      $(".filter-button").removeClass("filter-active");
      //adding a active state
      $(".fiction").addClass("filter-active");

      $(".one").hide();
      $(".one878").fadeIn();
  });

    
     
});