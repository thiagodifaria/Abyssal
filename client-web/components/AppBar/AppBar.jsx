import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/language';
import { getSiteContent } from '../../utils/constants/site-content';
import Logo from '../Icons/Logo';
import MenuButton from '../MenuButton';
import { Slider, Container, StyledLink, MenuWrapper } from './styles';

const getPosition = direction => {
  if (direction === 'down') return { top: 0 };
  if (direction === 'up') return { bottom: 0 };

  return {};
};

const variants = {
  hidden: { y: -131 },
  show: { y: 0 },
};

const AppBar = ({
  direction = 'down',
  renderAs,
  offset = 105,
  logoProps = {},
  style: styleProp = {},
  ...rootProps
}) => {
  const [hidden, setHidden] = React.useState(false);
  const { language } = useLanguage();
  const content = getSiteContent(language);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        direction === 'down'
          ? window.scrollY
          : document.documentElement.scrollTop + window.innerHeight;
      const intersection =
        direction === 'down'
          ? offset
          : document.documentElement.scrollHeight - offset;

      setHidden(currentValue => {
        const shouldHide = currentPosition > intersection;
        return currentValue === shouldHide ? currentValue : shouldHide;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [direction, offset]);

  const isFooter = renderAs === 'footer';

  return (
    <Slider
      variants={variants}
      initial="hidden"
      animate={hidden ? 'hidden' : 'show'}
      transition={{ duration: 1, ease: [0.666, 0, 0.237, 1] }}
      style={{
        ...getPosition(direction),
        ...styleProp,
        ...(isFooter
          ? {
              position: 'relative',
              transform: 'none',
              bottom: 'auto',
              width: '100%',
              padding: '60px 0',
            }
          : {}),
      }}
      renderAs={renderAs}
      {...rootProps}
    >
      <Container
        style={
          isFooter
            ? {
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }
            : {}
        }
      >
        {!isFooter && (
          <div>
            <Link href="/" passHref>
              <StyledLink title="ABYSSAL">
                <Logo {...logoProps} />
              </StyledLink>
            </Link>
          </div>
        )}
        {!isFooter && (
          <MenuWrapper>
            <MenuButton title={content.navigation.expeditions} />
          </MenuWrapper>
        )}
      </Container>
    </Slider>
  );
};

export default React.memo(AppBar);
