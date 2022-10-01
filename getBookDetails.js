#### Google Books APIs, Node.js Client


## Task: 
To get book details from Google books by sending api get request and using book ISBN as the parameter

## Proposed Solution: 
1.In the NodeJS execution environment, install the package node-isbn with the command > npm install node-isbn. 
2.Using the package, send ISBN value to the Google Books server
3.The server replies with a response in the form of a book record if the book is available, otherwise sends an error message.

## Alternative solutions explored: 
1. Making fetch request for "https://www.googleapis.com/books/v1/volumes?q={ISBN}&key={API-KEY}" did not go though in the firefox browser. 
   I tried hard to remove the error "TypeError: NetworkError when attempting to fetch resource." but in vain.
   The Chrome browser did not report this error, but it did not display any response as such.
2. Using callback functions worked when used in the script source
   <script src="https://www.googleapis.com/books/v1/volumes?q=9781447273318&callback=handleResponse"></script> 
   but hard coding ISBN like this is not good.
   


var isbn = require("node-isbn");
let isbNum = 9781447273;
 isbn.provider(["google"])
    .resolve(isbNum.toString())
    .then(function (book) {
      console.log("Search Successful for ISBN: "+isbNum);
      console.log("Book details:"+ " Title: "+ book.title+", Publisher: "+ book.publisher+", Authors:"+ book.authors);
    })
    .catch(function (err) {
      console.log(err);
    });

output:
test1: 
Search Successful for ISBN: 9781447273318
Book details: Title: Children of Time, Publisher: Pan Macmillan, Authors:Adrian Tchaikovsky

test2:
Search Successful for ISBN: 9781447273135
Book details: Title: The Gardener's Son, Publisher: undefined, Authors:Cormac McCarthy

test3:
Error: no books found with isbn: 9781447273
