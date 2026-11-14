import colors from '../colors';
import media, { breakpoints } from '../media';
import zIndex from '../zIndex';

export default {
  cursor: colors.bioluminescent,
  colors,
  zIndex,
  breakpoints: { sizes: breakpoints, ...media },
};
