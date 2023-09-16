

$(document).ready(function(){  
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
      appendDots:'.slider-dots',
      dotsClass: 'dots',
      pauseOnHover: false
  });

  let hamburger = document.querySelector('.hamburger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let work = document.querySelectorAll('.list a');

  hamburger.addEventListener('click', function(e) {
    mobileNav.classList.add('open');
  })

  times.addEventListener('click', function(e) {
    mobileNav.classList.remove('open');
  })

  for (i = 0; i < work.length; i++) {
  work[i].addEventListener('click', function(e) {
    mobileNav.classList.remove('open');
  })
}

});



$(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });

 
  

      function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "vasisthkrish@gmail.com",
      Password: "eiekorgsqjuxkhag",
      To: 'vasisthkrish92@gmail.com',
      From: "vasisthkrish92gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }
