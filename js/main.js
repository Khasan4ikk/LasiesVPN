const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const navLink = document.querySelectorAll(".nav-list a"); // Получаем все ссылки в меню

// Обработчик клика для кнопки гамбургера
burger.addEventListener("click", () => {
  navMobile.classList.toggle("active");
  burger.classList.toggle("active");
});

// Обработчик клика для ссылок в меню
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("active"); // Закрываем меню
    burger.classList.remove("active"); // Изменяем состояние кнопки
  });
});

//карусель
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    сenter: false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        // Ширина экрана меньше 0px (то есть всегда)
        items: 1, // Отображать 1 слайд
      },
      485: {
        // Ширина экрана от 485px
        items: 3, // Отображать 3 слайда
      },
    },
  });

  $(".slider__btn--prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

  $(".slider__btn--next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
});

// кнопка скролла

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  });
});

// анимация

AOS.init();
