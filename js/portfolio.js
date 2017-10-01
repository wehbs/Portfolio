$.getJSON("http://ip-api.com/json",
  function (json) {
    var config = {
      apiKey: "AIzaSyDxW2ypEVCUqBXGf-gL7MXA0pUJjEiPxU0",
      authDomain: "portfolio-5daeb.firebaseapp.com",
      databaseURL: "https://portfolio-5daeb.firebaseio.com",
      projectId: "portfolio-5daeb",
      storageBucket: "portfolio-5daeb.appspot.com",
      messagingSenderId: "667750983442"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    var ipValues = {
      city: json.city,
      country: json.country,
      isp: json.isp,
      lat: json.lat,
      lon: json.lon,
      ip: json.query,
      state: json.regionName,
      zip: json.zip,
    };
    database.ref().push(ipValues);
  });

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  $(".navbar-collapse").collapse('hide');
});