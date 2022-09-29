const pages = [
  {
    output: './index.html',
    content: {
      title: 'Home',
      description: 'Home Page',
    },
    template: './src/resources/views/pages/home.hbs',
  },
  {
    output: './gioi-thieu/index.html',
    content: {
      title: 'Về chúng tôi',
      description: 'About Page',
    },
    template: './src/resources/views/pages/gioi-thieu.hbs',
  },
  {
    output: './tin-tuc/index.html',
    content: {
      title: 'Tin tức',
      description: 'News Page',
    },
    template: './src/resources/views/pages/tin-tuc.hbs',
  },
  {
    output: './dich-vu/index.html',
    content: {
      title: 'Dịch vụ',
      description: 'Service Page',
    },
    template: './src/resources/views/pages/dich-vu.hbs',
  },
  {
    output: './lien-he/index.html',
    content: {
      title: 'Liên hệ',
      description: 'Contact Page',
    },
    template: './src/resources/views/pages/lien-he.hbs',
  },
]

module.exports = pages
