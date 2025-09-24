window.onload = function () {
  const typeWritter = this.document.querySelector(".typewriter");
  const text = typeWritter.textContent;
  typeWritter.textContent = "";
  let i = 0;
  const speed = 100; // Velocidad de escritura en milisegundos

  function type() {
    if (i < text.length) {
      typeWritter.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
};
