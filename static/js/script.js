
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}


<!-- vitrin animation -->

const row = document.getElementById("bookRow");
const wrapper = document.querySelector(".book-row-wrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const cards = document.querySelectorAll(".book-card");

const visibleCards = 4;
const gap = 25;
const cardWidth = cards[0].offsetWidth + gap;

let index = 0;
let totalCards = cards.length;
let sliderInterval;

// clone اولیه
for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    row.appendChild(clone);
}

function moveToIndex() {
    row.style.transition = "transform 1.2s ease";
    row.style.transform = `translateX(${index * cardWidth}px)`;
}

function nextSlide() {
    index++;
    moveToIndex();

    if (index === totalCards) {
        setTimeout(() => {
            row.style.transition = "none";
            row.style.transform = "translateX(0)";
            index = 0;
        }, 1200);
    }
}

function prevSlide() {
    if (index === 0) {
        index = totalCards;
        row.style.transition = "none";
        row.style.transform = `translateX(${index * cardWidth}px)`;
    }

    setTimeout(() => {
        index--;
        moveToIndex();
    }, 20);
}

function startSlider() {
    sliderInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(sliderInterval);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

wrapper.addEventListener("mouseenter", stopSlider);
wrapper.addEventListener("mouseleave", startSlider);

startSlider();
