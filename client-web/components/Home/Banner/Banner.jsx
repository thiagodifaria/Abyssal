import React from 'react';
import { motion } from 'framer-motion';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useWindowSize from '../../../hooks/useWindowSize';
import CanvasEraser from '../../CanvasEraser';
import LazyVideo from '../../LazyVideo';
import { BannerSection, BannerTitle, VideoContainer } from './styles';

const titleAnimation = { animate: { transition: { staggerChildren: 0.15 } } };
const itemTitleAnimation = {
  initial: { y: '100vh' },
  animate: { y: 0, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
};

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <VideoContainer>
        <LazyVideo
          src="/videos/banner.mp4"
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
        />
      </VideoContainer>
      <CanvasEraser
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        size={120}
        background="rgba(0, 30, 43, 0.7)"
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
      />
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        {['DEEP', 'DIVE'].map(word => (
          <motion.span key={word} variants={itemTitleAnimation}>
            {word}
          </motion.span>
        ))}
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);
