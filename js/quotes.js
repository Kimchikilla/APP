const quotes = [
    {
        quote: "- Insanity is doing the same thing over and over again and expecting different results. -",
        author: "Albert Einstein",
    },

    {
        quote: "- The important thing is not to stop questioning. Curiosity has its own reason for existing. -",
        author: "Albert Einstein",
    }
];

const quote =  document.querySelector("#quote span:first-child");
const author =  document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
