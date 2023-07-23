const quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      writer: '-Oscar Wilde'
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      writer: '-Albert Einstein'
    },
    {
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      writer: '-Dr. Seuss'
    },
    {
      quote: "It is never too late to be what you might have been.",
      writer: '-George Eliot'
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      writer: '-John Lennon'
    },]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML= quotes[random].quote;
    
    writer.innerHTML= quotes[random].writer;

})


  
  