$(document).ready(function() {
  getQuote();
  $("#getQuote").on('click', function() {
   getQuote();
  });
  $("#tweet-it").on('click', function() {
   sendTweet();
  });
});

function getQuote (){
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?").done(function(json){
      $("#quote").html(json.quoteText);
      if (json.quoteAuthor) $("#author").html("--- " + json.quoteAuthor);
      else $("#author").html("--- Unknown");
    }).fail(function(json){
      $("#display-card").html("We've ran out of quotes :( <br> Try reloading the page.");
    });
}

function sendTweet (){
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + $('#quote').text() + '" ' + $("#author").text());
}