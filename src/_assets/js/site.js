
$(document).ready(function () {
    console.log("lessgo!");

    $('.secondary-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      fade: true,
      wrapAround: true,
      draggable: false,
      imagesLoaded: true,
      lazyLoad: true,
      autoPlay: 3000
    });

    //animate eyebrow

    $('.home .eyebrow').slideToggle();
    //toggle subnav
    $("#about").hover(function () {
      $(".subnav").toggleClass("active");
    });

  });