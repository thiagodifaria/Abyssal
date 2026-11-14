import React from 'react';
import { useLanguage } from '../../../context/language';
import useCursorStyle from '../../../hooks/useCursorStyle';
import { getServiceItems } from '../../../utils/constants/services-items';
import { getSiteContent } from '../../../utils/constants/site-content';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const { language } = useLanguage();
  const { about } = getSiteContent(language);
  const items = getServiceItems(language);

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>{about.title}</h2>
          <p>{about.text}</p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>{about.services}</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={
                  itemIndex === selectedItem ? undefined : addCursorBorder
                }
                onMouseLeave={
                  itemIndex === selectedItem ? undefined : removeCursorBorder
                }
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map(service => (
                  <p key={service}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
