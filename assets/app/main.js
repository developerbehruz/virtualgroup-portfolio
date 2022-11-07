let menuBtn = document.querySelector('.menuBtn'),
    menuBtnIconOpen = document.querySelector('.menuBtn .menu'),
    menuBtnIconClose = document.querySelector('.menuBtn .close')
    navigation = document.querySelector('.navigation'),
    navbarUl = document.querySelector('.navbar-nav'),
    navigationItems = document.querySelectorAll('.nav-link'),
    langBtn = document.querySelector('.langNav'),
    homeImg = document.querySelector('.homeImg'),
    navContainer = document.querySelector('.navContainer');

menuBtn.addEventListener('click', () => {
    menuBtnIconOpen.classList.toggle('active');
    menuBtnIconClose.classList.toggle('active');
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
    langBtn.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    navContainer.classList.toggle('sticky', window.scrollY > 0);
});

navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
// Create a lightbox
(function() {
    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");
    var $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      var src = $(this).attr("data-image-hd");
      var cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());

/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});


var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let form = document.querySelector('.form'),
    sendBtn = document.querySelector('.sendBtn'),
    msg = document.querySelector('.msg'),
    name = document.querySelector('.name'),
    phone = document.querySelector('.phone')

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  request = new XMLHttpRequest();
  request.open('POST', '../assets/php/index.php?do=sendMessage', true);
  formData = new FormData(form);
  request.addEventListener('load', () => {
    if(request.status === 200) {
      data = JSON.parse(request.response);
      console.log(data);
      if(data.ok === true && data.code === 200) {
        msg.innerHTML = "<h6 style='color: green;'>Malumotlarngiz yuborildi!</h6>";
        console.log(data);
        // setTimeout(function() {
        //   window.location.href = "./"
        // }), 3000;
      }else{
        msg.innerHTML = `<h6 style='color: red;'>${data.message}</h6>`;
        console.log(data);
      }
    }
  })
  request.send(formData);
})



// translate


// $(document).ready(function() {
//   var lang = "uz-uz";
//   $(".trn").each(function(index, element) {
//     $(this).text(arrLang[lang][$(this).attr("key")]);
//   });
//   });

// $(".translate").click(function() {
//   var lang = $(this).attr("id");

