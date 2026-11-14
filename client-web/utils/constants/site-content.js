export const siteContent = {
  pt: {
    metadata: { title: 'ABYSSAL — Exploração Oceânica' },
    navigation: { expeditions: 'Expedições', close: 'Fechar' },
    banner: ['MERGULHE', 'FUNDO'],
    showcase:
      'Este é um projeto de showcase conceitual. Não representa um produto ou estúdio real.',
    intro:
      'As maiores histórias não estão na superfície — elas habitam as profundezas. Nós mergulhamos até onde a luz não alcança para trazê-las à tona.',
    about: {
      title:
        'ABYSSAL é um estúdio conceitual de exploração e produção audiovisual, criado para revelar as histórias ocultas nos oceanos do mundo.',
      text:
        'Todo oceano guarda um segredo. Este showcase imagina como pesquisa, conservação e narrativa cinematográfica podem se encontrar para transformar o desconhecido em histórias que merecem ser contadas.',
      services: 'Frentes criativas',
    },
    featured: {
      label: 'Expedição em destaque',
      location: 'Oceano Pacífico',
      all: 'Todas as expedições',
    },
    contact: {
      email: 'thiagodifaria@gmail.com',
      location: 'Feito em Belo Horizonte\nMG, Brasil',
      phone: '+55 31 99912-2306',
      copyright: '© ABYSSAL 2026',
    },
    expedition: {
      back: 'Todas as expedições',
      location: 'Localização',
      year: 'Ano',
      type: 'Tipo',
      depth: 'Profundidade',
      duration: 'Duração',
      next: 'Próxima expedição',
    },
  },
  en: {
    metadata: { title: 'ABYSSAL — Ocean Exploration' },
    navigation: { expeditions: 'Expeditions', close: 'Close' },
    banner: ['DIVE', 'DEEP'],
    showcase:
      'This is a conceptual showcase project. It does not represent a real product or studio.',
    intro:
      'The greatest stories are not on the surface — they live in the depths. We dive beyond the reach of light to bring them into view.',
    about: {
      title:
        'ABYSSAL is a conceptual exploration and audiovisual production studio, created to reveal the hidden stories of the world’s oceans.',
      text:
        'Every ocean holds a secret. This showcase imagines how research, conservation and cinematic storytelling can meet to turn the unknown into stories worth telling.',
      services: 'Creative disciplines',
    },
    featured: {
      label: 'Featured expedition',
      location: 'Pacific Ocean',
      all: 'All expeditions',
    },
    contact: {
      email: 'thiagodifaria@gmail.com',
      location: 'Made in Belo Horizonte\nMG, Brazil',
      phone: '+55 31 99912-2306',
      copyright: '© ABYSSAL 2026',
    },
    expedition: {
      back: 'All expeditions',
      location: 'Location',
      year: 'Year',
      type: 'Format',
      depth: 'Depth',
      duration: 'Duration',
      next: 'Next expedition',
    },
  },
};

export const getSiteContent = language =>
  siteContent[language] || siteContent.pt;
