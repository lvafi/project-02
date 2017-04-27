
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "6f49b64835cc453b863bccd7ea3e593c"
});
$.ajax({
  url: url,
  method: 'GET',
  dataType:"json"
}).done(function(result) {
  $.each(data.results,
  function(index, value){
      article.length +='<li><img src="' + value.article+'">' + value.home+ '</li>'
  });
  console.log(result);
}).fail(function(err) {
  throw err;
});