import type { IconType } from 'react-icons';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiAngular, SiExpo, SiFirebase, SiJavascript, SiTypescript } from 'react-icons/si';

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
  tags: string[];
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
  role: 'Senior Software Engineer',
  location: 'Munich',
  status: 'Open to full-time roles',
  email: 'cor@macbeagan.me',
  url: 'https://macbeagan.me',
  intro:
    'I build React and React Native apps for healthcare: software that clinicians rely on in NHS hospitals. Since 2021 I’ve been the engineer behind The Trauma App, used in emergency departments across Scotland, and I’m a founding engineer on Daysix Health. I’m self-taught, have freelanced since 2021, and am happiest working directly with the people who use what I build. Originally from Edinburgh, I grew up on a farm and now live in Munich.',
};

export const projects: Project[] = [
  {
    slug: 'trauma-app',
    name: 'The Trauma App',
    tags: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'SignalR', 'Angular'],
    links: [
      { label: 'Website', url: 'https://thetraumaapp.com/' },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/de/app/the-trauma-app/id1576495091?l=en',
      },
    ],
    sections: [
      {
        heading: 'The Project',
        body: 'An iPad app for recording major trauma cases in real time, from pre-alert to handover. It is used in emergency departments across NHS Scotland and at Alder Hey Children’s Hospital, and won Pitchfest at Digital Health Rewired.',
      },
      {
        heading: 'My Role',
        body: 'I’ve built and maintained the app since it went live in 2021, and since 2025 I’ve been its only app engineer, moving it to Expo and React 19. I work directly with clinicians to turn how they work into features, like the drag-and-drop trauma team screen. I also built the Angular and Power BI dashboards and took the app through NHS clinical safety assurance.',
      },
    ],
  },
  {
    slug: 'daysix-health',
    name: 'Daysix Health',
    tags: ['FHIR R4', 'React', 'React Native', 'TypeScript', 'Medplum', 'Turborepo'],
    links: [],
    sections: [
      {
        heading: 'The Project',
        body: 'A supported self-management platform connecting community clinical teams with the people they care for. It is built for NHS Scotland and third-sector care providers, on FHIR, the healthcare data standard.',
      },
      {
        heading: 'My Role',
        body: 'I’m a founding engineer and the top contributor. I designed the platform’s role-based access control and integrated ScotAccount, the Scottish Government’s digital identity service. I also built the AI-assisted delivery process the team uses, from design through clinical safety review.',
      },
    ],
  },
  {
    slug: 'mycare-scot',
    name: 'MyCare.scot',
    tags: ['Expo', 'React Native', 'TypeScript', 'Express'],
    links: [{ label: 'Website', url: 'https://mycare.scot/' }],
    sections: [
      {
        heading: 'The Project',
        body: 'Scotland’s “digital front door”: a public app giving people access to their health and social care records.',
      },
      {
        heading: 'My Role',
        body: 'I was lead mobile developer on a six-month build, working embedded with the NHS Scotland digital team. I also built the Express server that handles authentication for the app.',
      },
    ],
  },
  {
    slug: 'scribepro',
    name: 'ScribePro',
    tags: ['Expo', 'React', 'Firebase', 'Turborepo', 'Storybook'],
    links: [{ label: 'Website', url: 'https://scribepro.co/' }],
    sections: [
      {
        heading: 'The Project',
        body: 'Injury, medical and wellbeing records for professional sports teams, with a mobile app for clinicians and coaches plus web apps for coaches, athletes and analytics.',
      },
      {
        heading: 'My Role',
        body: 'As senior engineer I led the move from bare React Native to Expo, including custom config plugins and a native module. I built clinical features such as injury forms, summaries and medical exports, and shared components across mobile and web.',
      },
    ],
  },
  {
    slug: 'refswatch',
    name: 'RefsWatch',
    tags: ['SwiftUI', 'Expo', 'Firebase', 'Raspberry Pi', 'Redux Toolkit'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/refswatch-dev/id6463956529' },
    ],
    sections: [
      {
        heading: 'The Project',
        body: 'My side project: rugby match management. The referee runs the match from an Apple Watch or iPhone, and a pitchside scoreboard, a results site and an admin portal update live.',
      },
      {
        heading: 'My Role',
        body: 'I built all of it: a SwiftUI watch app linked to the Expo phone app through a custom native module, a Raspberry Pi scoreboard running on 4G, and a Firebase backend. My rugby club uses it on match days.',
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
      detail: 'React 19 and the Next.js framework',
      icon: FaReact,
      color: '#5ad7f1',
    },
    {
      name: 'React Native',
      detail: 'Expo, EAS, offline-first apps and custom native modules',
      icon: TbBrandReactNative,
      color: '#61dafb',
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
      name: 'Expo',
      detail: 'EAS builds and updates, config plugins and native modules',
      icon: SiExpo,
      color: '#4630eb',
    },
    {
      name: 'Firebase',
      detail: 'Firestore, Realtime Database, Auth and Cloud Functions',
      icon: SiFirebase,
      color: '#ffca28',
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
