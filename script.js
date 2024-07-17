const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  // Store default background color
  const defaultBackgroundColor = section.style.backgroundColor;

  // Hover effect
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = "lightgray";
  });

  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = defaultBackgroundColor;
  });

  // Scrolling effect
  window.addEventListener("scroll", () => {
    const sectionHeight = section.offsetHeight;
    const scrollTop = window.scrollY;
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + sectionHeight;

    if (scrollTop >= sectionTop - sectionHeight / 2 && scrollTop < sectionBottom) {
      section.style.backgroundColor = "lightblue";
    } else {
      section.style.backgroundColor = defaultBackgroundColor;
    }
  });
});
