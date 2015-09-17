/*jslint browser:true */


  function toggleClass(elementId, className) {
    console.log('success');
    elementId.classList.toggle(className);
  }


  var clickableElements = document.querySelectorAll('.clickable');



  for (var i = 0; i < clickableElements.length; i++) {
    (function(index) {
      console.log(this);
      clickableElements[index].addEventListener('click', function() {
        toggleClass(clickableElements[index], 'active');
      });
    }(i));
  }
