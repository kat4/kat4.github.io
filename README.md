# kat4.github.io

## Hey there!
#### Here at Kat4 we're obsessed with readability of our code. This handy README should take you through the magic behind our site. Enjoy.

**The Task**

We wanted to create a blog to talk through our Founders and Coders journey for anyone wanting to learn about the course.

As we're learning both the front and back-end of web development we had to create something beautiful to showcase this.

Don't be intimidated by our minimalist yet friendly and cohesive design. We'll talk you through the way we wrote this below so you too can create a site like this!

**The Code**

***Javascript***

Our Javascript function lets us expand the team profiles and blog posts on clicking them.

Here's our function:

```javascript
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

```
It changes the class of an element (the profile etc.) when it's clicked.

***CSS***

Alot of the clever stuff has been done using CSS as we're not allowed to use jquery at this point in the course.

We've also saved our CSS across 2 different files. One for the profile section of the site and one for the blogs.

***html***

We had to work within the jekyll structure for this so it's fairly standard. There are lots of divs/classes everywhere to accomodate our CSS manipulation to create the extended profile effect.

Thanks for reading.
