const quotes = [
  {
    name: "Albert Einstein",
    quote: "I have no special talent. I am only passionately curious.",
  },
  {
    name: "Steve Jobs",
    quote: "Stay hungry, stay foolish",
  },
  {
    name: "Malcolm X",
    quote: "The future belongs to those who prepare for it today.",
  },
  {
    name: "Dalai Lama",
    quote: "Be kind whenever possible. It is always possible",
  },
  {
    name: "Buddha",
    quote: "The root of suffering is attachment",
  },
  {
    name: "S C Bose",
    quote: "It is blood alone that can pay the price of freedom.",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
