const serviceItems = {
  pt: [
    [
      'Pesquisa Marinha',
      [
        'Planejamento de expedição',
        'Mapeamento oceânico',
        'Biologia marinha',
        'Análise de ecossistemas',
      ],
    ],
    [
      'Captura Submarina',
      [
        'Filmagem subaquática',
        'Produção',
        'Equipe de mergulho',
        'ROVs e drones submarinos',
        'Fotografia macro',
      ],
    ],
    [
      'Edição & VFX',
      [
        'Correção de cor',
        'Edição',
        'VFX submarino',
        'Animação e motion graphics',
        'Legendas e acessibilidade',
      ],
    ],
    [
      'Som Imersivo',
      [
        'Design de som subaquático',
        'Efeitos ambientais',
        'Música original',
        'Mixagem espacial 3D',
      ],
    ],
  ],
  en: [
    [
      'Marine Research',
      [
        'Expedition planning',
        'Ocean mapping',
        'Marine biology',
        'Ecosystem analysis',
      ],
    ],
    [
      'Underwater Capture',
      [
        'Underwater cinematography',
        'Production management',
        'Dive crew',
        'ROVs and underwater drones',
        'Macro photography',
      ],
    ],
    [
      'Editing & VFX',
      [
        'Colour grading',
        'Editing',
        'Underwater VFX',
        'Animation and motion graphics',
        'Subtitles and accessibility',
      ],
    ],
    [
      'Immersive Sound',
      [
        'Underwater sound design',
        'Ambient sound effects',
        'Original music',
        'Spatial 3D mixing',
      ],
    ],
  ],
};

export const getServiceItems = language =>
  serviceItems[language] || serviceItems.pt;
