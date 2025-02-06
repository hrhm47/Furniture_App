import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import {fontPixel} from './constants';

export const fontSize = {
  // TITLE: responsiveScreenFontSize(3.75),
  // HEADING1: responsiveScreenFontSize(3.5),
  // HEADING2: responsiveScreenFontSize(2.75),
  // HEADING3: responsiveScreenFontSize(2.45),
  // BODY1: responsiveScreenFontSize(2.15),
  // BODY2: responsiveScreenFontSize(1.9),
  // BODY3: responsiveScreenFontSize(1.65),
  TITLE: fontPixel(30),
  HEADING1: fontPixel(26),
  HEADING2: fontPixel(22),
  HEADING3: fontPixel(20),
  BODY1_bold: fontPixel(18),
  BODY1_medium: fontPixel(18),
  BODY1_regular: fontPixel(18),
  BODY2_bold: fontPixel(16),
  BODY2_medium: fontPixel(16),
  BODY2_regular: fontPixel(16),
  BODY3_bold: fontPixel(14),
  BODY3_medium: fontPixel(14),
  BODY3_regular: fontPixel(14),
};
