window.addEventListener("load", () => {
  const header = document.querySelector("header");
  const topNav = document.querySelector(".top-nav");

  const typeWriter = document.querySelector(".typewriter");
  if (typeWriter) {
    const text = typeWriter.textContent;
    typeWriter.textContent = "";
    let i = 0;
    const speed = 100;

    function type() {
      if (i < text.length) {
        typeWriter.textContent += text.charAt(i);
        i += 1;
        setTimeout(type, speed);
      }
    }

    type();
  }

  if (!header || !topNav) {
    return;
  }

  const revealFrom = Math.max(header.offsetHeight - 120, 220);

  function toggleNavVisibility() {
    if (window.scrollY >= revealFrom) {
      topNav.classList.add("is-visible");
      return;
    }
    topNav.classList.remove("is-visible");
  }

  toggleNavVisibility();
  window.addEventListener("scroll", toggleNavVisibility);
});
