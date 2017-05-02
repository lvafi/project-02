$(function(){
  var $articlelist = $('.article-list')
  var $container = $('.container')
  var $nytimage = $('.nyt-image')
  var $preloader = $('.preloader')
  var $navwrapper = $('.nav-wrapper')
  var errortext = 'Sorry, there was an error, please try again'
  
    $preloader.hide();
   
   $('.sections').on('change', function () {
     var userInput = $(this).find("option:selected").val();
     if(userInput === "" ){
       return
     }
     $container.addClass('header-shift-with-articles')
     $nytimage.addClass('shrink-image')
     $preloader.show();
     $navwrapper.addClass('nav-article-load')
     
     
     
     var articleList = $('.article-list');
     var url = 'https://api.nytimes.com/svc/topstories/v2/' + userInput + '.json';
          url += '?' + $.param({
          'api-key': "6f49b64835cc453b863bccd7ea3e593c"
     }); //end of param
     console.log(url); 
    



   articleList.empty();
   $.ajax({
      url: url,
      method: 'GET',
    })//end of ajax method
    .always(function () {
        $preloader.hide();
      })
   .done(function (data) {
        console.log(data);
        var $data = data.results.filter(function (item) {
          return item.multimedia.length;
        console.log($data);
        }).splice(0, 12);// end of function call back function
   $.each($data, function (item, value) {
          var fullArticle = '';
          fullArticle += '<li class = "article-item">' + '<a href=';
          fullArticle += value.url + '>';
          fullArticle += '<div class ="text-container">' + '<p class = "content-text">';
          fullArticle += value.abstract;
          fullArticle += '</p>';
          fullArticle += '<img class = "content-container"';
          fullArticle += 'src="' + value.multimedia[4].url + '" />';
          fullArticle += '</a>' + '</li>';
          articleList.append(fullArticle);
        });//end of each

         })//end of done function
      .fail(function () {
        articleList.append(errortext);

      });//beginning of fail function 
  
     




   });



}); //end of first function

// right after ajax
//data.result.filter(function(item){
// return item.multimedia.length ? item : false;
//})