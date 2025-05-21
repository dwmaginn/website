import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Products', href: getPermalink('/products') },
    { text: 'Customers', href: getPermalink('/customers') },
    { text: 'About Us', href: getPermalink('/about') },
  ],
  actions: [{ text: 'Order Now', href: getPermalink('/products') }],
};

export const footerData = {
  links: [
    {
      title: 'Satispie',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Products', href: getPermalink('/products') },
        { text: 'Customers', href: getPermalink('/customers') },
        { text: 'About Us', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: '© Satispie',
};
