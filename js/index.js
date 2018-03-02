
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
  var carousel = $('#wrap')
  var carousel1 = $('#wrap1')
  var carousel2 = $('#wrap2')
  
  // Dynamically adding data from database to Owl Carousel
  var i = 0
  cardsRef.on('child_added', function(snapshot) {
    if (i % 2 === 0){
      $(carousel).owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="owl-item"><span>' + snapshot.val().card  + '</span></div>')]).trigger('refresh.owl.carousel');
    } else if (i % 3 === 0) {
      $(carousel1).owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="owl-item"><span>' + snapshot.val().card  + '</span></div>')]).trigger('refresh.owl.carousel');
    } else {
      $(carousel2).owlCarousel().trigger('add.owl.carousel', [jQuery('<div class="owl-item"><span>' + snapshot.val().card  + '</span></div>')]).trigger('refresh.owl.carousel');
    }
    i++
  })

  // Initialize Carousel
  $(carousel).owlCarousel({
    loop: true,
    autoplay:true,
    autoplaySpeed:2000,
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
    },
  })
  $(carousel1).owlCarousel({
    loop: true,
    autoplay:true,
    autoplaySpeed:2000,
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
    },
  })
  $(carousel2).owlCarousel({
    loop: true,
    autoplay:true,
    autoplaySpeed:3000,
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
    },
  })

})
