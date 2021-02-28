$(document).ready(function() {

    //Show Lupe on product Picture
    $('.productImg').wrap("<div class=\"productContainer\"> </div>");
    $('.productImg').after("<img class=\"lupe\" src=\"../pics/lupe_klein.jpg\"/>");

    renderSlideShow();
   
    //Click listeners
    $('.productImg').click(function() {
        $('.slideshowContainer').fadeIn();
        showSlide($(this).attr("id"));
    });
    
    $('.close').click(function() { $('.slideshowContainer').fadeOut()});
    $('.next').click(function() {showNext()});
    $('.prev').click(function() {showPrev()});
 
});

//Hide Slideshow on esc
$(document).keyup(function(event) {
    event.keyCode == 27 ?  $('.slideshowContainer').hide() : null;
});

//renders slideshow and hides it (will only show up on click)
function renderSlideShow() {
    $('.productImg').each(function(index) {
        $(this).attr("id", index);
        var src = $(this).attr("src");
        src = src.replace("small", "big");
        $('.slideshowContainer').append("<div class=\"slide\" id=\""+index+"\"> <img src=\"" + src + "\"/> </div>");
    });
    
   $('.slideshowContainer').hide();
}


var slideIndex = 0;

//hides all slides and shows slide with id n
function showSlide(n) {
    slideIndex = n;
    $('.slide').hide();
    $('.slideshowContainer #' + n).fadeIn();    
}

//shows next slide
function showNext() {
    var slides = $('.slide');
    slideIndex++;
    if(slideIndex>=slides.length) slideIndex = 0;
    showSlide(slideIndex);
}

//shows previus slide
function showPrev(){
    var slides = $('.slide');
    slideIndex--;
    if(slideIndex < 0) slideIndex = slides.length-1;
    showSlide(slideIndex);
}

