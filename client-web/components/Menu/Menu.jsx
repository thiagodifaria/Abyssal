import React from 'react';
import NextLink from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/language';
import { useMenuContext } from '../../context/menu';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';
import useMediaQuery from '../../hooks/useMediaQuery';
import routes from '../../utils/constants/routes';
import { getSiteContent } from '../../utils/constants/site-content';
import Arrow from '../Icons/Arrow';
import LanguageToggle from '../LanguageToggle';
import {
  listVariants,
  listItemsVariants,
  linkVariants,
  videoRevealVariants,
  videoVariants,
  transition,
} from './variants';
import {
  Backdrop,
  Container,
  CloseButton,
  Header,
  HeaderActions,
  Navigation,
  List,
  Link,
  ArrowContainer,
  Footer,
  FooterText,
  VideoContainer,
  VideoReveal,
  Video,
  Address,
  SocialMedia,
} from './styles';

const Menu = () => {
  const containerRef = React.useRef(null);
  const videoContainerRef = React.useRef(null);
  const [revealVideo, setRevealVideo] = React.useState(null);
  const [isHovering, setIsHovering] = React.useState(false);
  const theme = useStyledTheme();
  const { language } = useLanguage();
  const content = getSiteContent(language);
  const [{ isMenuOpen }, dispatch] = useMenuContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();
  const isMobile = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.small}px)`,
  );
  React.useEffect(() => {
    const resize = () => {
      if (isMenuOpen && containerRef.current && videoContainerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        videoContainerRef.current.style.left = `${
          (window.innerWidth - width) / 2 + 256
        }px`;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [isMenuOpen]);
  const closeMenu = React.useCallback(() => dispatch({ type: 'TOGGLE_MENU' }), [
    dispatch,
  ]);
  return (
    <AnimatePresence onExitComplete={resetCursorColor}>
      {isMenuOpen && (
        <Backdrop onAnimationComplete={() => addCursorColor(theme.text)}>
          <Container ref={containerRef}>
            <Header>
              <h3>{content.navigation.expeditions}</h3>
              <HeaderActions>
                <LanguageToggle />
                <CloseButton title={content.navigation.close} />
              </HeaderActions>
            </Header>
            <Navigation>
              <List
                variants={listVariants}
                initial="hidden"
                animate="show"
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                {routes.map(route => (
                  <motion.li
                    key={route.id}
                    variants={listItemsVariants}
                    transition={{ duration: 0.9, ease: transition.ease }}
                  >
                    <NextLink href={route.path}>
                      <Link
                        name={route.id}
                        onClick={closeMenu}
                        onHoverStart={() => {
                          addCursorBorder();
                          setRevealVideo(route.id);
                        }}
                        onHoverEnd={() => {
                          removeCursorBorder();
                          setRevealVideo(null);
                        }}
                        custom={{ isMobile, color: theme.text }}
                        initial="initial"
                        whileHover="hover"
                        variants={linkVariants}
                        transition={transition}
                      >
                        <ArrowContainer>
                          <Arrow fillColor={theme.colors.bioluminescent} />
                        </ArrowContainer>
                        {route.title[language]}
                      </Link>
                    </NextLink>
                  </motion.li>
                ))}
              </List>
            </Navigation>
            <Footer>
              <FooterText
                className="link"
                as="a"
                href={`mailto:${content.contact.email}`}
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                {content.contact.email}
              </FooterText>
              <FooterText
                className="link"
                as="a"
                href="tel:+5531999122306"
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                {content.contact.phone}
              </FooterText>
              <FooterText className="copyright">
                {content.contact.copyright}
              </FooterText>
              {isMobile && (
                <Address>
                  <FooterText>{content.contact.location}</FooterText>
                </Address>
              )}
              <SocialMedia />
            </Footer>
          </Container>
          {!isMobile && (
            <VideoContainer ref={videoContainerRef}>
              <VideoReveal
                variants={videoRevealVariants}
                transition={transition}
                initial="show"
                animate={isHovering ? 'hidden' : 'show'}
              />
              {routes.map(route => (
                <Video
                  key={route.id}
                  src={`/videos/${route.video}`}
                  variants={videoVariants}
                  initial="hidden"
                  animate={route.id === revealVideo ? 'show' : 'hidden'}
                  transition={transition}
                  loop
                  autoPlay
                  muted
                />
              ))}
            </VideoContainer>
          )}
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
export default React.memo(Menu);
