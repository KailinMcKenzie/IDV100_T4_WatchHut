$(function() {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=c990b7c8aed9de2bea47d85625956c24';

    $.getJSON(url, function(result) {
        console.log(result);

    });

});



