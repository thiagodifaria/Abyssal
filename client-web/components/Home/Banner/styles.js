import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-bottom: 305px;
  background: transparent;

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 90px;
  `};
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;

  & video {
    object-fit: cover;
  }
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -93px;
  left: -20px;
  font-size: 420px;
  font-size: 26.25rem;
  pointer-events: none;
  line-height: 0.6714285714;
  color: ${({ theme }) => theme.text};

  & span {
    display: block;
    will-change: transform;
  }

  ${({ theme }) => theme.breakpoints.small`
    left: -4px;
    bottom: -15px;
    font-size: 110px;
    font-size: 6.875rem;
    line-height: .85;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    left: -5px;
    bottom: -20px;
    max-width: 100%;
    font-size: 140px;
    font-size: 8.75rem;
    line-height: .8;
    overflow: visible;
  `};
`;
