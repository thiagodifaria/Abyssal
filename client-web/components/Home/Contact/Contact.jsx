import React from 'react';
import { useLanguage } from '../../../context/language';
import useCursorStyle from '../../../hooks/useCursorStyle';
import { getSiteContent } from '../../../utils/constants/site-content';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();
  const { language } = useLanguage();
  const { contact } = getSiteContent(language);

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="https://wa.me/5531999122306"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            {contact.phone}
          </a>
          <br />
          <a
            className="contact-text"
            href={`mailto:${contact.email}`}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            {contact.email}
          </a>
        </div>
        <address className="column contact-text">
          {contact.location.split('\n').map(line => (
            <React.Fragment key={line}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
