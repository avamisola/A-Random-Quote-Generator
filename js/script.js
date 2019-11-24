/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let last_quote;

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'We\'re not tools of the government or anyone else!',
    source: 'Gray Fox',
    citation: 'Metal Gear Solid',
    year: '1998'
  },
  {
    quote: 'I\'ll decide for myself what to believe and what to pass on!',
    source: 'Raiden',
    citation: 'Metal Gear Solid 2: Sons of Liberty',
    year: '2001'
  },
  {
    quote: 'You\'re pretty good.',
    source: 'Snake',
    //citation: 'Metal Gear Solid 3: Snake Eater',
    //year: '2004'
  },
  {
    quote: 'War has changed.',
    source: 'Old Snake',
    citation: 'Metal Gear Solid 4: Guns of the Patriots',
    year: '2008'
  },
  {
    quote: 'I won\'t scatter your sorrow to the heartless sea.',
    source: 'Venom Snake',
    citation: 'Metal Gear Solid V: The Phantom Pain',
    year: '2015'
  },
]

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quote = getRandomQuote();
  if (quote === last_quote) {
    printQuote();
    return;
  }
  last_quote = quote
  let html =
    '<p class="quote">' + quote.quote + '</p> \n' +
    '<p class="source">' + quote.source;
  if (quote.citation) {
    html += '\n <span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '\n <span class="year">' + quote.year + '</span>';
  }
  if (quote.citation || quote.year) {
    html += '\n</p>';
  } else {
    html += '</p>';
  }
  document.getElementById("quote-box").innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);