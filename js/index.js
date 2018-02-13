
// INITIALIZE FIREBASE 
var config = {
  apiKey: "AIzaSyDqKB_wGOPkKm9XcseBlENVFIoAzloaANs",
  authDomain: "valentines-day-3cebd.firebaseapp.com",
  databaseURL: "https://valentines-day-3cebd.firebaseio.com",
  projectId: "valentines-day-3cebd",
  storageBucket: "valentines-day-3cebd.appspot.com",
  messagingSenderId: "891418483655"
};
firebase.initializeApp(config);


$(document).ready(function(){

  // Reference to firebase database
  var cardsRef = firebase.database().ref('Cards/');
  
  var carousel = $('.owl-carousel')
  
  // Dynamically adding data from database to Owl Carousel

  cardsRef.on('child_added', function(snapshot) {
    $(carousel).owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="owl-item">' + snapshot.val().card  + '</div>')]).trigger('refresh.owl.carousel');
  })

  // Initialize Carousel
  $(carousel).owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplaySpeed:1000,
    autoplay:true,
    autoWidth:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
    }
  })

})
