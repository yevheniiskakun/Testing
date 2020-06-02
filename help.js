var buttonTop = document.getElementById("ButtonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function Loggingout(){
  if (confirm('Are you sure you want to log out?')) {
    window.location.replace("Log-in.html");
  } else {
      // Do nothing!
  }
}
function ShowCart(){
  //document.getElementById("left_header").innerHTML = "You did not have car in your cart yet";
  //document.getElementById("left_header1").style.display = "block";
  document.getElementById("help_button").style.color = "black";
  document.getElementById("cart_button").style.color = "red"
}