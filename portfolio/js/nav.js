
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
});

const menuBtn = document.querySelector("nav .container ");
const navigation = document.querySelector("nav .container .nav_bar");

  menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

