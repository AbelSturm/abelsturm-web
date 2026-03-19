export const SUPPORTED_LOCALES = ['es', 'en', 'ca', 'de'] as const;
export type Lang = (typeof SUPPORTED_LOCALES)[number];

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.adventures': 'Aventuras',

    'home.tagline': 'Building things by day, climbing things by night',
    'home.subtitle': 'Desarrollador y aventurero en Girona',
    'home.featured_projects': 'Proyectos destacados',
    'home.featured_adventures': 'Aventuras',
    'home.see_all_projects': 'Ver todos los proyectos →',
    'home.see_all_adventures': 'Ver todas las aventuras →',
    'home.stack_heading': 'Tecnologías',
    'home.hobbies_heading': 'Fuera del teclado',

    'projects.title': 'Proyectos',
    'projects.personal': 'Personal',
    'projects.work': 'Trabajo',
    'projects.status_paused': 'En pausa',
    'projects.github': 'GitHub',
    'projects.live': 'Ver en vivo',

    'about.title': 'Sobre mí',
    'about.subtitle': 'Desarrollador y aventurero',
    'about.intro':
      'Tengo 22 años y vivo en el área de Lloret de Mar, Girona. Trabajo en B4Experience, donde me encargo del desarrollo web frontend y backend, y construyo automatizaciones e integraciones con herramientas como Odoo y n8n.',
    'about.stack': 'Stack habitual: Next.js, Supabase, TypeScript y n8n.',
    'about.side_heading': 'Fuera del teclado',
    'about.side':
      'Escalo bloques con el objetivo de llegar al 8A. Conduzco una Honda CBR250R y una Honda CB600F. Tengo el Mont Blanc en el radar. El destino pendiente: Japón.',

    'adventures.title': 'Aventuras',
    'adventures.subtitle': 'Escalada, motos y montaña',
    'adventures.cat.climbing': 'Escalada',
    'adventures.cat.motorcycle': 'Moto',
    'adventures.cat.mountains': 'Montaña',

    'lang.switch_label': 'English',
    'lang.switch_locale': 'en',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.adventures': 'Adventures',

    'home.tagline': 'Building things by day, climbing things by night',
    'home.subtitle': 'Developer & adventurer based in Girona',
    'home.featured_projects': 'Featured projects',
    'home.featured_adventures': 'Adventures',
    'home.see_all_projects': 'All projects →',
    'home.see_all_adventures': 'All adventures →',
    'home.stack_heading': 'Technologies',
    'home.hobbies_heading': 'Outside the keyboard',

    'projects.title': 'Projects',
    'projects.personal': 'Personal',
    'projects.work': 'Work',
    'projects.status_paused': 'Paused',
    'projects.github': 'GitHub',
    'projects.live': 'Live',

    'about.title': 'About',
    'about.subtitle': 'Developer & adventurer',
    'about.intro':
      "I'm 22 years old, based in the Lloret de Mar area, Girona. I work at B4Experience, building web apps and automations and integrations with tools like Odoo and n8n.",
    'about.stack': 'Usual stack: Next.js, Supabase, TypeScript, n8n.',
    'about.side_heading': 'Outside the keyboard',
    'about.side':
      'I boulder with a goal of 8A. I ride a Honda CBR250R and a Honda CB600F. Mont Blanc is on my list. Top travel destination: Japan.',

    'adventures.title': 'Adventures',
    'adventures.subtitle': 'Climbing, motorcycles & mountains',
    'adventures.cat.climbing': 'Climbing',
    'adventures.cat.motorcycle': 'Motorcycle',
    'adventures.cat.mountains': 'Mountains',

    'lang.switch_label': 'Español',
    'lang.switch_locale': 'es',
  },
  ca: {
    'nav.home': 'Inici',
    'nav.projects': 'Projectes',
    'nav.about': 'Sobre mi',
    'nav.adventures': 'Aventures',

    'home.tagline': 'Building things by day, climbing things by night',
    'home.subtitle': 'Desenvolupador i aventurer a Girona',
    'home.featured_projects': 'Projectes destacats',
    'home.featured_adventures': 'Aventures',
    'home.see_all_projects': 'Veure tots els projectes →',
    'home.see_all_adventures': 'Veure totes les aventures →',
    'home.stack_heading': 'Tecnologies',
    'home.hobbies_heading': 'Fora del teclat',

    'projects.title': 'Projectes',
    'projects.personal': 'Personal',
    'projects.work': 'Feina',
    'projects.status_paused': 'En pausa',
    'projects.github': 'GitHub',
    'projects.live': 'Veure en viu',

    'about.title': 'Sobre mi',
    'about.subtitle': 'Desenvolupador i aventurer',
    'about.intro':
      "Tinc 22 anys i visc a la zona de Lloret de Mar, Girona. Treballo a B4Experience, on m'encarrego del desenvolupament web frontend i backend, i construeixo automatitzacions i integracions amb eines com Odoo i n8n.",
    'about.stack': 'Stack habitual: Next.js, Supabase, TypeScript i n8n.',
    'about.side_heading': 'Fora del teclat',
    'about.side':
      "Faig escalada en bloc amb l'objectiu d'arribar a l'8A. Condueixo una Honda CBR250R i una Honda CB600F. Tinc el Mont Blanc al radar. La destinació pendent: el Japó.",

    'adventures.title': 'Aventures',
    'adventures.subtitle': 'Escalada, motos i muntanya',
    'adventures.cat.climbing': 'Escalada',
    'adventures.cat.motorcycle': 'Moto',
    'adventures.cat.mountains': 'Muntanya',

    'lang.switch_label': 'English',
    'lang.switch_locale': 'en',
  },
  de: {
    'nav.home': 'Start',
    'nav.projects': 'Projekte',
    'nav.about': 'Über mich',
    'nav.adventures': 'Abenteuer',

    'home.tagline': 'Building things by day, climbing things by night',
    'home.subtitle': 'Entwickler & Abenteurer in Girona',
    'home.featured_projects': 'Ausgewählte Projekte',
    'home.featured_adventures': 'Abenteuer',
    'home.see_all_projects': 'Alle Projekte →',
    'home.see_all_adventures': 'Alle Abenteuer →',
    'home.stack_heading': 'Technologien',
    'home.hobbies_heading': 'Abseits der Tastatur',

    'projects.title': 'Projekte',
    'projects.personal': 'Persönlich',
    'projects.work': 'Arbeit',
    'projects.status_paused': 'Pausiert',
    'projects.github': 'GitHub',
    'projects.live': 'Live ansehen',

    'about.title': 'Über mich',
    'about.subtitle': 'Entwickler & Abenteurer',
    'about.intro':
      'Ich bin 22 Jahre alt und lebe in der Gegend von Lloret de Mar, Girona. Ich arbeite bei B4Experience, wo ich für die Frontend- und Backend-Webentwicklung zuständig bin und Automatisierungen und Integrationen mit Tools wie Odoo und n8n aufbaue.',
    'about.stack': 'Üblicher Stack: Next.js, Supabase, TypeScript und n8n.',
    'about.side_heading': 'Abseits der Tastatur',
    'about.side':
      'Ich bouldere mit dem Ziel, 8A zu klettern. Ich fahre eine Honda CBR250R und eine Honda CB600F. Der Mont Blanc steht auf meiner Liste. Nächstes Reiseziel: Japan.',

    'adventures.title': 'Abenteuer',
    'adventures.subtitle': 'Klettern, Motorräder & Berge',
    'adventures.cat.climbing': 'Klettern',
    'adventures.cat.motorcycle': 'Motorrad',
    'adventures.cat.mountains': 'Berge',

    'lang.switch_label': 'English',
    'lang.switch_locale': 'en',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
