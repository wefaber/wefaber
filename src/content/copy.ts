// Explicit extension: this module is also read by vite.config.ts, which is
// type-checked under nodenext resolution.
import { site } from '../config/site.ts'

export type Language = 'en' | 'es'

export interface Block {
  readonly title: string
  readonly body: string
}

export interface Copy {
  readonly meta: {
    readonly title: string
    readonly description: string
    readonly ogLocale: string
  }
  readonly nav: {
    readonly links: readonly { readonly href: string; readonly label: string }[]
    readonly contact: string
    readonly switchTo: string
    readonly switchToLabel: string
    readonly skipToContent: string
  }
  readonly hero: {
    readonly eyebrow: string
    readonly headlineLead: string
    readonly headlineRest: string
    readonly subline: string
    readonly ctaPrimary: string
    readonly ctaSecondary: string
    readonly location: string
  }
  readonly whatWeDo: {
    readonly index: string
    readonly kicker: string
    readonly heading: string
    readonly intro: string
    readonly blocks: readonly Block[]
  }
  readonly theName: {
    readonly index: string
    readonly kicker: string
    readonly heading: string
    readonly translation: string
    readonly lead: string
    readonly body: string
    readonly outputs: readonly string[]
    readonly outputsLabel: string
    /** The wordmark, the verb it derives from, and the stem they share. */
    readonly mark: string
    readonly derived: string
    readonly stem: string
  }
  readonly stack: {
    readonly index: string
    readonly kicker: string
    readonly heading: string
    readonly intro: string
    readonly tech: readonly string[]
    readonly techLabel: string
    readonly pillars: readonly Block[]
  }
  readonly values: {
    readonly index: string
    readonly kicker: string
    readonly heading: string
    readonly items: readonly Block[]
  }
  readonly contact: {
    readonly index: string
    readonly kicker: string
    readonly heading: string
    readonly body: string
    readonly emailLabel: string
    readonly githubLabel: string
    readonly linkedinLabel: string
  }
  readonly footer: {
    readonly tagline: string
    readonly rights: string
    readonly formerly: string
  }
}

const en: Copy = {
  meta: {
    title: 'WeFaber: Software and Applied AI, Built to Be Used',
    // Kept inside the 150-160 character window search engines display.
    description:
      'WeFaber builds software and applied AI from Uruguay: platforms, tools and digital products people actually use. AI that solves real problems, not hype.',
    ogLocale: 'en_US',
  },
  nav: {
    links: [
      { href: '#what-we-do', label: 'What we do' },
      { href: '#the-name', label: 'The name' },
      { href: '#stack', label: 'Stack' },
      { href: '#values', label: 'Values' },
    ],
    contact: 'Contact',
    switchTo: 'ES',
    switchToLabel: 'Cambiar a español',
    skipToContent: 'Skip to content',
  },
  hero: {
    eyebrow: 'Software · Applied AI · R&D',
    headlineLead: 'We fabricate.',
    headlineRest: 'Real software, real AI.',
    subline:
      'The name is not decoration: it comes from “we fabricate”. We make real things: platforms, tools and digital products people actually use.',
    ctaPrimary: 'Reach out',
    ctaSecondary: 'See what we do',
    location: 'Founded in Uruguay · Working globally',
  },
  whatWeDo: {
    index: '01',
    kicker: 'What we do',
    heading: 'Three practices, one workshop.',
    intro:
      'We combine software development with applied AI and R&D. We design experiences, build architectures and ship products focused on the visual, the practical and the strategic.',
    blocks: [
      {
        title: 'Software development',
        body: 'Platforms, tools and digital products, end to end. Architecture that holds up, interfaces people understand without a manual.',
      },
      {
        title: 'Applied AI',
        body: 'AI that solves concrete problems, not hype. We start from the problem, not the model, and we ship only what measurably earns its place.',
      },
      {
        title: 'Research & development',
        body: 'We prototype to learn. Short cycles, honest results, and a clear answer on whether an idea deserves to become a product.',
      },
    ],
  },
  theName: {
    index: '02',
    kicker: 'The name',
    heading: 'We fabricate.',
    translation: 'WeFaber · from “we fabricate”',
    lead: 'We make real things.',
    body: 'The name is not decoration. It is a commitment we can be held to: what leaves this workshop is finished, running and in someone’s hands. Not a deck, not a demo. A product with users.',
    outputsLabel: 'What comes out',
    outputs: ['Platforms', 'Tools', 'Digital products'],
    mark: 'WEFABER',
    derived: 'WE FABRICATE',
    stem: 'FAB',
  },
  stack: {
    index: '03',
    kicker: 'Stack & approach',
    heading: 'The JavaScript ecosystem, used deliberately.',
    intro:
      'We work across the JavaScript ecosystem. One language across the stack means less translation, faster iteration and fewer places for things to break.',
    techLabel: 'Core stack',
    tech: ['React', 'TypeScript', 'Node.js'],
    pillars: [
      {
        title: 'Visual',
        body: 'Interfaces with a point of view. Design is how the product works, not a layer applied at the end.',
      },
      {
        title: 'Practical',
        body: 'We ship. Scope stays honest, decisions get made, and the thing goes live where people can use it.',
      },
      {
        title: 'Strategic',
        body: 'We build for where you are going. Architecture that absorbs the next three changes instead of resisting them.',
      },
    ],
  },
  values: {
    index: '04',
    kicker: 'Values',
    heading: 'Two things we do not trade away.',
    items: [
      {
        title: 'Open source as a common good',
        body: 'We build on work others gave away, and we give back. Shared tooling makes everyone’s software better. That is not charity, it is how the ecosystem stays alive.',
      },
      {
        title: 'Privacy as a right, not a feature',
        body: 'Your data is not the price of using something we made. We collect what the product genuinely needs and nothing else, by default and without being asked.',
      },
    ],
  },
  contact: {
    index: '05',
    kicker: 'Contact',
    heading: 'Reach out. We’re always open to collaborating.',
    body: 'Clients, collaborators, people looking for somewhere to build: the inbox is open, and a real person reads it.',
    emailLabel: 'Write to us',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    tagline: 'We make real things.',
    rights: 'All rights reserved.',
    formerly: `formerly ${site.formerName}`,
  },
}

