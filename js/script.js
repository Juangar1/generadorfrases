


/*** 
 * `quotes` array 
***/
var quotes = [
  
  {quote:"Wapa te quiero muchísimo", source: "Juangar1"},
 
{quote:"Te amo mucho miamor", source: "Juangar1"},
{quote:"Eres perfecta", source: "Juangar1"},
{quote:"Me encanta tu cuerpo", source: "Juangar1"},
{quote:"Eres preciosa", source: "Juangar1"},
{quote:"Me encantan tus ojos", source: "Juangar1"},
{quote:"Me encanta verte sonreir", source: "Juangar1"},
{quote:"Me mejoras los días", source: "Juangar1"},
{quote:"Te mereces lo mejor", source: "Juangar1"},
{quote:"Eres lo más importante de mi vida", source: "Juangar1"},
{quote:"Espero estar contigo mucho más tiempo", source: "Juangar1"},
{quote:"Cada día me enamoras más", source: "Juangar1"},
{quote:"Me haces muy feliz", source: "Juangar1"},
{quote:"Eres muy buena persona", source: "Juangar1"},
{quote:"Me alegro mucho de haberte conocido :)", source: "Juangar1"},
{quote:"Me encanta darte besitos", source: "Juangar1"},
{quote:"Amo darte amor", source: "Juangar1"},
{quote:"Me has hecho crecer como persona", source: "Juangar1"},
{quote:"Siempre agradeceré el haberte conocido", source: "Juangar1"},
{quote:"Me encanta ver series o películas contigo", source: "Juangar1"},
{quote:"Me encanta hacerte chupetones >:)", source: "Juangar1"},
{quote:"Me encanta que te guste lo que hago", source: "Juangar1"},
{quote:"Estoy muy orgulloso de la gran persona que eres", source: "Juangar1"},
{quote:"Amo estar contigo <3", source: "Juangar1"},
{quote:"Me encanta como vistes", source: "Juangar1"},
{quote:"Eres super inteligente", source: "Juangar1"},
{quote:"No sabes lo mucho que me gustas", source: "Juangar1"},
{quote:"Me encanta todo lo que me haces", source: "Juangar1"},
{quote:"No dudes en que tú eres lo más importante", source: "Juangar1"},
{quote:"Mejoraré todo lo posible para que estés feliz", source: "Juangar1"},
{quote:"Me encantan tus tetas jeje", source: "Juangar1"},
{quote:"Me flipa tu culo", source: "Juangar1"},
{quote:"Amo cuando me hablas de algo que te ilusiona", source: "Juangar1"},
{quote:"Si el día se pone feo tú me lo haces bonito", source: "Juangar1"},
{quote:"Por ti hago lo que sea :)", source: "Juangar1"},
{quote:"Ojalá poder estar siempre contigo", source: "Juangar1"},
{quote:"El tiempo se me pasa volando cuando estoy a tu lado", source: "Juangar1"},
{quote:"Los mejores días son los que paso conitgo", source: "Juangar1"},
{quote:"Eres necesaria en mi vida", source: "Juangar1"},
{quote:"Eres y siempre serás más que suficiente para mi", source: "Juangar1"},
{quote:"Aunque no lo creas me haces muchas cosas preciosas", source: "Juangar1"},
{quote:"Me alegro de haberte escrito aquel día", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"},
{quote:"", source: "Juangar1"}

]
console.log(quotes);

function getRandomQuote() {
  // this gets a random number ranging from 0 to (quotes.length - 1)
  var random = Math.floor(Math.random() * quotes.length);
  // the random number is used as the index for quotes to pick the right, random one and it is returned to the
  // print function.
  return(quotes[random ]);
}


function printQuote(){
  //Pull the quote in question from getRandomQuote
  var currentQuote = getRandomQuote();
  // Set a blank string to hold the HTML
  var html = ''
  //Set up a variable to point to our quote box in the HTML
  var quoteDiv = document.getElementById('quote-box')

  //Open up a p tag and place the quote itself in it
  html += '<p class="quote">' + currentQuote.quote 
  
  //If tags are present...
  if ('tags' in currentQuote){
    // ...Add the tags to the quote
      html += '  ' + currentQuote.tags.join(', ')
  }
  // Close the first p tag
  html += '</p>'

  // mandatory p tag for source
  html += '<p class="source">' + currentQuote.source 
  // if a citation is defined...
  if ('citation' in currentQuote) {
    // ...add it to the p tag
    html += '<span class="citation">' + currentQuote.citation + '</span>'
  }
  // If a year is defined...
  if ('year' in currentQuote){
    // ...add it to the p tag
    html += '<span class="year">' + currentQuote.year + '</span>'
  }
  html += '</p>'

  // take this HTML item we have been appending and set the html of the quote box to it
  quoteDiv.innerHTML = html

  // run the set randomBackground() program to change the background color
  setRandomBackground()
  
}

function setRandomBackground(){
  // This function changes the background color to one of 6 pre-defined colors based on a random
  // number generator.  First get the random number
  var randomNumber = Math.floor(Math.random() * 6)
  
  // then check to see what the number equals and assign the corresponding color
  if (randomNumber == 0){
    document.body.style.background = 'black';
  }else if (randomNumber == 1){
    document.body.style.background = 'blue';
  }else if (randomNumber == 2){
    document.body.style.background = 'green';
  }else if (randomNumber == 3){
    document.body.style.background = 'red';
  }else if (randomNumber == 4){
    document.body.style.background = 'purple';
  }else if (randomNumber == 5){
    document.body.style.background = 'yellow';
  }
}

// Run the function when the button is pressed...
document.getElementById('load-quote').addEventListener("click", printQuote, false);
// ...or when 30 seconds pass
window.setInterval(printQuote, 30000);
