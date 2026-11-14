# Abyssal — Showcase de Exploração Oceânica

**Uma experiência visual imersiva de exploração oceânica, criada como showcase de front-end.**

## Sobre o projeto

O Abyssal é uma interface cinematográfica inspirada na escala, na tensão e no mistério de expedições ao oceano profundo. Vídeos, animações, cursor customizado e páginas narrativas de expedição se combinam para criar uma experiência editorial, em vez de uma interface de produto convencional.

> **Aviso importante:** Abyssal é um showcase conceitual de front-end. As expedições, o estúdio e os serviços apresentados são fictícios e não representam uma empresa em operação, produto comercial ou programa científico real.

## Funcionalidades

- **Identidade Deep Dive:** assinatura de abertura fixa, preservada em todos os idiomas.
- **Landing page imersiva:** vídeo em tela cheia, tipografia animada e efeito interativo de apagamento em canvas.
- **Arquivo de expedições:** cinco narrativas fictícias com páginas próprias geradas estaticamente.
- **Navegação orientada por movimento:** menu animado, prévias em vídeo e feedback de cursor customizado.
- **Internacionalização:** interface e conteúdo completos em português e inglês, com preferência salva localmente.
- **Temas visuais:** alternância entre claro e escuro a partir da interação com a marca.
- **Responsividade:** composição adaptada para desktop, tablet e dispositivos móveis.

## Tecnologias

| Área | Tecnologia | Responsabilidade |
| --- | --- | --- |
| Aplicação | Next.js 10 + React 17 | Roteamento por arquivos e páginas estáticas. |
| Estilos | styled-components | Temas, componentes visuais e breakpoints. |
| Animações | Framer Motion | Revelações, transições, hover e menu. |
| Conteúdo | Módulos JavaScript locais | Dados de expedições e textos localizados. |
| Assets | Vídeos MP4 e fontes locais | Direção visual sem dependências externas de mídia. |

A linguagem visual usa azul abissal, tipografia clara, acentos bioluminescentes e espaço negativo. O seletor de idioma fica dentro do menu para não poluir o cabeçalho.

## Pré-requisitos

- Node.js 14 ou superior
- npm

## Instalação e execução

```bash
git clone https://github.com/thiagodifaria/Abyssal.git
cd Abyssal/client-web
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Comandos

Execute a partir de `client-web/`.

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Verifica sintaxe, hooks, acessibilidade e formatação. |
| `npm run build` | Gera e valida o build otimizado de produção. |
| `npm run start` | Serve o build de produção localmente. |

## Estrutura do projeto

```text
client-web/
├── components/          componentes reutilizáveis e seções visuais
│   ├── Home/            seções da página inicial
│   ├── Expedition/      apresentação das páginas de expedição
│   └── Icons/           ícones SVG locais
├── context/             estados de cursor, idioma, menu e tema
├── hooks/               comportamento de interface e responsividade
├── pages/               rotas e pontos de entrada do Next.js
│   └── projects/        rotas estáticas das expedições
├── public/              vídeos, fontes e favicon
├── styles/              estilos globais, temas e primitivas compartilhadas
├── utils/constants/     conteúdo localizado, rotas e dados de expedição
├── package.json         scripts e dependências do frontend
└── .eslintrc.js         regras de lint do frontend
```

A raiz do repositório permanece enxuta: documentação, licença, configurações do repositório e a aplicação isolada em `client-web/`. A separação segue o padrão de organização dos demais projetos pessoais, incluindo o Tesori di Bacco.

## Conteúdo e idiomas

Os dados de interface ficam separados da camada visual em `client-web/utils/constants/`:

- `site-content.js`: textos globais, metadados de contato e rótulos compartilhados.
- `expedition-data.js`: cinco expedições e suas versões em PT/EN.
- `routes.js` e `services-items.js`: dados localizados da navegação e das frentes criativas.

A escolha de idioma é persistida em `localStorage`; o atributo `lang` do documento é atualizado para melhorar a leitura por tecnologias assistivas. A expressão **DEEP DIVE** é uma assinatura de marca e, por decisão visual, não é traduzida.

## Qualidade e build

```bash
cd client-web
npm run lint
npm run build
```

O build gera estaticamente todas as rotas de expedição. O lint utiliza regras para JavaScript/React, Hooks, acessibilidade e Prettier.

## Contato

**Thiago Di Faria** — [thiagodifaria@gmail.com](mailto:thiagodifaria@gmail.com)

[GitHub](https://github.com/thiagodifaria) · [LinkedIn](https://www.linkedin.com/in/thiagodifaria/)

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
