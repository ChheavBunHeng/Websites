const BTN = document.querySelector('button')

BTN.addEventListener('click', () => {
    var TweetText = document.querySelector('input').value   
   var Tweeturl = "https://twitter.com/intent/tweet?text="+encodeURIComponent(TweetText)+"&url="+encodeURIComponent(window.location.href);
   window.open(Tweeturl)
});