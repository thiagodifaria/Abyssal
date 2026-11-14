import React from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useLanguage } from '../../../context/language';
import { useMenuContext } from '../../../context/menu';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useStyledTheme from '../../../hooks/useStyledTheme';
import { getExpedition } from '../../../utils/constants/expedition-data';
import { getSiteContent } from '../../../utils/constants/site-content';
import AnimateOnScreen from '../../AnimateOnScreen';
import Arrow from '../../Icons/Arrow';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  VideoPreview,
  MenuContainer,
  MenuButton,
} from './styles';

const transition = { duration: 0.45, ease: [0.4, 0, 0.2, 1] };
const FeaturedProject = () => {
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const theme = useStyledTheme();
  const [{ isMenuOpen }] = useMenuContext();
  const { language } = useLanguage();
  const content = getSiteContent(language);
  const expedition = getExpedition('predadores-do-abismo', language);
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );
  const leave = React.useCallback(() => {
    if (!isMenuOpen) {
      removeCursorBorder();
      resetCursorColor();
    }
  }, [isMenuOpen, removeCursorBorder, resetCursorColor]);
  React.useEffect(() => {
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [controlsArrow, isTabletView]);
  return (
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <Link href="/projects/predadores-do-abismo" passHref>
            <ProjectAnchor
              onHoverStart={() => {
                addCursorBorder();
                controlsInfo.start({ opacity: 1 });
                controlsArrow.start({ x: 0 });
              }}
              onHoverEnd={() => {
                removeCursorBorder();
                controlsInfo.start({ opacity: 0 });
                controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
              }}
            >
              <ProjectInfo>
                <h3>{content.featured.label}</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>{content.featured.location}</h4>
                  <h4>{expedition.year}</h4>
                </motion.div>
                <ProjectTitle>
                  {expedition.title}
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <VideoPreview>
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  src="/videos/shark.mp4"
                />
              </VideoPreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <MenuContainer>
          <MenuButton
            sticky={false}
            title={content.featured.all}
            onMouseEnter={() => {
              addCursorBorder();
              addCursorColor(theme.text);
            }}
            onMouseLeave={leave}
          />
        </MenuContainer>
      </AnimateOnScreen>
    </ContentSection>
  );
};
export default React.memo(FeaturedProject);
