import React from 'react';
import { useThemeContext } from '../../context/theme';

const MaritimeSymbol = props => {
  const [theme] = useThemeContext();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={{ width: '24px', height: '24px' }}
      {...props}
    >
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 0C9.79 0 8 1.79 8 4C8 5.48 8.81 6.78 10 7.49V10H6V8H4V10C4 13.97 6.91 17.25 10.75 17.83C10.29 18.5 10 19.31 10 20.2V22H8V24H16V22H14V20.2C14 19.31 13.71 18.5 13.25 17.83C17.09 17.25 20 13.97 20 10V8H18V10H14V7.49C15.19 6.78 16 5.48 16 4C16 1.79 14.21 0 12 0Z"
        fill={theme === 'dark' ? '#FFFFFF' : '#000000'}
      />
    </svg>
  );
};

export default MaritimeSymbol;
