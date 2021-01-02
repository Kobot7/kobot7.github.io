// Collapse the navbar when page is scrolled
$(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    }
    else {
        $("#mainNav").removeClass("navbar-shrink");
    }
});

// Closes responsive menu when a scroll trigger link is clicked
$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});

$(".navbar-toggler").click(function () {
  if($('#navbarResponsive').hasClass("show")) {
    $(".navbar-toggler i.fa").addClass("fa-bars");
    $(".navbar-toggler i.fa").removeClass("fa-times");
  }
  else {
    $(".navbar-toggler i.fa").removeClass("fa-bars");
    $(".navbar-toggler i.fa").addClass("fa-times");
  }
});

// Navigation active state on scroll
var nav_sections = $('.nav-section');
var main_nav = $('.navbar-nav');

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop() + 80;

  nav_sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li a').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
