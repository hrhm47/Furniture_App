import {StyleSheet} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../../assets/constants';
import {fontFamily} from '../../assets/fontFamily';
import {fontSize} from '../../assets/fontSize';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  titleText: {
    fontSize: fontSize.TITLE,
    fontFamily: fontFamily.Antonio,
    color: colors.darkBlack,
  },
});
