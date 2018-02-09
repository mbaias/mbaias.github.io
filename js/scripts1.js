
    var config = {
      apiKey: "AIzaSyDqKB_wGOPkKm9XcseBlENVFIoAzloaANs",
      authDomain: "valentines-day-3cebd.firebaseapp.com",
      databaseURL: "https://valentines-day-3cebd.firebaseio.com",
      projectId: "valentines-day-3cebd",
      storageBucket: "valentines-day-3cebd.appspot.com",
      messagingSenderId: "891418483655"
    };
    firebase.initializeApp(config);
    
    var div = document.getElementById('wrap');
    //Reference cards
    
    var cardsRef = firebase.database().ref('Cards/');
    
    cardsRef.on('child_added', function(snapshot) {
      var container = document.createElement('div');
      var img = document.createElement('img');
      var p = document.createElement('p');
      container.setAttribute('class', 'card');
      img.setAttribute('src', '../images/card.png');
      img.setAttribute('class', 'card-image')
      p.innerText = snapshot.val().card;
      container.appendChild(p);
      container.appendChild(img);
      div.appendChild(container);
    })
    
    // function animatethis(targetElement, speed) {
    //   var scrollWidth = $(targetElement).get(0).scrollWidth;
    //   var clientWidth = $(targetElement).get(0).clientWidth;
    //   console.log(clientWidth)
    //   console.log(scrollWidth)
    //   $(targetElement).animate({ scrollLeft: scrollWidth - clientWidth },
    //   {
    //       duration: speed,
    //       complete: function () {
    //           targetElement.animate({ scrollLeft: 0 },
    //           {
    //               duration: speed,
    //               complete: function () {
    //                   animatethis(targetElement, speed);
    //               }
    //           });
    //       }
    //   });
    // };
    // animatethis($('#wrap'), 1000);

$(document).ready(function() {
  function scrolling(){
    var clientWidth = $('#wrap').get(0).clientWidth;
    var scrollWidth =$('#wrap')[0].scrollWidth;

    var scrollLeft = scrollWidth - clientWidth; 
    console.log(scrollLeft)
  
    $.keyframe.define([{
      name: 'bannermove',
      from: {'transform': 'translate3d(0, 0, 0)'},
      to: {'transform': 'translateX('+ '-'+ scrollLeft +'px)'}
    }]);
  
    $('#wrap').playKeyframe({
      name: 'bannermove',
      duration: '25s',
      timingFunction: 'linear',
      iterationCount: 'infinite'
    })
  }

  var stop = setInterval(function(){ scrolling() }, 10000)

 
  $('#stop').click(function() {
    clearInterval(stop);
    console.log('sdfs')
  })
});


var element = document.getElementById('wrap');

console.log(element)
