import {StyleSheet} from 'react-native';
import {fontSize} from '../../assets/fontSize';
import {fontFamily} from '../../assets/fontFamily';
import {heightPixel} from '../../assets/constants';
import { colors } from '../../assets/colors';

export const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.BODY1_bold,
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    lineHeight: heightPixel(25),
    color:colors.darkBlack
  },
});
