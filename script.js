const wrapper = document.getElementById("navbarWrapper");
const navbar = document.getElementById("navbar");

function toggleNav() {
  navbar.classList.toggle("active");
}

// Lukk menyen hvis du klikker utenfor
document.addEventListener("click", function(event) {
  if (!wrapper.contains(event.target)) {
    navbar.classList.remove("active");
  }
});