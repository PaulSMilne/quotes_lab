

// //1. Create the parent container

// var quoteArticle = document.createElement('article');
// quoteArticle.classList.add('quote');

// //2. Create first child

// var blockquote = document.createElement('blockquote');
// blockquote.innerText = "Same as everyone else";

// //3. Create second child (cite element)

// var cite = document.createElement('cite');
// cite.innerText = "\nCohort 7";

// //4. Append the cite to the blockquote - starting inside out

// blockquote.appendChild(cite);

// //5. Append the blockquote to the article

// quoteArticle.appendChild(blockquote);

// //6. Add everything to the quotes list

// var quotes = document.querySelector('#quotes');
// quotes.appendChild(quoteArticle);



function cite(person) {
     var cite = document.createElement('cite');
     cite.innerText = " " + person;
     return cite;
};

function blockquote(quote){
     var blockquote = document.createElement('blockquote');
     blockquote.innerText = quote;
     return blockquote;
};

function quoteArticle(person, quote){
     var citeData = cite(person);
     var blockQuoteData = blockquote(quote);
     var quoteArticleElement = document.createElement('article');

     blockQuoteData.appendChild(citeData);
     quoteArticleElement.appendChild(blockQuoteData);

     return quoteArticleElement;
};

function addQuoteArticle(person, quote) {
     var quoteArticleData = quoteArticle(person, quote);
     var quotes = document.querySelector('#quotes');
     quotes.appendChild(quoteArticleData);
};

// addQuoteArticle("Kyle", "Really enjoyed the homework.");
// addQuoteArticle("Claudia", "Let's get cracking!")
// addQuoteArticle("Craig.", "A bear doesn't need to know about journals. It just needs to know how to bear.")


var quotesArray = [["Kyle", "Really enjoyed the homework."], ["Claudia", "Let's crack on!"], ["Craig.", "A bear doesn't need to know about journals. It just needs to know how to bear."], ["Adrian", "Same as everyone else."], ["Cyrus", "It's prancing, not dancing."]];

function addQuotes(arrayOfQuotes){
     for (var i = 0; i < arrayOfQuotes.length; i++) {
          addQuoteArticle(arrayOfQuotes[i][0], arrayOfQuotes[i][1])
     }
};
window.onload = function(){
addQuotes(quotesArray);




//previously on app.js ...
     // var element = document.getElementById('tagline');
     // console.log(element);

     // var quotes = document.getElementsByClassName('quote');

     // console.log(quotes[0]);
     // quotes[0].innerHTML = "Another Quote"

     // var pTags = document.getElementsByTagName('p');

     // var citeTags = document.getElementsByTagName('cite');

     // var qotd = document.getElementById('quote-of-the-day');

     // console.log(citeTags);
     // console.log(qotd);

     // var allQuotes = document.querySelector('.quote');

     // var signUp = document.querySelector('#sign-up');

     // var children = signUp.children;

     // console.log(children);

     // for (var i = 0; i < children.length; i++) {
     //      console.log(children[i]);
     // }
     // quotes[1].className = 'red-quote';

     // element.style.backgroundColor = "yellow";

     // var articles = document.getElementsByTagName('article');

     // var articles2 = document.querySelectorAll('.quote');

     // for (var i = 0; i < articles2.length; i++) {
     //      articles2[i].style.backgroundColor = 'DodgerBlue';
     // }

     // qotd.style.visibility = "hidden";
}