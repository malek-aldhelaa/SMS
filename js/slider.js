const cards = document.querySelectorAll(".card");
const indicatorsContainer = document.getElementById("indicators");
let index = 0;

cards.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    arrangeCards();
  });
  indicatorsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function arrangeCards() {
  const middle = Math.floor(cards.length / 2);
  cards.forEach((card, i) => {
    const pos = (i - index + cards.length) % cards.length;
    const offset = pos - middle;

    const angle = offset * 30;
    const z = -Math.abs(offset) * 150;
    const x = offset * 220;
    const scale = pos === middle ? 1.1 : 0.9;

    gsap.to(card, {
      duration: 0.8,
      x: x,
      z: z,
      rotationY: angle,
      scale: scale,
      ease: "power3.inOut"
    });

    card.classList.remove("center");
    if (pos === middle) card.classList.add("center");
  });

  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    if (i === index) dot.classList.add("active");
  });
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  arrangeCards();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  arrangeCards();
});

arrangeCards();
