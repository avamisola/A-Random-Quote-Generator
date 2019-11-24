/*****************************************
Treehouse Full Stack JavaScript Techdegree
Project 1 - A Random Quote Generator
*****************************************/

// last_quote variable to hold quote previously printed by printQuote()
// intent is to ensure different quote shown when load-quote button clicked

let last_quote;

// array of quotes from the MGS series
// MGS3 quote optional properties commented out to test printQuote() conditions

const quotes = [
  {
    quote: 'We\'re not tools of the government or anyone else!',
    source: 'Gray Fox',
    citation: 'Metal Gear Solid',
    year: '1998',
    hashtag1: '#tools',
    hashtag2: '#government'
  },
  {
    quote: 'I\'ll decide for myself what to believe and what to pass on!',
    source: 'Raiden',
    citation: 'Metal Gear Solid 2: Sons of Liberty',
    year: '2001',
    hashtag1: '#decide',
    hashtag2: '#believe'
  },
  {
    quote: 'You\'re pretty good.',
    source: 'Snake',
    //citation: 'Metal Gear Solid 3: Snake Eater',
    //year: '2004',
    hashtag1: '#pretty',
    hashtag2: '#good'
  },
  {
    quote: 'War has changed.',
    source: 'Old Snake',
    citation: 'Metal Gear Solid 4: Guns of the Patriots',
    year: '2008',
    hashtag1: '#war',
    hashtag2: '#changed'
  },
  {
    quote: 'I won\'t scatter your sorrow to the heartless sea.',
    source: 'Venom Snake',
    citation: 'Metal Gear Solid V: The Phantom Pain',
    year: '2015',
    hashtag1: '#heartless',
    hashtag2: '#sea'
  }
];

// get a random quote object from quotes array

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// call getRandomQuote(), rerun PrintQuote() if last_quote repeated
// build html to print quote, formatted for readabilitiy in console
// output html to quote-box and change bg color with each quote

function printQuote() {
  const quote = getRandomQuote();
  if (quote === last_quote) {
    return printQuote();
  }
  last_quote = quote;
  let html =
    '<p class="quote">' + quote.quote + '</p> \n' +
    '<p class="source">' + quote.source;
  if (quote.citation) {
    html += '\n <span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    html += '\n <span class="year">' + quote.year + '</span>';
  }
  if (quote.hashtag1) {
    html += '\n <span class="hashtag">' + quote.hashtag1 + '</span>';
  }
  if (quote.hashtag2) {
    html += '\n <span class="hashtag">' + quote.hashtag2 + '</span>';
  }
  if (Object.keys(quote).length > 2) {
    html += '\n</p>';
  } else {
    html += '</p>';
  }
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.background = getRandomColor();
  return html;
}

// function to create a random RGB color

function getRandomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}

// calling printQuote() when load-quote button clicked

document.getElementById('load-quote').addEventListener('click', printQuote, false);

// auto call printQuote() upon opening and refreshing page
// auto call printQuote() every 20 seconds

printQuote();
setInterval(printQuote, 20000);
