// ================= NAVBAR TOGGLE =================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ================= GSAP PLUGINS =================
gsap.registerPlugin(TextPlugin, ScrollTrigger);

// ================= HERO SECTION =================
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroImg = document.querySelector(".hero-image img");
  const textElement = document.querySelector(".animate-text");

  if (heroContent) heroContent.classList.add("visible");

  // Gambar muncul dari kiri
  if (heroImg) {
    gsap.from(heroImg, {
      duration: 1.2,
      x: -80,
      opacity: 0,
      ease: "power3.out",
    });
  }

  // Judul & paragraf muncul bertahap
  gsap.from(".hero-content h1", {
    duration: 1,
    x: 80,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero-content p", {
    duration: 1,
    x: 80,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".btn", {
    duration: 1,
    opacity: 0,
    y: 30,
    delay: 1.2,
    ease: "power3.out",
  });
});

// ================= HERO IMAGE 3D EFFECT =================
const hero = document.querySelector(".hero");
const heroImg = document.querySelector(".hero-image img");

if (hero && heroImg) {
  hero.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;
    const x = (offsetX / offsetWidth - 0.5) * 20;
    const y = (offsetY / offsetHeight - 0.5) * 20;

    gsap.to(heroImg, {
      rotationY: x,
      rotationX: -y,
      scale: 1.05,
      transformPerspective: 500,
      ease: "power1.out",
    });
  });

  hero.addEventListener("mouseleave", () => {
    gsap.to(heroImg, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      ease: "power2.out",
    });
  });
}

// ================= ABOUT SECTION =================
if (document.querySelector(".about")) {
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
    },
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
    },
    duration: 1.2,
    x: 100,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out",
  });
}

// ================= PROJECT SECTION =================
if (document.querySelector(".projects")) {
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      duration: 1,
      y: 50,
      opacity: 0,
      delay: i * 0.2,
      ease: "power3.out",
    });
  });
}

// ================= GENERIC FADE-UP ANIMATION =================
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec.querySelectorAll(".fade-up"), {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.15,
  });
});
