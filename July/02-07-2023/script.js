const Typed = require("typed.js");
var Typer = document.querySelector("h1");
var Quote = document.querySelector("h2");   
var QuoteBTN = document.querySelector("button");    
var QuoteAuthor = document.querySelector("h3");
var API_KEY = "PeqLKZU2ZBHRdnuJT/jOwA==5ZSOTy4psVSUGjKr";
var url = "https://api.api-ninjas.com/v1/quotes"


QuoteBTN.addEventListener("click", () => {
    fetch(url, {
        method: "GET",
        headers: {
            "X-Api-Key": API_KEY,
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        QuoteText = data[0].quote;
        QuoteAuthorText = data[0].author;
        
        var TypedQuote = new Typed(Quote, {
            strings: [QuoteText],
            typeSpeed: 50,
            showCursor: true
        });
        var TypedAuthor = new Typed(QuoteAuthor, {
            strings:[QuoteAuthorText],
            typeSpeed: 50,
            showCursor:false
        });
    })
    .catch(error => {
        console.log(error);
    });
});