export const SUPPORTED_LOCALES = ['es', 'en'] as const;
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
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
