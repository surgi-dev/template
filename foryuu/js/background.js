document.addEventListener("DOMContentLoaded", () => {
  const numStars = 50;
  const container = document.getElementById("stars-container");

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 20}s`;
    container.appendChild(star);
  }
});
