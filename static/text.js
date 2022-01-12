export const text = {
  one: 'Mac Beagan',
  two: 'Web Developer',
  paragraph: [
    'Munich based web developer allways looking for work.',
    'Originally from Edinburgh, Scotland I have dual Irish British citizenship and grew up on a farm.',
    "You can see what I'm working on in my projects and for any questions or comments please don't hesitate to drop me a line.",
  ],
  paragraphOne:
    "Munich based freelance web developer. Originally from Edinburgh, Scotland I have dual Irish British citizenship and grew up on a farm. You can see what I have worked on in my projects and for any questions or comments please don't hesitate to drop me a line.",
  projects: [
    {
      name: 'Trauma App',
      links: [
        {
          url: 'https://www.thetraumaapp.com/',
          text: 'PromoSite',
          isExt: true,
        },
        {
          url: 'https://apps.apple.com/de/app/the-trauma-app/id1576495091?l=en',
          text: 'AppStore',
          isExt: true,
        },
      ],
      descriptions: [
        {
          heading: 'The Project',
          paragraph:
            'The Trauma App is a React Native app used for managing the treatment of trauma patients in A&E. The project includes a React Native iPad app, an Angular dashboard and an API.',
        },
        {
          heading: 'My Role',
          paragraph:
            'My first task was to write a clinical PDF report generator, it was a great opportunity to work on core JS skills and develop my typescript knowledge. Next up was building out the Angular dashboard which is used to view cases and manage the app users. Aside from a couple cloud functions running Express, the iPad app itself has been my main focus, it is built with React Native and uses Redux for state management.',
        },
      ],
    },
    {
      name: 'Garvald',
      links: [
        {
          url: 'https://garvaldhomefarm.co.uk/',
          text: 'Website',
          isExt: true,
        },
      ],
      descriptions: [
        {
          heading: 'The Project',
          paragraph:
            'Garvald Home Farm is a small community based care home based in the Scottish Borders who asked for help setting up a website and a business email service.',
        },
        {
          heading: 'The Website',
          paragraph:
            'The motivation - to build a website which is both easy to maintain but performant and secure. Using Wordpress as a headless CMS, Astro as a frontend - connecting the two using GraphQL - worked well. The frontend is hosted with Netlify and for the backend I spun up a Digital Ocean Droplet running Ubuntu and Nginx',
        },
      ],
    },
    // {
    //   name: 'visit munich',
    //   links: [
    //     { url: '/visit-munich', text: 'Details', isExt: false },
    //     {
    //       url: 'https://visit-munich.org/',
    //       text: 'Live Site',
    //       isExt: true,
    //     },
    //     {
    //       url: 'https://github.com/cormacbeagan/visit-munich',
    //       text: 'Repo',
    //       isExt: true,
    //     },
    //   ],
    //   descriptions: [
    //     {
    //       heading: 'Motivation',
    //       paragraph:
    //         'For years I have been looking for ways to recommend works of Graffiti to guests of the Hostel where I have been working, it is however not easy to give someone directions to a random motorway bridge over the river...',
    //     },
    //     {
    //       heading: 'Challenges',
    //       paragraph:
    //         'This site gave many learning opportunities - building a site with its own content management, handling state with Redux, getting to grips with JS date objects, routing with React-Router and storing data and photos with firebase to name but a few.',
    //     },
    //   ],
    // },
    {
      name: 'Radio Player',
      links: [
        // { url: '/player', text: 'Details', isExt: false },
        {
          url: 'https://radio-player-5a684.web.app/',
          text: 'Demo',
          isExt: true,
        },
        {
          url: 'https://github.com/cormacbeagan/player',
          text: 'Repo',
          isExt: true,
        },
      ],
      descriptions: [
        {
          heading: 'Motivation',
          paragraph:
            'Fed up with shazaming songs from my favorite radio station in order to add them to Spotify I decided to make an app which does just this. Having completed various course led projects I needed a first project which was mine from conception to completion.',
        },
        {
          heading: 'The Project',
          paragraph:
            'The app play radio 2day and holds a recording of the last 3 seconds. With the music playing a user can check what song is playing - the app sends the clip to the Audd.io music recognition API - which returns the song, artwork is fetched from the spotify API and the user can add the song to a personal playlist logging into Spotify through a popup.',
        },
      ],
    },
  ],
  contact: {
    heading: 'Leave me a message',
    sendButton: 'send',
    clearButton: 'clear',
  },
  stack: {
    heading: 'Tech I love working with',
    main: {
      heading: 'My motivation',
      text: "I've always loved a good website, and truly hated a bad one. There is nothing worse than watching the clock tick while a little circle goes round and round, knawing away at your free time. For me web development is the art of producing websites which not only look good but which are fast, reliable and accessible.",
    },
    js: {
      heading: 'Javascript',
      text: 'ES6 and up',
    },
    html: {
      heading: 'HTML',
      text: 'HTML5!',
    },
    css: {
      heading: 'CSS',
      text: 'CSS3 as well as SCSS, experience with the Tailwind and Bootstrap frameworks and Styled Components',
    },
    react: {
      heading: 'React JS',
      text: '16.8 and up, as well as React Native, and the NextJS framework',
    },
    node: {
      heading: 'Node JS',
      text: 'Node, Express',
    },
    angular: {
      heading: 'Angular',
      text: 'Angular2, RxJs, Material UI',
    },
    typescript: {
      heading: 'TypeScript',
      text: 'With React, React Native and Node',
    },
  },
};
