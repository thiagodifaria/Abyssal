const shared = {
  'predadores-do-abismo': {
    video: 'shark.mp4',
    year: '2026',
    depth: '300m+',
    duration: { pt: '18 meses', en: '18 months' },
    nextExpedition: 'gigantes-do-azul',
  },
  'gigantes-do-azul': {
    video: 'whale.mp4',
    year: '2026',
    depth: '40m',
    duration: { pt: '6 meses', en: '6 months' },
    nextExpedition: 'guardioes-dos-recifes',
  },
  'guardioes-dos-recifes': {
    video: 'turtle.mp4',
    year: '2025',
    depth: '25m',
    duration: { pt: '4 meses', en: '4 months' },
    nextExpedition: 'bioluminescencia',
  },
  bioluminescencia: {
    video: 'jellyfish.mp4',
    year: '2025',
    depth: '200m',
    duration: { pt: '3 meses', en: '3 months' },
    nextExpedition: 'florestas-submersas',
  },
  'florestas-submersas': {
    video: 'abismo-azul.mp4',
    year: '2024',
    depth: '30m',
    duration: { pt: '8 meses', en: '8 months' },
    nextExpedition: 'predadores-do-abismo',
  },
};

const content = {
  pt: {
    'predadores-do-abismo': {
      title: 'Predadores do Abismo',
      subtitle: 'Na fronteira entre a escuridão e a vida',
      location: 'Oceano Pacífico — Fossa das Marianas',
      type: 'Documentário submarino',
      headline:
        'O tubarão-branco é apenas um dos perigos que habitam o abismo.',
      description:
        'Muito além da luz solar, predadores ancestrais patrulham territórios que o ser humano mal começou a mapear.',
      bodyText:
        'Esta expedição imagina o que poucos olhos humanos testemunharam: caçadas coordenadas, lulas colossais e formas de vida moldadas por milhões de anos de escuridão total.',
      details: [
        'Mergulhos técnicos a mais de 300 metros',
        'Câmeras de baixa luminosidade',
        'Consultoria com biólogos marinhos',
        'Registro de espécies raramente filmadas',
      ],
    },
    'gigantes-do-azul': {
      title: 'Gigantes do Azul',
      subtitle: 'As rotas invisíveis dos gigantes migratórios',
      location: 'Atlântico Sul — Costa Brasileira',
      type: 'Série documental',
      headline: 'Cada canto de uma baleia-jubarte ecoa por oceanos inteiros.',
      description:
        'As maiores criaturas do planeta percorrem milhares de quilômetros numa migração que conecta oceanos e continentes.',
      bodyText:
        'A série acompanha a jornada pela costa brasileira: saltos monumentais, cantos subaquáticos e a relação delicada entre mãe e filhote.',
      details: [
        'Filmagem aérea e submarina',
        'Gravação bioacústica com hidrofones',
        'Parceria conceitual com pesquisadores',
        'Seis meses de acompanhamento',
      ],
    },
    'guardioes-dos-recifes': {
      title: 'Guardiões dos Recifes',
      subtitle: 'A luta silenciosa pela sobrevivência dos recifes',
      location: 'Mar do Caribe — Belize',
      type: 'Documentário de conservação',
      headline:
        'As tartarugas marinhas são sentinelas de um mundo em transformação.',
      description:
        'Tartarugas atravessam os mesmos oceanos há milhões de anos e hoje enfrentam uma ameaça sem precedentes.',
      bodyText:
        'Em Belize, a narrativa observa a ligação entre tartarugas e corais, entre ninhos vulneráveis e recifes cada vez mais frágeis.',
      details: [
        'Mapeamento 3D de recifes',
        'Rastreamento por satélite',
        'Registro de áreas de desova',
        'Colaboração com ONGs marinhas',
      ],
    },
    bioluminescencia: {
      title: 'Bioluminescência',
      subtitle: 'Quando o oceano cria sua própria luz',
      location: 'Oceano Índico — Maldivas',
      type: 'Filme experimental',
      headline: 'Na escuridão absoluta, a vida inventou sua própria luz.',
      description:
        'Na zona mesopelágica, a luz solar não existe; organismos criam uma sinfonia química de brilho e movimento.',
      bodyText:
        'O filme acompanha águas-vivas, sifonóforos e plâncton luminoso — um céu estrelado invertido, escondido sob a superfície.',
      details: [
        'Sensores de fotoluminescência',
        'Mergulhos noturnos',
        'Consultoria em fotobiologia',
        'Macrocinematografia subaquática',
      ],
    },
    'florestas-submersas': {
      title: 'Florestas Submersas',
      subtitle: 'Os ecossistemas invisíveis que sustentam a vida',
      location: 'Grande Barreira de Coral — Austrália',
      type: 'Documentário científico',
      headline: 'Sob a superfície cristalina, florestas inteiras respiram.',
      description:
        'A Grande Barreira de Coral abriga milhares de espécies, mas enfrenta mudanças profundas e urgentes.',
      bodyText:
        'Ao longo de 2.300 km, a expedição observa os micro-organismos dos recifes, o branqueamento e os sinais de resiliência.',
      details: [
        'Timelapse subaquático',
        'Análise de biodiversidade',
        'Documentação do branqueamento',
        'Dados para conservação',
      ],
    },
  },
  en: {
    'predadores-do-abismo': {
      title: 'Abyss Predators',
      subtitle: 'At the frontier between darkness and life',
      location: 'Pacific Ocean — Mariana Trench',
      type: 'Underwater documentary',
      headline:
        'The great white shark is only one of the dangers living in the abyss.',
      description:
        'Far beyond sunlight, ancient predators patrol territories humanity has barely begun to map.',
      bodyText:
        'This expedition imagines what few human eyes have witnessed: coordinated hunts, colossal squid and life forms shaped by millions of years of total darkness.',
      details: [
        'Technical dives beyond 300 metres',
        'Low-light camera systems',
        'Marine biologist consultation',
        'Rarely filmed species',
      ],
    },
    'gigantes-do-azul': {
      title: 'Giants of the Blue',
      subtitle: 'The unseen routes of migrating giants',
      location: 'South Atlantic — Brazilian Coast',
      type: 'Documentary series',
      headline: 'Every humpback whale song carries across entire oceans.',
      description:
        'The planet’s largest creatures travel thousands of kilometres in a migration that connects oceans and continents.',
      bodyText:
        'The series follows the Brazilian coast through monumental breaches, underwater songs and the delicate bond between mother and calf.',
      details: [
        'Aerial and underwater filming',
        'Hydrophone bioacoustic recording',
        'Conceptual research partnership',
        'Six months of observation',
      ],
    },
    'guardioes-dos-recifes': {
      title: 'Guardians of the Reefs',
      subtitle: 'The quiet fight for reef survival',
      location: 'Caribbean Sea — Belize',
      type: 'Conservation documentary',
      headline: 'Sea turtles are sentinels of a changing world.',
      description:
        'Turtles have crossed these oceans for millions of years and now face an unprecedented threat.',
      bodyText:
        'In Belize, the story follows the link between turtles and corals, vulnerable nests and increasingly fragile reefs.',
      details: [
        '3D reef mapping',
        'Satellite tracking',
        'Nesting-area documentation',
        'Marine NGO collaboration',
      ],
    },
    bioluminescencia: {
      title: 'Bioluminescence',
      subtitle: 'When the ocean creates its own light',
      location: 'Indian Ocean — Maldives',
      type: 'Experimental film',
      headline: 'In absolute darkness, life invented its own light.',
      description:
        'In the mesopelagic zone sunlight vanishes; organisms create a chemical symphony of glow and motion.',
      bodyText:
        'The film follows jellyfish, siphonophores and luminous plankton — an inverted star field hidden beneath the surface.',
      details: [
        'Photoluminescence sensors',
        'Night dives',
        'Photobiology consultation',
        'Underwater macro cinematography',
      ],
    },
    'florestas-submersas': {
      title: 'Submerged Forests',
      subtitle: 'The invisible ecosystems that sustain life',
      location: 'Great Barrier Reef — Australia',
      type: 'Scientific documentary',
      headline: 'Beneath the clear surface, entire forests breathe.',
      description:
        'The Great Barrier Reef supports thousands of species but faces profound and urgent change.',
      bodyText:
        'Across 2,300 km, the expedition observes reef micro-organisms, bleaching events and signs of resilience.',
      details: [
        'Underwater time-lapse',
        'Biodiversity analysis',
        'Bleaching documentation',
        'Conservation data',
      ],
    },
  },
};

export const expeditionIds = Object.keys(shared);

export const getExpedition = (id, language = 'pt') => {
  const localizedContent = content[language] || content.pt;
  const expedition = shared[id];

  if (!expedition || !localizedContent[id]) return null;

  return {
    id,
    ...expedition,
    ...localizedContent[id],
    duration: expedition.duration[language] || expedition.duration.pt,
  };
};

export default shared;
