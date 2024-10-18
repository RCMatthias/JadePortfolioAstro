import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Illustraties en kaarten op maat',
      links: [
        {
          text: 'Geboortekaartjes',
          href: getPermalink('/#features'),
        },
        {
          text: 'Trouwkaarten',
          href: getPermalink('/services'),
        },
        {
          text: 'Prijzen',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'Contact & info',
      href: getBlogPermalink('/contact')
    },
    {
      text: 'Shop',
      href: getBlogPermalink('/shop)'),
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Collecties',
      links: [
        { text: 'Geboortekaartjes jongens', href: '#' },
        { text: 'Geboortekaartjes meisjes', href: '#' },
        { text: 'Zelf maken', href: '#' },
        { text: 'Trouwkaarten', href: '#' },
        { text: 'Save the dates', href: '#' },
        { text: 'Extra', href: '#' },
      ],
    },
    {
      title: 'FOLLOW ME',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'Pinterest', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'Nieuwsbrief', href: '#' },
      ],
    },
    {
      title: 'Informatie',
      links: [
        { text: 'Bestel uitleg', href: '#' },
        { text: 'Ontwerp tips', href: '#' },
        { text: 'Foliedruk', href: '#' },
        { text: 'Prijzen', href: '#' },
        { text: 'Proefdruk', href: '#' },
        { text: 'Enveloppen', href: '#' },
        { text: 'Geboortegedichtjes', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
