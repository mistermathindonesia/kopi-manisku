// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik maka akan active atau muncul itulah arti toggle active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar utk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

// ketika di klik di sbr tempat
// e.target artinya event target atau yg diklik dari mouse kita saat itu
// selama yg dilik bukan hamburger dan navbar maka jalankan fungsi dibawah ini yaitu me remove class active

// ketika kita klik di luar hamburger-menu dan di luar navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// yeaaayyy selesai bagian [pertama] yaitu navbar ^_^