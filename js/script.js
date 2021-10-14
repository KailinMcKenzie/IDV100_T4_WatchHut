$(function() {

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=c990b7c8aed9de2bea47d85625956c24&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1';

    $.getJSON(url, function(result) {
        console.log(result);

        for(i=0; i < result.length; i++ ){

            $(".crew_root").append(


                
            )

            



            

        }
        

    });

});

$(function() {
    console.log("working");
});
