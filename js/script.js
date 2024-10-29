//Ссылки в меню
window.onload = function() {
  var navLinks = document.querySelectorAll('.header_menu_li a');
  var currentPage = window.location.href;

  for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentPage) {
          navLinks[i].parentNode.classList.add('header_menu_li_active');
      } else {
          navLinks[i].parentNode.classList.remove('header_menu_li_active');
      }
  }
}


//телефонка
// Получаем элементы по их классам
var block1 = document.getElementsByClassName("blockclose");
var block2 = document.getElementsByClassName("blockactive");

// Добавляем обработчик события click к каждому элементу block1
for (let i = 0; i < block1.length; i++) {
  block1[i].addEventListener("click", function() {
    // Добавляем или удаляем класс active для каждого элемента block2
    for (let j = 0; j < block2.length; j++) {
      if (block2[j].classList.contains("active_close")) {
        block2[j].classList.remove("active_close");
      } else {
        block2[j].classList.add("active_close");
      }
    }
  });
}



//сьезжание хедера
window.onscroll = function() {
  var menu = document.getElementById('menu');
  if (window.pageYOffset > 50) {
      menu.classList.add('scrolled_header');
  } else {
      menu.classList.remove('scrolled_header');
  }
};


//слайдер цен
let currentSlide = 0;
const blocks = document.querySelectorAll('.price_wrapper > div');
const leftButton = document.querySelector('.price_left');
const rightButton = document.querySelector('.price_right');

let blocksToShow = window.innerWidth < 769 ? 1 : 4;

function updateBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        if (i >= currentSlide && i < currentSlide + blocksToShow) {
            blocks[i].style.display = 'block';
        } else {
            blocks[i].style.display = 'none';
        }
    }
}

leftButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateBlocks();
    }
});

rightButton.addEventListener('click', () => {
    if (currentSlide < blocks.length - blocksToShow) {
        currentSlide++;
        updateBlocks();
    }
});

window.addEventListener('resize', () => {
    blocksToShow = window.innerWidth < 769 ? 1 : 4;
    updateBlocks();
});

updateBlocks();


//переворот блока
function flip(event) {
    const card = event.target.closest('.flip-card-inner');
    card.classList.toggle('flipped');
}


//слайдер для коментариев 
let commentsCurrentSlide = 0;
const commentsSlides = document.querySelectorAll('.comments-slide');
const commentsDots = document.querySelectorAll('.comments-dot');

commentsSlides.forEach((slide, index) => {
  if (index !== commentsCurrentSlide) {
    slide.style.left = '200%';
  }
});

function commentsUpdateSlide(slideIndex) {
  commentsSlides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.left = '0';
      setTimeout(() => {
        slide.classList.add('active');
      }, 500);
    } else {
      slide.style.left = '200%';
      slide.classList.remove('active');
    }
  });

  commentsDots[commentsCurrentSlide].classList.remove('active');
  commentsCurrentSlide = slideIndex;
  commentsDots[commentsCurrentSlide].classList.add('active');
}

commentsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => commentsUpdateSlide(index));
});
