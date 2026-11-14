import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 148 24"
      fill={theme.text}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      {/* A */}
      <path d="M10.5 0L0 24H4.5L6.5 19H14.5L16.5 24H21L10.5 0ZM13 15.5H8L10.5 9L13 15.5Z" />
      {/* B */}
      <path d="M24 0V24H33.5C38.5 24 41 21.5 41 18C41 15.5 39.5 13.5 37 12.5C39 11.5 40 9.5 40 7C40 3 37 0 32 0H24ZM28 3.5H31.5C34 3.5 35.5 4.5 35.5 6.5C35.5 8.5 34 9.5 31.5 9.5H28V3.5ZM28 13H32.5C35 13 36.5 14 36.5 16.5C36.5 19 35 20.5 32 20.5H28V13Z" />
      {/* Y */}
      <path d="M44 0L50.5 10.5L57 0H61.5L52.5 14V24H48.5V14L39.5 0H44Z" />

      {/* S (Standard) */}
      <path d="M72.5 4C69 4 67 6 65.5 9.5L62.5 8C64.5 3 67.5 0.5 72.5 0.5C77.5 0.5 80.5 3.5 80.5 7.5C80.5 10.5 78.5 12.5 76 13.5C73.5 14.5 72.5 16 72.5 18C72.5 20.5 74 21 75.5 21C77 21 79 19 80.5 15.5L83.5 17C81.5 22 78.5 24.5 75.5 24.5C70.5 24.5 68.5 21.5 68.5 18C68.5 14 71 12 73.5 11C76 10 77 8.5 77 7C77 5.5 75.5 4 72.5 4Z" />

      {/* Wave S (Toggle) */}
      <g
        role="button"
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        style={{ cursor: 'pointer' }}
        {...buttonProps}
      >
        <path
          d="M96.5 4C93 4 91 6 89.5 9.5L86.5 8C88.5 3 91.5 0.5 96.5 0.5C101.5 0.5 104.5 3.5 104.5 7.5C104.5 10.5 102.5 12.5 100 13.5C97.5 14.5 96.5 16 96.5 18C96.5 20.5 98 21 99.5 21C101 21 103 19 104.5 15.5L107.5 17C105.5 22 102.5 24.5 99.5 24.5C94.5 24.5 92.5 21.5 92.5 18C92.5 14 95 12 97.5 11C100 10 101 8.5 101 7C101 5.5 99.5 4 96.5 4Z"
          fill={theme.colors.bioluminescent}
        />
      </g>

      {/* A (Second) */}
      <path d="M120.5 0L110 24H114.5L116.5 19H124.5L126.5 24H131L120.5 0ZM123 15.5H118L120.5 9L123 15.5Z" />

      {/* L */}
      <path d="M134 0V24H147V20H138V0H134Z" />
    </svg>
  );
};

export default Logo;
