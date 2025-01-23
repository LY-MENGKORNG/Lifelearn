import { appLogo } from '@/assets'
export const WEB_NAVBAR = {
  LOGO: {
    image: appLogo as string,
    alt: 'LifeLearn',
    link: '/'
  },
  MENU: [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/products',
      label: 'Products',
      children: [
        {
          link: '/products/1',
          label: 'Product 1'
        }
      ]
    }
  ],
}