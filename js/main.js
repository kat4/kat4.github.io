/*jslint browser:true */


  function toggleClass(elementId, className) {
    elementId.classList.toggle(className);
  }


  var clickableElements = document.querySelectorAll('.clickable');



  for (var i = 0; i < clickableElements.length; i++) {
    (function(index) {
      clickableElements[index].addEventListener('click', function() {
        toggleClass(clickableElements[index], 'active');
      });
    }(i));
  }
