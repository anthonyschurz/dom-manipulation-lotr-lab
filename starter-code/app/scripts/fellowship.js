console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

function makeMiddleEarth() {
    var middleEarth = document.createElement('section');
    for(var i = 0, len = lands.length; i < len; i++){
      var land = document.createElement('article');
      land.innerHTML = '<h1>' + lands[i] + '</h1>';
      middleEarth.appendChild(land);
    }
    body.appendChild(middleEarth);
}

makeMiddleEarth();



var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];
function makeHobbits() {
  var hobbitList = document.createElement('ul');
  for(var i = 0, len = hobbits.length; i < len; i++){
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}

makeHobbits();


var frodo = body.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener('click', nazgulScreech);
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4



function makeBuddies() {
  var aside = document.createElement("aside");
  var unorderedList = document.createElement("ul");
  for (var i = 0; i < buddies.length, i++) {
    var buddies = document.createElement("li");
    buddies.textContent = buddies[i];
    unorderedList.appendChild(buddies);
  }
  aside.appendChild(unorderedList);
  rivendell.appendChild(aside);
}

makeBuddies();



// Part 5


var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  strider.textContent = 'Aragon';
}

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
