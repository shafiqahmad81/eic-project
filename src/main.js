import './style.css'

// HEADER SECTION START
const nav = document.getElementById('nav-area');
const open = document.getElementById('hambargur-icon');
const close = document.getElementById('close-icon');
const header = document.getElementById("header-section");


open.addEventListener('click', () => {
  nav.classList.replace('left-[-9999px]', 'left-0');
});

close.addEventListener('click', () => {
  nav.classList.replace('left-0', 'left-[-9999px]');
});


  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-white", "shadow-md", "py-3");
      header.classList.remove("bg-transparent", "py-[54px]");
    } else {
      header.classList.add("bg-transparent", "py-[54px]");
      header.classList.remove("bg-white", "shadow-md", "py-3");
    }
  });

// HEADER SECTION END


// SECURITY ANIMATION START

document.addEventListener("DOMContentLoaded", () => {
  const chartSection = document.querySelector(".chart-section");

  if (!chartSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = chartSection.querySelectorAll(".bar");
          bars.forEach(bar => {
            bar.classList.add("animate-bar");
          });
          observer.unobserve(chartSection);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(chartSection);
});





// SECURITY ANIMATION END


// SLIDER START
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 36,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  slideToClickedSlide: true,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  breakpoints: {
    1024: { slidesPerView: 2.5 },
    768: { slidesPerView: 1.5 },
    0: { slidesPerView: 1.1 },
  },

});




// SLIDER END


// counter JS
document.addEventListener("DOMContentLoaded", () => {
  const counterWrap = document.querySelector("#counter-wrap");

  if (!counterWrap) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const counters = counterWrap.querySelectorAll(".count");

            counters.forEach(counter => {
              const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText.replace("+", "");
                const increment = target / 100;

                if (current < target) {
                  counter.innerText = Math.ceil(current + increment) + "+";
                  setTimeout(updateCounter, 20);
                } else {
                  counter.innerText = target + "+";
                }
              };

              updateCounter();
            });
          }, 200);

          observer.unobserve(counterWrap);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(counterWrap);
});


// bg infinity 





