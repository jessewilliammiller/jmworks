// Get the modal
var modal = document.getElementById("callMeModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// with the below code, social buttons stop working after the first time they're clicked. but with above code mobile cannot close modal on outside click

// window.addEventListener("click", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// document.addEventListener("touchstart", function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });