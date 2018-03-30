

function getArticleInfo(query) {
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=6bb17e4f0f634a88af1f550edbe677d2";
    $.ajax({
    
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var result = response.data;
        
        var articleDiv = $('<div class="article">');


        console.log(response);
    });
}

$("#news").on("submit", function(event){
    event.preventDefault();
    var query = $("#news-input").val().trim()
    getArticleInfo();
});
