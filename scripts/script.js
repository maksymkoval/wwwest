(function($){

  
  jQuery(document).ready(function(){
  // write code here
   var $grid = new Isotope('.grid', {
        itemSelector: '.grid-item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth:10,
    gutter: 1},
  cellsByRow: {
    columnWidth: 180,
    rowHeight: 220
  },
  masonryHorizontal: {
    rowHeight: 110
  },
  cellsByColumn: {
    columnWidth: 180,
    rowHeight: 220
  }
}  )

  });
  $(".front-page_input").click(function() {
    $('html,body').animate({
        scrollTop: $("#form").offset().top},
        'slow');
});
  })(jQuery);

  
 

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}