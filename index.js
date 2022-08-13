const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("get-quote");
async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}
fetchQuote();

button.addEventListener("click", () => fetchQuote());
