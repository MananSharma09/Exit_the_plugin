document.addEventListener("DOMContentLoaded", function() {
    var exitPopup = document.getElementById("exit-popup");

function showExitPopup() {
  exitPopup.style.display = "block";
}

function hideExitPopup() {
  exitPopup.style.display = "none";
}

window.addEventListener("mouseout", function(e) {
  if (e.clientY < 0) {
    showExitPopup();
  }
});

document.getElementById("stay").addEventListener("click", function() {
  hideExitPopup();
});

document.getElementById("leave").addEventListener("click", function() {
  window.location.href = "https://www.google.com";
});
  });
