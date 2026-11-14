import React from 'react';
import { useLanguage } from '../../context/language';
import { Toggle } from './styles';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === 'pt' ? 'EN' : 'PT';
  const label =
    language === 'pt' ? 'Switch to English' : 'Mudar para português';

  return (
    <Toggle
      type="button"
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
    >
      {nextLanguage}
    </Toggle>
  );
};

export default React.memo(LanguageToggle);
