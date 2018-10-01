module.exports = {
  title: "Joe Johnston - Belfast's Leading Digital Marketing Consultant",
  description: "ROI focused digital Marketing Consultant, Joe Johnston. SEO and Web Design Freelancer covering Belfast and Northern Ireland",
  base: "/",
  themeConfig: {
    logo: "/upload/logo.svg",
    footer: "Ⓒ Joe Johnston",
    nav: [
      { text: "Works", link: "/", position: "left", external: false },
      { text: "Instagram", link: "https://www.instagram.com/joejohnston1989/", position: "left", external: true },
      { text: "Say hi!", link: "mailto:hi@digijo.co.uk", position: "right", external: true },
      { text: 'Journal', link: '/journal/', position: 'right', external: false },
    ]
  },
  head: [
    ['link', { rel: "icon", href: "favicon-32x32.png" }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
