import './style.css'

// HEADER SECTION START
const nav = document.getElementById('nav-area');
const open = document.getElementById('hambargur-icon');
const close = document.getElementById('close-icon');
const header = document.getElementById("header-section");

const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

open.addEventListener('click', () => {
  nav.classList.replace('left-[-9999px]', 'left-0');
});

close.addEventListener('click', () => {
  nav.classList.replace('left-0', 'left-[-9999px]');
});

if (isHomePage) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-white", "shadow-md", "py-3");
      header.classList.remove("bg-transparent", "py-[54px]");
    } else {
      header.classList.add("bg-transparent", "py-[54px]");
      header.classList.remove("bg-white", "shadow-md", "py-3");
    }
  });
} else {
  header.classList.add("bg-white", "shadow-md", "py-3");
  header.classList.remove("bg-transparent", "py-[54px]");
}
// HEADER SECTION END


// SECURITY ANIMATION START
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".bar");
          bars.forEach(bar => {
            const height = bar.getAttribute("data-height");
            bar.style.setProperty("--target-height", height);
            bar.classList.add("animate-bar");
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".chart").forEach(chart => observer.observe(chart));
});
// SECURITY ANIMATION END


// SLIDER START
var swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      spaceBetween: 36,
      loop: true,
      grabCursor: true,
      initialSlide: 2,
    on: {
      init: function () {
        this.slideToLoop(1, 0);
      },
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
        1024: { slidesPerView: 2.5 }, 
        768: { slidesPerView: 1.5 }, 
        0: { slidesPerView: 1.1 }, 
      },
    });
// SLIDER END

// FAQ SECTION


