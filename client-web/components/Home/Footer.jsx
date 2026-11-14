import React from 'react';

const Footer = () => (
  <footer
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '32px 0 48px',
    }}
  >
    <span
      style={{
        fontFamily: 'calibre, sans-serif',
        fontSize: '18px',
        fontWeight: 900,
        letterSpacing: '3px',
        color: '#FFFFFF',
      }}
    >
      ABYSSAL
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 12"
      width="40"
      height="12"
      aria-hidden="true"
      style={{ display: 'block', marginTop: '10px' }}
    >
      <path
        d="M0 6 C4 2, 6 2, 10 6 S16 10, 20 6 S26 2, 30 6 S36 10, 40 6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </footer>
);

export default React.memo(Footer);
