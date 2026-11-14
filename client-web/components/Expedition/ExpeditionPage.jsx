import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/language';
import useCursorStyle from '../../hooks/useCursorStyle';
import { getExpedition } from '../../utils/constants/expedition-data';
import { getSiteContent } from '../../utils/constants/site-content';
import AnimateOnScreen from '../AnimateOnScreen';
import Footer from '../Home/Footer';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  BackNav,
  InfoSection,
  InfoGrid,
  InfoMeta,
  MetaItem,
  InfoDescription,
  Headline,
  BodyText,
  DetailsList,
  DetailItem,
  NextSection,
  NextContainer,
  NextLabel,
  NextLink,
  NextTitle,
  NextVideoPreview,
} from './styles';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};
const transition = { duration: 0.8, ease: [0.4, 0, 0.2, 1] };

const ExpeditionPage = ({ id }) => {
  const { language } = useLanguage();
  const labels = getSiteContent(language).expedition;
  const expedition = getExpedition(id, language);
  const nextExpedition = getExpedition(expedition.nextExpedition, language);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <>
      <HeroSection>
        <HeroVideo>
          <video
            src={`/videos/${expedition.video}`}
            loop
            autoPlay
            muted
            playsInline
          />
        </HeroVideo>
        <HeroContent variants={stagger} initial="initial" animate="animate">
          <Link href="/" passHref legacyBehavior>
            <BackNav
              onMouseEnter={addCursorBorder}
              onMouseLeave={removeCursorBorder}
              variants={fadeUp}
              transition={transition}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {labels.back}
            </BackNav>
          </Link>
          <HeroTitle variants={fadeUp} transition={transition}>
            {expedition.title}
          </HeroTitle>
          <HeroSubtitle variants={fadeUp} transition={transition}>
            {expedition.subtitle}
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      <AnimateOnScreen>
        <InfoSection>
          <InfoGrid>
            <InfoMeta>
              {[
                [labels.location, expedition.location],
                [labels.year, expedition.year],
                [labels.type, expedition.type],
                [labels.depth, expedition.depth],
                [labels.duration, expedition.duration],
              ].map(([label, value]) => (
                <MetaItem key={label}>
                  <h4>{label}</h4>
                  <p>{value}</p>
                </MetaItem>
              ))}
            </InfoMeta>
            <InfoDescription>
              <Headline>{expedition.headline}</Headline>
              <p>{expedition.description}</p>
              <BodyText>{expedition.bodyText}</BodyText>
              <DetailsList>
                {expedition.details.map(detail => (
                  <DetailItem key={detail}>{detail}</DetailItem>
                ))}
              </DetailsList>
            </InfoDescription>
          </InfoGrid>
        </InfoSection>
      </AnimateOnScreen>
      <AnimateOnScreen>
        <NextSection>
          <NextContainer>
            <NextLabel>{labels.next}</NextLabel>
            <Link
              href={`/projects/${nextExpedition.id}`}
              passHref
              legacyBehavior
            >
              <NextLink
                onMouseEnter={addCursorBorder}
                onMouseLeave={removeCursorBorder}
              >
                <div>
                  <NextTitle>{nextExpedition.title}</NextTitle>
                  <p>{nextExpedition.subtitle}</p>
                </div>
                <NextVideoPreview>
                  <video
                    src={`/videos/${nextExpedition.video}`}
                    loop
                    autoPlay
                    muted
                    playsInline
                  />
                </NextVideoPreview>
              </NextLink>
            </Link>
          </NextContainer>
        </NextSection>
      </AnimateOnScreen>
      <Footer />
    </>
  );
};

export default React.memo(ExpeditionPage);
