export type Locale = 'en' | 'de';

export const getBrowserLocale = (): Locale => {
  const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
  return browserLanguage.toLowerCase().startsWith('de') ? 'de' : 'en';
};

export const copy = {
  nav: {
    home: { en: 'Home', de: 'Start' },
    projects: { en: 'Projects', de: 'Projekte' },
    contact: { en: 'Contact', de: 'Kontakt' },
    build: { en: "Let's build", de: 'Lass uns bauen' },
    portfolio: { en: 'portfolio', de: 'portfolio' },
    homeAria: { en: 'M0x37 Portfolio home', de: 'M0x37 Portfolio-Startseite' },
  },
  hero: {
    eyebrow: { en: 'Web developer · Germany', de: 'Webentwickler · Deutschland' },
    headline: { en: 'I turn ideas into', de: 'Ich verwandle Ideen in' },
    highlight: { en: 'useful things.', de: 'nützliche Dinge.' },
    copy: {
      en: "I'm Max, a web developer and hobby electronics enthusiast. I enjoy turning small ideas into useful digital experiences and working prototypes.",
      de: 'Ich bin Max, Webentwickler und Hobby-Elektroingenieur. Ich liebe es, kleine Ideen in nützliche digitale Erfahrungen und funktionierende Prototypen zu verwandeln.',
    },
    primary: { en: 'Explore projects', de: 'Projekte ansehen' },
    secondary: { en: 'Get in touch', de: 'Kontakt aufnehmen' },
  },
  about: {
    eyebrow: { en: 'About me', de: 'Über mich' },
    heading: { en: 'A maker at heart.', de: 'Ein Maker mit Herz.' },
    intro: {
      en: 'I enjoy building clear interfaces, useful tools and small experiments that bring ideas to life.',
      de: 'Ich baue gerne klare Interfaces, nützliche Tools und kleine Experimente, die Ideen zum Leben erwecken.',
    },
    quote: {
      en: '“The best part is seeing a rough idea become something people can actually use.”',
      de: '„Der schönste Moment ist, wenn aus einer groben Idee etwas wird, das Menschen wirklich nutzen können.“',
    },
    bio: {
      en: "I'm a 14-year-old web developer and hobby electronics engineer based in Germany. Most of my time goes into building with React and Python, exploring new tools and learning by making things from scratch.",
      de: 'Ich bin 14 Jahre alt und arbeite als Webentwickler und Hobby-Elektroingenieur in Deutschland. Die meiste Zeit verbringe ich mit React und Python, entdecke neue Tools und lerne dabei jeden Tag durch eigenes Bauen von Grund auf.',
    },
    quickFacts: { en: 'Quick facts', de: 'Kurzinfos' },
    age: { en: 'Age', de: 'Alter' },
    basedIn: { en: 'Based in', de: 'Wohnort' },
    focus: { en: 'Focus', de: 'Schwerpunkt' },
    building: { en: 'Also building', de: 'Baue außerdem' },
    germany: { en: 'Germany', de: 'Deutschland' },
    focusValue: { en: 'React & Python', de: 'React & Python' },
    hardware: { en: 'Hardware projects', de: 'Hardware-Projekte' },
  },
  skills: {
    eyebrow: { en: 'Toolkit', de: 'Werkzeugkasten' },
    heading: { en: 'What I use to make things.', de: 'Was ich verwende, um Dinge zu bauen.' },
    intro: {
      en: 'The tools I reach for when I design interfaces, script ideas and bring digital and physical projects together.',
      de: 'Die Tools, die ich nutze, wenn ich Interfaces gestalte, Ideen umsetze und digitale sowie physische Projekte zusammenbringe.',
    },
    currentlyLearning: { en: 'Currently learning', de: 'Aktuell lerne ich' },
    skillNames: {
      react: { en: 'React', de: 'React' },
      python: { en: 'Python', de: 'Python' },
      htmlCss: { en: 'HTML / CSS', de: 'HTML / CSS' },
      github: { en: 'GitHub', de: 'GitHub' },
      linux: { en: 'Arch / Kali Linux', de: 'Arch / Kali Linux' },
      hardware: { en: 'Raspberry Pi / ESP32', de: 'Raspberry Pi / ESP32' },
    },
    descriptions: {
      react: { en: 'Frontend Framework', de: 'Frontend-Framework' },
      python: { en: 'Backend & scripts', de: 'Backend & Skripte' },
      htmlCss: { en: 'Core web tech', de: 'Grundlagen für das Web' },
      github: { en: 'Version control', de: 'Versionskontrolle' },
      linux: { en: 'Daily driver / security tooling', de: 'Täglicher Einsatz / Security-Tools' },
      hardware: { en: 'Homelab / hardware projects', de: 'Homelab / Hardware-Projekte' },
    },
  },
  contact: {
    eyebrow: { en: 'Contact', de: 'Kontakt' },
    heading: { en: 'Let\'s make something useful.', de: 'Lass uns etwas Nützliches bauen.' },
    copy: {
      en: 'Got an idea, a project or just want to say hello? Feel free to reach out or find me through one of the links below.',
      de: 'Hast du eine Idee, ein Projekt oder willst einfach nur Hallo sagen? Dann schreib mir gern oder finde mich über einen der Links unten.',
    },
    email: { en: 'Email', de: 'E-Mail' },
    location: { en: 'Location', de: 'Standort' },
    socialsAria: { en: 'Social profiles', de: 'Soziale Profile' },
  },
  projects: {
    eyebrow: { en: 'Selected work', de: 'Ausgewählte Arbeiten' },
    heading: { en: 'Projects made to be used.', de: 'Projekte zum Nutzen.' },
    intro: {
      en: 'A selection of software and hardware projects I use to explore ideas, learn by building and improve along the way.',
      de: 'Eine Auswahl an Software- und Hardware-Projekten, mit denen ich Ideen erforsche, durch Bauen lerne und mich kontinuierlich weiterentwickle.',
    },
    project: {
      tempbox: {
        description: {
          en: 'A low-budget temperature monitor for my room, paired with a companion Android app.',
          de: 'Ein günstiger Temperaturmonitor für meinen Raum, ergänzt durch eine begleitende Android-App.',
        },
      },
      robot: {
        description: {
          en: 'A programmable robot arm I built as a hands-on portfolio project.',
          de: 'Ein programmierbarer Roboterarm, den ich als praktisches Portfolio-Projekt gebaut habe.',
        },
      },
      runna: {
        description: {
          en: 'Runna, create routes for your next run.',
          de: 'Runna – erstelle Strecken für deinen nächsten Lauf.',
        },
      },
    },
    viewProject: { en: 'View project', de: 'Projekt ansehen' },
    inProgress: { en: 'Currently in progress', de: 'Derzeit in Arbeit' },
  },
  footer: {
    impressum: { en: 'Impressum', de: 'Impressum' },
    github: { en: 'GitHub', de: 'GitHub' },
    built: { en: 'Built with curiosity.', de: 'Mit Neugier gebaut.' },
  },
};
