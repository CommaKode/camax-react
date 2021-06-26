const MenuItems = [
  {
    title: 'خانه',
    url: '/',
  },

  {
    title: 'تماس با ما',
    url: '/',
  },

  {
    title: 'محصولات',
    url: '/',
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
  },
];

export default MenuItems;
