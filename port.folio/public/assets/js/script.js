let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bxs-x-circle");
  navbar.classList.toggle("active");
};

// smooth scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 160;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // header nav toggle
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //   navbar toggle remove

  menuIcon.classList.remove("bxs-x-circle");
  navbar.classList.remove("active");
};

// Initialize ScrollReveal
ScrollReveal({ reset: true, duration: 2000, delay: 200, distance: "85px" });

// Call reveal method on elements you want to animate
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box,contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,about-img ", { origin: "left" });
ScrollReveal().reveal(".home-content p,about-content ", { origin: "right" });


// typed js effect

const typed = new Typed(".multiple-text", {
    strings: ["Karim", " a Web Developer", "a gamer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    });