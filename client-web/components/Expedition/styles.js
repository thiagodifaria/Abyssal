import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../styles/shared/container';

/* Note: motion is still imported for Hero/BackNav/DetailItem animations */

/* ─── Hero Section ─── */
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding-bottom: 80px;

  ${({ theme }) => theme.breakpoints.tablet`
    padding-bottom: 40px;
    min-height: 70vh;
  `};
`;

export const HeroVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.background} 0%,
      ${({ theme }) => theme.background}dd 20%,
      ${({ theme }) => theme.background}88 45%,
      transparent 100%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled(motion.div)`
  ${containerStyles};
  position: relative;
  z-index: 2;
`;

export const BackNav = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.colors.bioluminescent};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 24px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 0.95;
  margin: 0 0 20px 0;
  color: ${({ theme }) => theme.text};
  max-width: 800px;

  ${({ theme }) => theme.breakpoints.small`
    font-size: 3.5rem;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 2.5rem;
  `};
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 0.9375rem;
  `};
`;

/* ─── Info Section ─── */
export const InfoSection = styled.section`
  ${containerStyles};
  padding-top: 120px;
  padding-bottom: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  ${({ theme }) => theme.breakpoints.tablet`
    padding-top: 60px;
    padding-bottom: 60px;
  `};
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 48px;
  `};
`;

export const InfoMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  ${({ theme }) => theme.breakpoints.small`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `};
`;

export const MetaItem = styled.div`
  & h4 {
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: ${({ theme }) => theme.colors.bioluminescent};
    margin: 0 0 6px 0;
    font-weight: 400;
  }

  & p {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.text};
    margin: 0;
    line-height: 1.5;
  }
`;

export const InfoDescription = styled.div`
  & > p {
    font-size: 1.125rem;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 32px 0;
    max-width: 640px;

    ${({ theme }) => theme.breakpoints.tablet`
      font-size: 1rem;
    `};
  }
`;

export const Headline = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0 0 32px 0;
  color: ${({ theme }) => theme.text};
  max-width: 560px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.5rem;
  `};
`;

export const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 48px 0;
  max-width: 600px;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 0.9375rem;
  `};
`;

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const DetailItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);

  &::before {
    content: '◆';
    font-size: 0.4rem;
    color: ${({ theme }) => theme.colors.bioluminescent};
    margin-top: 5px;
    flex-shrink: 0;
  }
`;

/* ─── Next Expedition Section ─── */
export const NextSection = styled.section`
  padding: 120px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.colors.abyss}44 50%,
    transparent 100%
  );

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 60px 0;
  `};
`;

export const NextContainer = styled.div`
  ${containerStyles};
`;

export const NextLabel = styled.h3`
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: ${({ theme }) => theme.colors.bioluminescent};
  margin: 0 0 40px 0;
  font-weight: 400;
`;

export const NextLink = styled(motion.a)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 40px;
  border-radius: 4px;
  transition: background 0.5s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  `};
`;

export const NextTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${NextLink}:hover & {
    color: ${({ theme }) => theme.colors.bioluminescent};
    transform: translateX(12px);
  }

  ${({ theme }) => theme.breakpoints.small`
    font-size: 2.5rem;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 2rem;
  `};
`;

export const NextVideoPreview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.background};
    opacity: 0.3;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${NextLink}:hover &::after {
    opacity: 0;
  }

  ${NextLink}:hover & video {
    transform: scale(1.08);
  }
`;
