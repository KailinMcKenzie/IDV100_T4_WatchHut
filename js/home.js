$(function() {
    const urlMovies = "https://api.themoviedb.org/3/movie/popular?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US&page=1";
    const urlGenreId = "https://api.themoviedb.org/3/genre/movie/list?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US";


    $.getJSON(urlMovies,function(Movies){

        console.log(Movies.results);

        

        $('.content h1').html('Welcome to Watchut, ' +  sessionStorage.getItem('username'));

        


        for(var i= 0; i < Movies.results.length; i++){

            var adult = Movies.results[i].adult;

            if(adult === false){
                $(".Pg").css("backgroundColor", "Green");
                $(".Pg").text("PG");
            } else {
                $(".Pg").css("backgroundColor", "Red");
                $(".Pg").text("Adult");
            }

            var MovieBlock = "<div class='col-lg-2 col-md-4 col-sm-6 block'>\
            <div class='content'>\
              <div class='movieImage'><img src='https://image.tmdb.org/t/p/original"+ Movies.results[i].poster_path +"'style='height: 100%; width: 100%; object-fit: cover'><div class='Save'></div>\
              <div class='info'>\
                <h3 class='Movie_title'>"+ Movies.results[i].original_title +"</h3>\
                <ul>\
                  <li class='Rating'>"+ Movies.results[i].vote_average +"</li>\
                  <li class='Genre'>Genre</li>\
                  <li class='Pg'>Adult</li>\
                </ul>\
              </div>\
            </div><!--titleCards-->\
          </div>"
            

            $('.row').append(MovieBlock);
    
        }

 
 
    });

    $.getJSON(urlGenreId,function(Genre){

        console.log(Genre.genres);

        


        

 
 
    });

     
});