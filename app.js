// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyBar()};

// Get the header
var header = document.getElementById("myNavbar");
var serviceWrapper = document.getElementById("service-wrapper");

var login = document.getElementById("login")


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    serviceWrapper.classList.add("service-stick-mode")
  } else {
    header.classList.remove("sticky");
    serviceWrapper.classList.remove(service-stick-mode)
  }
}

//Function for hiding and showing the login form
function formSetter(){
  if(document.getElementById("myForm").style.display == "block"){
    document.getElementById("myForm").style.display = "none"
  }else{
    document.getElementById("myForm").style.display = "block"
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 