
//Initialize Firebase

var config = {
  apiKey: "AIzaSyDqKB_wGOPkKm9XcseBlENVFIoAzloaANs",
  authDomain: "valentines-day-3cebd.firebaseapp.com",
  databaseURL: "https://valentines-day-3cebd.firebaseio.com",
  projectId: "valentines-day-3cebd",
  storageBucket: "valentines-day-3cebd.appspot.com",
  messagingSenderId: "891418483655"
};
firebase.initializeApp(config);


var cardsRef = firebase.database().ref('Cards/');

// Listen for form submit

document.getElementById('cardsForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault();
  var valentinesCard = document.getElementById('valentines-card').value;
  saveCard(valentinesCard)
  document.getElementById('valentines-card').value = ''
}

//Save Card

function saveCard(valentinesCard) {
  newCardsRef = cardsRef.push();

  newCardsRef.set({
    card: valentinesCard
  })
}

//Words Left

var textArea = document.getElementById('valentines-card')

var wordsLeft = document.getElementById('words-left')

wordsLeft.innerText = "You have " + textArea.attributes.maxlength.value + " letters left";

textArea.addEventListener('keyup', wordLeft)

function wordLeft() {
  var left  = textArea.attributes.maxlength.value - textArea.value.length
  wordsLeft.innerText = "You have " + left + " letters left";
}