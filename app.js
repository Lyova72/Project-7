const sec2Head = document.querySelector(".sec2head");
const sec2Btn = document.querySelector(".sec2Btn");
const sec3Text = document.querySelector(".sec3Text");
const sec4Head = document.querySelector(".sec4-head");
const sec4Btn = document.querySelector(".sec4-btn");
const sec4Img = document.querySelector(".sec4-img");
const sec5H1 = document.querySelector(".sec5-h1");
const sec5H2 = document.querySelector(".sec5-h2");
const sec6Head1 = document.querySelector(".sec6Head1");
const sec6Head2 = document.querySelector(".sec6Head2");
const sec6Btn = document.querySelector(".sec6Btn");
const clientsHead = document.querySelector(".clients-head");
const footHead = document.querySelector(".foot-head");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sec2Head.classList.remove("left");
      sec4Head.classList.remove("left");
      sec2Btn.classList.remove("zoom");
      sec4Btn.classList.remove("zoom");
      sec6Btn.classList.remove("zoom");
      sec3Text.classList.remove("top");
      sec5H2.classList.remove("top");
      sec4Img.classList.remove("right");
      sec6Head1.classList.remove("left");
      sec6Head2.classList.remove("left");
      sec5H1.classList.remove("bottom");
      clientsHead.classList.remove("bottom");
      footHead.classList.remove("bottom");

      void sec2Head.offsetWidth;

      sec2Head.classList.add("left");
      sec4Head.classList.add("left");
      sec2Btn.classList.add("zoom");
      sec4Btn.classList.add("zoom");
      sec6Btn.classList.add("zoom");
      sec3Text.classList.add("top");
      sec5H2.classList.add("top");
      sec4Img.classList.add("right");
      sec6Head1.classList.add("left");
      sec6Head2.classList.add("left");
      sec5H1.classList.add("bottom");
      clientsHead.classList.add("bottom");
      footHead.classList.add("bottom");
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));





const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const h2 = document.getElementById('h2');
const Name = document.getElementById('client-name');
let pictures = ['images/client1.jpg','images/client2.jpg','images/client3.jpg'];
let names = ['Valery Hudson','Nick Perry','Kate Mclarson'];
let opinions = ['Ut enim ad minim veniam,  ullamco laboris nisi ut aliquip ex ea commodo consequat.','Ut enim ad minim veniam, quis nostrud exercitation ullamco ex ea commodo consequat.','Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'];

img.src = pictures[0];
h2.innerHTML = opinions[0];
Name.innerHTML = names[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        h2.innerHTML = opinions[position];
        Name.innerHTML = names[position];
        return;
    }
    img.src = pictures[position + 1];
    h2.innerHTML = opinions[position + 1];
    Name.innerHTML = names[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        h2.innerHTML = opinions[position];
        Name.innerHTML = names[position];
        return;
    }
    img.src = pictures[position - 1];
    h2.innerHTML = opinions[position - 1];
    Name.innerHTML = names[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);