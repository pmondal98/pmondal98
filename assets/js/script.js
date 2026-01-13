'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const spaceBackground = document.getElementById("spaceBackground");

// Generate multi-layered stars
function generateStars(layer, count) {
  const container = document.querySelector(`.stars-layer-${layer}`);

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 1.5 + 0.5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;

    container.appendChild(star);
  }
}

// Create three layers of stars with different densities
generateStars(1, 80); // Foreground - fewer, brighter stars
generateStars(2, 100); // Middle ground
generateStars(3, 120); // Background - more, dimmer stars

// Generate cosmic dust particles
function createCosmicDust() {
  const dust = document.createElement("div");
  dust.className = "cosmic-dust";

  dust.style.left = `${Math.random() * 100}%`;
  dust.style.bottom = "0";
  dust.style.animationDelay = `${Math.random() * 15}s`;
  dust.style.animationDuration = `${Math.random() * 10 + 10}s`;

  spaceBackground.appendChild(dust);
}

// Create dust particles
for (let i = 0; i < 30; i++) {
  createCosmicDust();
}

// Generate shooting stars with random timing
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";

  const startX = Math.random() * window.innerWidth * 0.8;
  const startY = Math.random() * (window.innerHeight * 0.3);
  const length = Math.random() * 100 + 80;

  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;
  shootingStar.style.width = `${length}px`;
  shootingStar.style.animationDuration = `${Math.random() * 2 + 3}s`;

  spaceBackground.appendChild(shootingStar);

  setTimeout(() => {
    shootingStar.remove();
  }, 4500);
}

// Create shooting stars at random intervals
function scheduleShootingStar() {
  const delay = Math.random() * 8000 + 4000; // 4-12 seconds
  setTimeout(() => {
    createShootingStar();
    scheduleShootingStar();
  }, delay);
}

// Start the shooting star cycle
scheduleShootingStar();

// Create initial shooting stars
setTimeout(() => createShootingStar(), 2000);
setTimeout(() => createShootingStar(), 6000);

// Subtle parallax effect on mouse move (optional)
let mouseX = 0,
  mouseY = 0;
let currentX = 0,
  currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animateParallax() {
  // Smoother interpolation
  currentX += (mouseX - currentX) * 0.03;
  currentY += (mouseY - currentY) * 0.03;

  const layers = document.querySelectorAll(".stars-layer");
  layers.forEach((layer, index) => {
    const depth = (index + 1) * 2; // Reduced for smoother motion
    layer.style.transform = `translate(${currentX * depth}px, ${
      currentY * depth
    }px)`;
  });

  const planets = document.querySelectorAll(".planet");
  planets.forEach((planet) => {
    const depth = 5; // Reduced for smoother motion
    planet.style.transform += ` translate(${currentX * depth}px, ${
      currentY * depth
    }px)`;
  });

  requestAnimationFrame(animateParallax);
}

animateParallax();

// Intersection Observer for skill bars animation
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress-fill');
      skillBars.forEach((bar, index) => {
        const parentItem = bar.closest('.skills-item');
        const targetWidth = parentItem.querySelector('data')?.value || '75';
        
        // Set CSS variable for animation
        bar.style.setProperty('--target-width', targetWidth + '%');
        
        // Trigger animation by adding class
        setTimeout(() => {
          bar.style.width = targetWidth + '%';
        }, index * 200);
      });
      
      skillsObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

// Observe skills section
const skillsSection = document.querySelector('.skills-list');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Intersection Observer for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = `slideInLeft var(--duration-medium) var(--ease-smooth) forwards`;
    }
  });
}, {
  threshold: 0.2
});

// Observe timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
  timelineObserver.observe(item);
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Add stagger animation to service items on page load
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.animation = `fadeSlideIn var(--duration-medium) var(--ease-smooth) forwards`;
  item.style.animationDelay = `${index * 0.1 + 0.2}s`;
});

// Add entrance animation to testimonial cards
const testimonialCards = document.querySelectorAll('.testimonials-item');
testimonialCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.animation = `fadeSlideIn var(--duration-medium) var(--ease-smooth) forwards`;
  card.style.animationDelay = `${index * 0.15 + 0.3}s`;
});