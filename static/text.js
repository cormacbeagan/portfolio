export const text = {
  one: 'Mac Beagan',
  two: 'Web Developer',
  paragraph: [
    'Munich based web developer looking for my first professional experience. I build websites using React and co.',
    'Originally from Edinburgh, Scotland I have dual Irish British citizenship and grew up on a farm.',
    "You can see what I'm working on in my projects and for any questions or comments please don't hesitate to drop me a line.",
  ],
  paragraphOne:
    "Munich based web developer looking for my first professional experience. I build websites using React and co. Originally from Edinburgh, Scotland I have dual Irish British citizenship and grew up on a farm. You can see what I'm working on in my projects and for any questions or comments please don't hesitate to drop me a line.",
  projects: [
    {
      name: 'visit munich',
      links: [
        { url: '/visit-munich', text: 'Details', isExt: false },
        {
          url: 'https://visit-munich.web.app/',
          text: 'Live Site',
          isExt: true,
        },
        {
          url: 'https://github.com/cormacbeagan/visit-munich',
          text: 'Repo',
          isExt: true,
        },
      ],
      descriptions: [
        {
          heading: 'Motivation',
          paragraph:
            'For years I have been looking for ways to recommend works of Graffiti to guests of the Hostel where I have been working, it is however not easy to give someone directions to a random motorway bridge over the river...',
        },
        {
          heading: 'Challenges',
          paragraph:
            'This site gave many learning opportunities - building a site with its own content management, handling state with Redux, getting to grips with JS date objects, routing with React-Router and storing data and photos with firebase to name but a few.',
        },
      ],
    },
    {
      name: 'radio player',
      links: [
        { url: '/player', text: 'Details', isExt: false },
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
            'Fed up with shazaming songs from my favorite radio station in order to add them to Spotify I decided to make an app which does just this.',
        },
        {
          heading: 'Challenges',
          paragraph:
            'As my first react app creating this project posed many challenges. From getting the Web Audio API to work across browsers, querying an API with bit chunks all the way to presenting data in a meaningfull manner and adding keyboard controls for ease of use. ',
        },
      ],
    },
    {
      name: 'neg-o-meter',
      links: [
        {
          url: 'https://devpost.com/software/wellnews',
          text: 'Devpost',
          isExt: true,
        },
        {
          url: 'https://github.com/cormacbeagan/MHLWellnessHackathon',
          text: 'Repo',
          isExt: true,
        },
      ],
      descriptions: [
        {
          heading: 'Motivation',
          paragraph:
            "The news media has a significant impact on stress and wellbeing. For the 'Hack and Wellness' hackathon we built a chrome extension which allows the user to interact with and quantify the negative content they consume.",
        },
        {
          heading: 'Challenges',
          paragraph:
            'As my first team project taking full advantage of Git and GitHub was a great learning experience. The other challenges were configuring Webpack, creating and presenting data analysis in a purely client side setup as well as working to a tight deadline - the hackathon lasted 48hrs',
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
      text:
        "I've always loved a good website, and truly hated a bad one. There is nothing worse than watching the clock tick while a little circle goes round and round, knawing away at your free time. For me web development is clearly the art of producing websites which not only look good but which are fast reliable and accessible.",
    },
    js: {
      heading: 'Javascript',
      text:
        "Because vanilla is the best flavour. Having worked with JS for over a year now with numerous small projects and various courses I feel confident of achieving what I set out to create when I'm in JS land. ",
    },
    html: {
      heading: 'HTML',
      text:
        'As the basis of all access to websites, good foundational HTML skills are essential to my toolkit.',
    },
    css: {
      heading: 'CSS',
      text:
        'Having completed the Codecademy pro full stack web developer course and numerous projects I have a good basic knowledge of CSS3. Although I have to admit I find whole new CSS concepts to wrap my head around every day.',
    },
    react: {
      heading: 'React JS',
      text: `With a number of courses (pro Codecademy Web Development, the Odinproject and Wes Bos' Full-Stack Advanced-React), giving me the skills to start building I have truly learned the joy and satisfaction of building things with code through working with React. For an assessment of my skills please refer to the source code for this site, my radio player or my travelers tips site.`,
    },
    node: {
      heading: 'Node JS',
      text:
        'Although I have not yet built a backend from scratch for one of my projects, Codecademy covered node and express quite extensively in their pro Fullstack course and I feel confident I have basics, enough to start building and continue the learning process.',
    },
    next: {
      heading: 'Next JS',
      text:
        'My introduction to next has been building this site, which has been fun. The site is server rendered, uses node serverless functions for sending emails. I look forward to taking advantage of the slick routing when I add separate static pages for the projects, ',
    },
    firebase: {
      heading: 'Firebase',
      text:
        'Firebase is great resource, I have made use of it extensively in my travel tips website -  authorisation, firestore, storage and hosting.',
    },
    styled: {
      heading: 'Styled Components',
      text:
        'Discovering Styled Components was a eureka moment, this site is styled exclusively with styled components and I look forward to developing my personal library of components in the coming months.',
    },
  },
};