//   $(".trn").each(function(index, element) {
//     $(this).text(arrLang[lang][$(this).attr("key")]);
//   });
// });
// var arrLang = {
//   "uz-uz": {
//     "Kompaniya":"Kompaniya",
//     "Xizmatlar":"Xizmatlar",
//     "Portfolio":"Portfolio",
//     "Vakansiya":"Vakansiya",
//     "Blog":"Blog ",
//     "Tilni tanlash":"Tilni tanlash",
//     "Biz haqimizda":"Biz haqimizda",
//     "Portfolio":"Portfolio",
//     "Qo'ng'iroq":"Qo'ng'iroq",
//     "PORTFOLIO":"PORTFOLIO",
//     "Mobil ilovalar":"Mobil ilovalar",
//     "Web-saytlar":"Web-saytlar",
//     "Brending":"Brending",
//     "Batafsil":"Batafsil",
//     "Bizning":"Bizning",
//     "Xizmatlarimiz":"Xizmatlarimiz",
//     "Web-saytlar":"Web-saytlar",
//     "Hamkorlarimiz":"Hamkorlarimiz",
//     "Bizga ishonadigan kompaniyalar":"Bizga ishonadigan kompaniyalar",
//     "Bizning jamoa orasida siz ham bo'lishingiz mumkin va bu juda oson!":"Bizning jamoa orasida siz ham bo'lishingiz mumkin va bu juda oson!",
//     "Frontend dasturchi":"Frontend dasturchi",
//     "Biz bilan yuksalmoqchimisiz? Unda keling va bizga kerakligingizni isoblang va ajralmas kuchli jamoaga ega bo'ling!":"Biz bilan yuksalmoqchimisiz? Unda keling va bizga kerakligingizni isoblang va ajralmas kuchli jamoaga ega bo'ling!",
//     "Ijtimoiy tarmoqlarda biz bilan bog'laning:":"Ijtimoiy tarmoqlarda biz bilan bog'laning:",
//     "Virtual Group":"Virtual Group",
//     "Produktlar":"Produktlar",
//     "Angular":"Angular",
//     "Angular":"Angular",
//     "Foydali linklar":"Foydali linklar",
//     "Narxlash":"Narxlash",
//     "Ta'mirlash":"Ta'mirlash",
//     "Buyurtma":"Buyurtma",
//     "Kontakt":"Kontakt",
//   },
//   "uz-en": {
//     "Kompaniya":"Company",
//     "Xizmatlar":"Service",
//     "Portfolio":"Portfolio",
//     "Vakansiya":"Vacancy",
//     "Blog":"Blog ",
//     "Tilni tanlash":"Language selection",
//     "Biz haqimizda":"About us",
//     "Portfolio":"Portfolio",
//     "Qo'ng'iroq":"Call",
//     "PORTFOLIO":"PORTFOLIO",
//     "Mobil ilovalar":"Mobile applications",
//     "Web-saytlar":"Web-sites",
//     "Brending":"Brending",
//     "Batafsil":"More",
//     "Bizning":"Ours",
//     "Xizmatlarimiz":"Sevices",
//     "Web-saytlar":"Web-sites",
//     "Hamkorlarimiz":"Our partners",
//     "Bizga ishonadigan kompaniyalar":"Companies that trust us",
//     "Bizning jamoa orasida siz ham bo'lishingiz mumkin va bu juda oson!":"You can be among our team and it's very easy!",
//     "Frontend dasturchi":"Frontend developer",
//     "Biz bilan yuksalmoqchimisiz? Unda keling va bizga kerakligingizni isoblang va ajralmas kuchli jamoaga ega bo'ling!":"Want to climb with us? Then come and show us what you need and get an indispensable strong team!",
//     "Ijtimoiy tarmoqlarda biz bilan bog'laning:":"Connect with us on social media:",
//     "Virtual Group":"Virtual Group",
//     "Produktlar":"Products",
//     "Angular":"Angular",
//     "Foydali linklar":"Useful links",
//     "Narxlash":"Pricing",
//     "Ta'mirlash":"Settings",
//     "Buyurtma":"Orders",
//     "Kontakt":"Contact",
//   },
//   "uz-ru": {
//     "Kompaniya":"Компания",
//     "Xizmatlar":"Услуги",
//     "Portfolio":"Портфолио",
//     "Vakansiya":"Вакансия",
//     "Blog":"Блог",
//     "Tilni tanlash":"Выбор языка",
//     "Biz haqimizda":"Hасчет нас",
//     "Portfolio":"Portfolio",
//     "Qo'ng'iroq":"Вызов",
//     "PORTFOLIO":"ПОРТФОЛИО",
//     "Mobil ilovalar":"Мобильные приложения",
//     "Web-saytlar":"Веб-сайты",
//     "Brending":"брендинг",
//     "Batafsil":"B деталях",
//     "Bizning":"Наш",
//     "Xizmatlarimiz":"Наши услуги",
//     "Web-saytlar":"Веб-сайты",
//     "Hamkorlarimiz":"Наши партнеры",
//     "Bizga ishonadigan kompaniyalar":"Компании, которые нам доверяют",
//     "Bizning jamoa orasida siz ham bo'lishingiz mumkin va bu juda oson!":"Вы можете быть в нашей команде, и это очень просто!",
//     "Frontend dasturchi":"Фронтенд-разработчик",
//     "Biz bilan yuksalmoqchimisiz? Unda keling va bizga kerakligingizni isoblang va ajralmas kuchli jamoaga ega bo'ling!":"Хотите подняться с нами? Тогда приходите и покажите нам, что вам нужно, и соберите незаменимую сильную команду!",
//     "Ijtimoiy tarmoqlarda biz bilan bog'laning:":"Присоединяйтесь к нам в социальных сетях:",
//     "Virtual Group":"Виртуальная группа",
//     "Produktlar":"Товары",
//     "Angular":"Угловой",
//     "Foydali linklar":"Полезные ссылки",
//     "Narxlash":"Цены",
//     "Ta'mirlash":"Ремонт",
//     "Buyurtma":"Заказ",
//     "Kontakt":"Контакт",
//   },
  // "ru-uz": {
  //   "Kurslar":"Courses",
  // },
  // "ru-en": {
  //   "Kurslar":"Courses",
  // },
  // "en-ru": {
  //   "Kurslar":"Courses",
  // }
// };

