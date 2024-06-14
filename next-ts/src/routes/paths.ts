import { paramCase } from 'src/utils/change-case';



const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  HOME: '/',
  SHOP: '/shop',
  USER:'/user'
};

// ----------------------------------------------------------------------

export const paths = {
  addproduct:'/shop/addproduct',
  d:'/dashboard',
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  docs: 'https://taras-partpholio.vercel.app/',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneUI: 'https://mui.com/store/items/zone-landing-page/',
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figma:
    'https://www.figma.com/file/hjxMnGUJCjY7pX8lQbS7kn/%5BPreview%5D-Minimal-Web.v5.4.0?type=design&node-id=0-1&mode=design&t=2fxnS70DuiTLGzND-0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id: string) => `/product/${id}`,
  },
  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
  },


  // AUTH
  shop:{
    hs: `${ROOTS.SHOP}`,
  },
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
  },
  // DASHBOARD
  home: {
    go: ROOTS.SHOP,
    chat: `${ROOTS.SHOP}/chat`,

    user: {
      profile: `${ROOTS.USER}`,
      new: `${ROOTS.USER}/new`,
      list: `${ROOTS.USER}/list`,
      cards: `${ROOTS.USER}/cards`,
      account: `${ROOTS.USER}/account`,
      edit: (id: string) => `${ROOTS.USER}/${id}/edit`,
    },

    product: {
      root: `${ROOTS.SHOP}`,
      new: `${ROOTS.SHOP}/add-product`,
      list: `${ROOTS.SHOP}/list-product`,
      edit: (id: string) => `${ROOTS.SHOP}/product/${id}/edit`,
      demo: {
        details: `${ROOTS.SHOP}/product`,
        edit: `${ROOTS.SHOP}/product/edit`,
      },
    },

  },
};
