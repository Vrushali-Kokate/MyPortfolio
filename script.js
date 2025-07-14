document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navbar
  // const header = document.querySelector('.navbar');
  // window.addEventListener('scroll', function() {
  //     header.classList.toggle('sticky', window.scrollY > 0);
  // });

  // Mobile Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.querySelector("i").classList.toggle("bx-menu");
    navToggle.querySelector("i").classList.toggle("bx-x");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.querySelector("i").classList.remove("bx-x");
        navToggle.querySelector("i").classList.add("bx-menu");
      }
    });
  });

  // Smooth Scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Typed Text Effect for Hero Section
  const typedTextSpan = document.querySelector(".typed-text");
  const textArray = ["MERN Developer", "Creative Designer"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!typedTextSpan.classList.contains("typing"))
        typedTextSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      typedTextSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!typedTextSpan.classList.contains("typing"))
        typedTextSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      typedTextSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (textArray.length) setTimeout(type, newTextDelay + 250);

  // ScrollReveal Animations
  const sr = ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 200,
    reset: true, // Animations repeat on scroll up/down
  });

  sr.reveal(
    ".hero-text h3, .hero-text h1, .hero-text h5, .hero-text p, .social-links, .btn-secondary",
    { origin: "left", interval: 100 }
  );
  sr.reveal(".hero-image img", { origin: "right", delay: 400 });

  sr.reveal(".section-title", { origin: "top" });
  sr.reveal(".section-subtitle", { origin: "top", delay: 100 });

  sr.reveal(".about-image", { origin: "left" });
  sr.reveal(
    ".about-text h3, .about-text h2, .about-text p, .about-text .btn-secondary",
    { origin: "right", interval: 100 }
  );

  sr.reveal(".skill-card", { origin: "bottom", interval: 150 });
  sr.reveal(".project-card", { origin: "bottom", interval: 150 });
  sr.reveal(".card", { origin: "bottom", interval: 150 });
  sr.reveal(".contact-item", { origin: "bottom", interval: 100 });
  sr.reveal(".contact-form-container", { origin: "bottom", delay: 200 });
});
