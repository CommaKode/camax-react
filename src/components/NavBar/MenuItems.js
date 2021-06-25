const MenuItems = [
  {
    title: 'خانه',
    url: '/',
    cName: 'nav-links',
  },

  {
    title: 'تماس با ما',
    url: '/',
    cName: 'nav-links',
  },

  {
    title: 'محصولات',
    url: '/',
    cName: 'nav-links',
    options: [
      {
        title: 'پنل',
        url: '/test1',
      },
      {
        title: 'مونیتور',
        url: '/test2',
      },
    ],
  },

  {
    title: 'خدمات پس از فروش',
    url: '/',
    cName: 'nav-links',
    options: [
      {
        title: 'گارانتی',
        url: '/test2',
      },
      {
        title: 'تعمیرات',
        url: '/test2',
      },
    ],
  },

  {
    title: 'روشنایی',
    url: '/',
    cName: 'nav-links',
  },
];

export default MenuItems;