const es: Copy = {
  meta: {
    title: 'WeFaber: Software e IA aplicada, hechos para usarse',
    description:
      'En WeFaber fabricamos software e IA aplicada desde Uruguay: plataformas, herramientas y productos digitales que la gente usa todos los días. IA sin hype.',
    ogLocale: 'es_UY',
  },
  nav: {
    links: [
      { href: '#what-we-do', label: 'Qué hacemos' },
      { href: '#the-name', label: 'El nombre' },
      { href: '#stack', label: 'Stack' },
      { href: '#values', label: 'Valores' },
    ],
    contact: 'Contacto',
    switchTo: 'EN',
    switchToLabel: 'Switch to English',
    skipToContent: 'Ir al contenido',
  },
  hero: {
    eyebrow: 'Software · IA aplicada · I+D',
    headlineLead: 'Fabricamos.',
    headlineRest: 'Software real, IA real.',
    subline:
      'El nombre no es decorativo: viene del inglés “we fabricate”. Fabricamos cosas reales: plataformas, herramientas y productos digitales que la gente usa todos los días.',
    ctaPrimary: 'Escribinos',
    ctaSecondary: 'Ver qué hacemos',
    location: 'Fundada en Uruguay · Trabajamos en todo el mundo',
  },
  whatWeDo: {
    index: '01',
    kicker: 'Qué hacemos',
    heading: 'Tres prácticas, un mismo taller.',
    intro:
      'Unimos desarrollo de software con IA aplicada e investigación. Diseñamos experiencias, construimos arquitecturas y lanzamos productos con foco en lo visual, lo práctico y lo estratégico.',
    blocks: [
      {
        title: 'Desarrollo de software',
        body: 'Plataformas, herramientas y productos digitales, de punta a punta. Arquitecturas que aguantan e interfaces que se entienden sin manual.',
      },
      {
        title: 'IA aplicada',
        body: 'IA que resuelve problemas concretos, no hype. Arrancamos por el problema y no por el modelo, y sólo dejamos lo que se gana su lugar.',
      },
      {
        title: 'Investigación y desarrollo',
        body: 'Prototipamos para aprender. Ciclos cortos, resultados honestos y una respuesta clara sobre si una idea merece ser producto.',
      },
    ],
  },
  theName: {
    index: '02',
    kicker: 'El nombre',
    heading: 'Fabricamos.',
    translation: 'WeFaber · del inglés “we fabricate”',
    lead: 'Fabricamos cosas reales.',
    body: 'El nombre no es decorativo. Es un compromiso que se nos puede reclamar: lo que sale de este taller está terminado, andando y en manos de alguien. No es un pitch ni una demo. Es un producto con usuarios.',
    outputsLabel: 'Qué sale de acá',
    outputs: ['Plataformas', 'Herramientas', 'Productos digitales'],
    mark: 'WEFABER',
    derived: 'FABRICAMOS',
    stem: 'FAB',
  },
  stack: {
    index: '03',
    kicker: 'Stack y enfoque',
    heading: 'El ecosistema JavaScript, usado con criterio.',
    intro:
      'Trabajamos con el ecosistema JavaScript. Un mismo lenguaje en todo el stack significa menos traducción, iteración más rápida y menos lugares donde algo se rompa.',
    techLabel: 'Stack principal',
    tech: ['React', 'TypeScript', 'Node.js'],
    pillars: [
      {
        title: 'Visual',
        body: 'Interfaces con una postura. El diseño es cómo funciona el producto, no una capa que se aplica al final.',
      },
      {
        title: 'Práctico',
        body: 'Lanzamos. El alcance se mantiene honesto, las decisiones se toman y la cosa sale a donde la gente pueda usarla.',
      },
      {
        title: 'Estratégico',
        body: 'Construimos para dónde vas. Arquitecturas que absorben los próximos tres cambios en vez de resistirlos.',
      },
    ],
  },
  values: {
    index: '04',
    kicker: 'Valores',
    heading: 'Dos cosas que no negociamos.',
    items: [
      {
        title: 'El código abierto como bien común',
        body: 'Construimos sobre trabajo que otros regalaron, y devolvemos. Las herramientas compartidas mejoran el software de todos: no es caridad, es cómo el ecosistema sigue vivo.',
      },
      {
        title: 'La privacidad como derecho, no como feature',
        body: 'Tus datos no son el precio de usar algo que hicimos. Recolectamos lo que el producto realmente necesita y nada más, por defecto y sin que haya que pedirlo.',
      },
    ],
  },
  contact: {
    index: '05',
    kicker: 'Contacto',
    heading: 'Escribinos. Siempre estamos abiertos a colaborar.',
    body: 'Clientes, colaboradores, gente buscando dónde construir: la casilla está abierta y la lee una persona de verdad.',
    emailLabel: 'Escribinos',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    tagline: 'Fabricamos cosas reales.',
    rights: 'Todos los derechos reservados.',
    formerly: `antes ${site.formerName}`,
  },
}

export const copy: Record<Language, Copy> = { en, es }
