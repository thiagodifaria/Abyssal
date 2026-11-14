/* eslint-disable jsx-a11y/anchor-is-valid */
import useStyledTheme from '../../hooks/useStyledTheme';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Container } from './styles';

const SiteOfTheDay = () => {
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container onMouseEnter={addCursorBorder} onMouseLeave={removeCursorBorder}>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <svg width="53.08" height="171.358">
          <path fill={theme.text} d="M0 0h53.08v171.358H0z"></path>
          <g fill={theme.background}>
            <text
              x="26.5"
              y="85"
              fontFamily="'Space Grotesk', sans-serif"
              fontSize="9"
              fontWeight="700"
              textAnchor="middle"
              letterSpacing="1"
            >
              <tspan x="26.5" dy="-20">
                DEEP
              </tspan>
              <tspan x="26.5" dy="14">
                SEA
              </tspan>
              <tspan x="26.5" dy="14">
                AWARD
              </tspan>
            </text>
          </g>
        </svg>
      </a>
    </Container>
  );
};

export default SiteOfTheDay;
