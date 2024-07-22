/*=============== SWIPER JS GALLERY ===============*/


  let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 5, //cambiar segun cantidad de fotos
    slidesPerView: 4,
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  