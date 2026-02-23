document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis

  const lenis = new Lenis({
    duration: 2,

    autoRaf: true,
  });
  if (window.innerWidth < 1024) {
    lenis.destroy();
  }

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  const parallaxImg = document.querySelector(".parallax-img");

  if (parallaxImg) {
    lenis.on("scroll", ({ scroll }) => {
      const speed = 0.1; // adjust parallax strength
      parallaxImg.style.transform = `translateY(${scroll * speed}px)`;
    });
  }
  const parallaxCards = document.querySelectorAll(".parallax-card-img");

  if (parallaxCards) {
    lenis.on("scroll", ({ scroll }) => {
      const speed = 0.13; // tweak this

      parallaxCards.forEach((card) => {
        card.style.transform = `translateY(${scroll * speed}px)`;
      });
    });
  }

  requestAnimationFrame(raf);

  AOS.init();
  // Button Toggler

  const toggleBtn = document.getElementById("toggler-btn");
  const navToggler = document.getElementById("nav-collapsed");
  const body = document.body;
  const html = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    navToggler.classList.toggle("translate-x-0");

    html.classList.toggle("overflow-hidden");
    body.classList.toggle("overflow-hidden");
    toggleBtn.classList.toggle("tilted");
  });

  // Swiper

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 20 },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
  // Cursor

  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";

    requestAnimationFrame(MouseMove);
  }
  MouseMove();
  AOS.refresh();
});
