const Flickity = require('flickity')
require('flickity-fade')

var mainSlider = new Flickity('.main-carousel', {
  cellAlign: 'left',
  contain: true,
  fade: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoplayOnHover: false,
  draggable: false,
  imagesLoaded: true,
  lazyLoad: true,
  autoPlay: 3000,
  pageDots: true,
})

// var secondarySlider = new Flickity('.secondary-carousel', {
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
//   autoPlay: true,
//   pauseAutoplayOnHover: false,
//   draggable: false,
//   imagesLoaded: true,
//   lazyLoad: true,
//   autoPlay: 3000,
//   pageDots: true,
// })
