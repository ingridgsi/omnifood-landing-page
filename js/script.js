// console.log("hello world");

// const myName = "Ingrid";

// const h1 = document.querySelector(".heading-primary");

// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;

//   h1.style.backgroundColor = "red";

//   h1.style.padding = "5rem";
// });

// Set current Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // toggle will check the header. If there's the nav-open class, toggle will remove it otherwise will add.
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top:
    if (href === "#")
      window.scrollTo({
        // px of the page
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Stick Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const sectionMealEl = document.querySelector(".meal");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    // calling the function it will observe the entry we passed and check if it's false. So then will apply the function

    // ent.isIntersecting === false
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    // ent.isIntersecting === true
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },

  {
    // In the viewport
    root: null,

    // 0 - out of the viewport - false
    // 1 - inside the viewport - true
    // 0 because we want to the hero section move completely out of the viewport.
    threshold: 0,

    // This margin is considered outside the root
    // It's only possible to set the value in px. -80px is the height we set in the sticky property css
    rootMargin: "-80px",
  }
);

// We can stablish any other section we calling the the function
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
