import React from 'react';
import { useLanguage } from '../../../context/language';
import { getSiteContent } from '../../../utils/constants/site-content';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text, ShowcaseNotice } from './styles';

const Content = () => {
  const { language } = useLanguage();
  const { intro, showcase } = getSiteContent(language);

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>{intro}</Text>
          <ShowcaseNotice>{showcase}</ShowcaseNotice>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Content);
