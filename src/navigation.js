import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
      text: 'About',
      href: getPermalink('/about')
    },
    {
      text: 'Blog',
      href: getPermalink('/blog')
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Featured',
          href: getPermalink('/featured'),
        }
      ]
    }
  ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Leppy-oss' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-full" src="/pfp.jpg" alt="onWidget logo" loading="lazy"></img>
    Made with ❤️ by <a class="text-blue-600 underline dark:text-muted" target="_blank" href="https://github.com/Leppy-oss/"> Leppy-oss</a>. ©2024.
  `,
};
