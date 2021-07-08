// Button When Clicked leads to another page
function myWorks() {
    location.replace("works.html")
}

// Button When Clicked leads to another page
function myContact() {
   location.replace("contact.html")
}

// Button When Clicked leads to another page
function myVideo() {
   location.replace("videos.html")
}

// Button When Clicked leads to another page
function myTestimonial() {
   location.replace("services.html")
}


// Button When Clicked leads to another page
function mySites() {
   location.replace("sites.html")
}

// Button When Clicked leads to another page
function myPhotos() {
   location.replace("photos.html")
}




// Cool cursor 
(function (){
   var cursor = document.querySelector('.cursor');
   var links = document.querySelectorAll('a');

   var editCursor = function editCursor(event){
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
   };

   window.addEventListener('mousemove', editCursor);

})();