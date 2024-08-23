function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const scrollContainer = document.querySelector('.experience-details-container');

let scrollAmount = 0;

function autoScroll() {
  scrollAmount++;
  scrollContainer.scrollLeft = scrollAmount;
  if (scrollAmount >= scrollContainer.scrollWidth) {
    scrollAmount = 0; // Reset scroll
  }
  window.requestAnimationFrame(autoScroll);
}

autoScroll();
