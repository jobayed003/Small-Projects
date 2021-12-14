const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const autherText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

const loadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeSpinner = () => {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
};

let apiQuotes = [];
const newQuotes = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  return quote;
};

// Get quotes from api
const getQuote = async () => {
  loadingSpinner();
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    const quote = newQuotes();
    quoteText.innerText = quote.text;

    if (quote.author === null) {
      autherText.innerText = 'Unknown';
    } else {
      autherText.innerText = quote.author;
    }

    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    removeSpinner();
  } catch (err) {
    console.error(err.message);
  }
};
// On load, get quotes from
getQuote();

const tweetQuote = () => {
  const quote = quoteText.innerText;
  const author = autherText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
};

newQuoteBtn.addEventListener('click', getQuote);

twitterBtn.addEventListener('click', tweetQuote);

// const removeDuplicates = nums => {
//   let uniqueNums = [];
//   nums.forEach(c => {
//     if (!uniqueNums.includes(c)) {
//       uniqueNums.push(c);
//     }
//   });
//   console.log(uniqueNums);
// };

// removeDuplicates([
//   1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9,
// ]);
