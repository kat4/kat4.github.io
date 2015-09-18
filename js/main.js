/*jslint browser:true */


  function toggleClass(elementId, className) {
    console.log(elementId);
    elementId.classList.toggle(className);
  }


  var clickableElements = document.querySelectorAll('.clickable');



  for (var i = 0; i < clickableElements.length; i++) {
    (function(index) {
      console.log(this);
      clickableElements[index].addEventListener('click', function(evt) {
        console.log("clicked on "+index)
        toggleClass(clickableElements[index], 'active');
        //evt.stopPropagation();
      });
    }(i));
  }
