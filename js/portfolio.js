$.getJSON("https://ipapi.co/json/",
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
      country: json.country_name,
      isp: json.org,
      lat: json.latitude,
      lon: json.longitude,
      ip: json.ip,
      state: json.region,
      zip: json.postal,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
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

// Click anywhere on the terminal window and it will focus to the text box so that you can type commands
$(".shell-wrap").click(function () {
  $(".shell-box").focus();
});

// Navigate the site through terminal commands
function terminal(element) {
  if (event.key === "Enter") {

    var command = element.value.toLowerCase();
    $("<li>" + command + "</li>").insertBefore(".shell-box");
    $(".shell-box").val("");

    switch (command) {

      case "help":
        $("<li>cd home: scroll to top of the page</li> <li>cd about: scroll to about section</li> <li>cd portfolio: scroll to portfolio section</li> <li>cd contact: scroll to contact section</li> <li>cd github: go to my github</li> <li>cd linkedin: go to my linkedin</li> <li>send email: send me an email</li> <li>reload: reload the webpage</li> <li>clear: empty the bash window</li> <li>hide: hide the bash window</li>").insertBefore(".shell-box");
        break;

      case "cd home":
        $('html, body').stop().animate({
          scrollTop: $("#page-top").offset().top
        }, 1500, 'easeInOutExpo');
        break;

      case "cd about":
        $('html, body').stop().animate({
          scrollTop: $("#about").offset().top
        }, 1500, 'easeInOutExpo');
        break;

      case "cd portfolio":
        $('html, body').stop().animate({
          scrollTop: $("#portfolio").offset().top
        }, 1500, 'easeInOutExpo');
        break;

      case "cd contact":
        $('html, body').stop().animate({
          scrollTop: $("#contact").offset().top
        }, 1500, 'easeInOutExpo');
        break;

      case "cd github":
        window.location = "https://github.com/wehbs";
        break;

      case "cd linkedin":
        window.location = "https://www.linkedin.com/in/shamirwehbe";
        break;

      case "send email":
        window.location = "mailto:shamirwehbe@me.com";
        break;

      case "reload":
        location.reload();
        break;

      case "clear":
        $(".shell-body li.pwd").nextAll("li").remove();
        break;

      case "hide":
        $(".shell-wrap").remove();
        break;

    }
  }
};