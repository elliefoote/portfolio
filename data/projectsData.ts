const projectsData = [
  {
    title: 'Portfolio website - Marc Tinent',
    description: `I developed this site for a freelance client who is a professional writer. The purpose of the site is to provide information for both editors and readers of Marc's work. The site is integrated with Instagram's Graph API, and automatically updates when Marc makes a new Instagram post.`,
    imgSrc: '/static/images/marctinent.png',
    techStack: ['GatsbyJS', 'ReactJS', 'GraphQL', 'Bootstrap'],
    liveLink: 'https://www.marctinent.com',
    githubRepo: 'https://github.com/elliefoote/marc-tinent',
  },
  {
    title: 'Homegrown',
    description: `An ecommerce app that allows socially conscious shoppers to connect with local makers and artists. Includes an integration with the Stripe API for secure payments.`,
    imgSrc: '/static/images/homegrown.png',
    techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL'],
    liveLink: 'https://ejf-homegrown.herokuapp.com/',
    githubRepo: 'https://github.com/elliefoote/homegrown-app',
  },
  {
    title: 'E-Manager',
    description: `A CRM app that allows small business owners to manage client details and allocate tasks. Includes authentication and authorization using jsonwebtoken and bcrypt.`,
    imgSrc: '/static/images/emanager.png',
    techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL'],
    liveLink: 'https://ejf-emanager.herokuapp.com/',
    githubRepo: 'https://github.com/elliefoote/e-manager-public',
  },
  {
    title: 'BookSwapper',
    description: `This full-stack app allows users to list their pre-loved books and exchange messages to arrange book swaps. Users can automatically generate cover images through an integration with the Google Books API.`,
    imgSrc: '/static/images/bookswap.png',
    techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MySQL'],
    liveLink: 'https://ejf-book-swapper.herokuapp.com/',
    githubRepo: 'https://github.com/elliefoote/book-swap',
  },
]

export default projectsData
