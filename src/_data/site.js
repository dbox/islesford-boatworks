module.exports = {
  isProduction: process.env.ELEVENTY_ENV === 'dev',
  title: 'Islesford Boatworks',
  description: 'A non-profit community-based summer boatbuilding program for children ages 7 to 97 years young situated on Little Cranberry Island, Maine.',
  url: 'https://www.islesfordboatowrks.com',
  author: 'Islesford Boatworks',
  meta: {
    default_social_image: '/static/images/social-image.jpg',
    facebook: 'https://www.facebook.com/Islesford.Boatworks'
    // twitter: '@therealkni',
  },
  currentYear: new Date().getFullYear(),
}