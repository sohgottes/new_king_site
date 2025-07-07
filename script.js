let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "20px";
  }

  lastScroll = currentScroll;
});
