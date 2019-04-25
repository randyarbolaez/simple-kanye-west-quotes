let quote = document.getElementById('quote');

function getKanyeWestQuote() {
  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(res => {
      quote.innerHTML = res.quote;
    });
}
