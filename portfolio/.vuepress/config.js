const config = require('../config.json');
module.exports = {
  lang: 'en-UK',
  title: config.title,
  description: config.description,
  base: "/",
  ga: 'UA-127022296-1',
  serviceWorker: true,
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
