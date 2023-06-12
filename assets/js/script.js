$(() => {
      $(window).scroll(() => {
            var windowTop = $(window).scrollTop();
            var navbar = $('#navbar');
            windowTop > 0 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
            windowTop > 0 ? $('#navbar ul li a').addClass('navText') : $('#navbar ul li a').removeClass('navText');
      });
});

$(document).ready(function() {
  var slideCount = $('input.slider__nav').length;
  var currentIndex = 0;
  var autoSlideTimer;

  function startAutoSlide() {
    autoSlideTimer = setInterval(function() {
      currentIndex = (currentIndex + 1) % slideCount;
      $('input.slider__nav').eq(currentIndex).prop('checked', true).trigger('change');
    }, 5000); // Ubah angka 5000 sesuai dengan interval waktu dalam milidetik (dalam contoh ini 5 detik)
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  startAutoSlide();

  $('input.slider__nav').on('click', function() {
    var selectedIndex = $(this).index();

    // Hentikan slider otomatis
    stopAutoSlide();

    // Atur indeks slide saat ini
    currentIndex = selectedIndex;

    // Mulai ulang slider otomatis
    startAutoSlide();
  });
});

const themeToggle = document.getElementById('checkbox');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});







