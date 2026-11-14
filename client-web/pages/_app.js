import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useThemeContext } from '../context/theme';
import { CursorContextProvider } from '../context/cursor';
import { MenuContextProvider } from '../context/menu';
import { LanguageContextProvider, useLanguage } from '../context/language';
import GlobalStyles from '../styles/global';
import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';
import AppBar from '../components/AppBar';
import Cursor from '../components/Cursor';
import Menu from '../components/Menu';

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  const currentTheme = themes[state.theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const SiteHead = () => {
  const { language } = useLanguage();
  const title =
    language === 'en'
      ? 'ABYSSAL — Ocean Exploration'
      : 'ABYSSAL — Exploração Oceânica';

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="ABYSSAL, an ocean exploration visual showcase."
      />
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <LanguageContextProvider>
        <SiteHead />
        <ThemeContextProvider>
          <MenuContextProvider>
            <CursorContextProvider>
              <ThemedApp>
                <Header />
                <Menu />
                <Component {...pageProps} />
                <Cursor />
              </ThemedApp>
            </CursorContextProvider>
          </MenuContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  );
};

export default App;
