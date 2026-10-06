import type { IconType } from 'react-icons';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAngular, SiCss, SiHtml5, SiJavascript, SiTypescript } from 'react-icons/si';

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  links: ProjectLink[];
  sections: ProjectSection[];
};

export type Tech = {
  name: string;
  detail: string;
  icon: IconType;
  /** Brand colour used for hover/active accents. */
  color: string;
};

export type Social = {
  label: string;
  url: string;
};

export const profile = {
  name: 'Mac Beagan',
  role: 'Web Developer',
  email: 'cor@macbeagan.me',
  url: 'https://macbeagan.me',
  intro:
    "Munich based freelance web developer. Originally from Edinburgh, Scotland, I have dual Irish–British citizenship and grew up on a farm. You can see what I've worked on in my projects, and for any questions or comments please don't hesitate to drop me a line.",
};

export const projects: Project[] = [
  {
    slug: 'trauma-app',
    name: 'Trauma App',
    links: [
      { label: 'Promo site', url: 'https://thetraumaapp.com/' },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/de/app/the-trauma-app/id1576495091?l=en',
      },
    ],
    sections: [
      {
        heading: 'The Project',
        body: 'The Trauma App is a React Native app used for managing the treatment of trauma patients in A&E. The project includes a React Native iPad app, an Angular dashboard and an API.',
      },
      {
        heading: 'My Role',
        body: 'My first task was to write a clinical PDF report generator, a great opportunity to work on core JS skills and develop my TypeScript knowledge. Next up was building out the Angular dashboard, which is used to view cases and manage the app users. Aside from a couple of cloud functions running Express, the iPad app itself has been my main focus. It is built with React Native and uses Redux for state management.',
      },
    ],
  },
  {
    slug: 'garvald',
    name: 'Garvald',
    links: [{ label: 'Website', url: 'https://garvaldhomefarm.co.uk/' }],
    sections: [
      {
        heading: 'The Project',
        body: 'Garvald Home Farm is a small community-based care home in the Scottish Borders who asked for help setting up a website and a business email service.',
      },
      {
        heading: 'The Website',
        body: 'The motivation: build a website which is both easy to maintain and performant and secure. Using WordPress as a headless CMS and Astro as a frontend, connecting the two using GraphQL, worked well. The frontend is hosted with Netlify, and for the backend I spun up a Digital Ocean Droplet running Ubuntu and Nginx.',
      },
    ],
  },
  {
    slug: 'radio-player',
    name: 'Radio Player',
    links: [
      { label: 'Demo', url: 'https://radio-player-5a684.web.app/' },
      { label: 'Repo', url: 'https://github.com/cormacbeagan/player' },
    ],
    sections: [
      {
        heading: 'Motivation',
        body: 'Fed up with Shazaming songs from my favourite radio station in order to add them to Spotify, I decided to make an app which does just this. Having completed various course-led projects, I needed a first project which was mine from conception to completion.',
      },
      {
        heading: 'The Project',
        body: 'The app plays Radio 2Day and holds a recording of the last 3 seconds. With the music playing, a user can check what song is on: the app sends the clip to the Audd.io music recognition API, which returns the song, artwork is fetched from the Spotify API, and the user can add the song to a personal playlist by logging into Spotify through a popup.',
      },
    ],
  },
];

export const stack = {
  heading: 'Tech I love working with',
  motivation:
    "I've always loved a good website, and truly hated a bad one. There is nothing worse than watching the clock tick while a little circle goes round and round, gnawing away at your free time. For me, web development is the art of producing websites which not only look good but are fast, reliable and accessible.",
  tech: [
    {
      name: 'TypeScript',
      detail: 'With React, React Native and Node',
      icon: SiTypescript,
      color: '#3178c6',
    },
    {
      name: 'JavaScript',
      detail: 'ES6 and up',
      icon: SiJavascript,
      color: '#f7df1e',
    },
    {
      name: 'React',
      detail: 'React, React Native and the Next.js framework',
      icon: FaReact,
      color: '#5ad7f1',
    },
    {
      name: 'Node.js',
      detail: 'Node and Express',
      icon: FaNodeJs,
      color: '#4fa94d',
    },
    {
      name: 'Angular',
      detail: 'Angular, RxJS and Angular Material',
      icon: SiAngular,
      color: '#de3f33',
    },
    {
      name: 'HTML',
      detail: 'Semantic, accessible HTML5',
      icon: SiHtml5,
      color: '#e34c26',
    },
    {
      name: 'CSS',
      detail: 'Modern CSS and SCSS, plus Tailwind, Bootstrap and Styled Components',
      icon: SiCss,
      color: '#2864f1',
    },
  ] satisfies Tech[],
};

export const socials: Social[] = [
  { label: 'GitHub', url: 'https://github.com/cormacbeagan' },
  { label: 'Instagram', url: 'https://www.instagram.com/macbeagan/' },
  { label: 'X / Twitter', url: 'https://twitter.com/MacBeagan' },
];

export const themes = ['light', 'dark', 'blue', 'rainbow', 'wild'] as const;
export type ThemeName = (typeof themes)[number];
export const THEME_STORAGE_KEY = 'theme';
