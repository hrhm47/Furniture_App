import {StyleSheet} from 'react-native';
import {colors, fontSize, heightPixel, widthPixel} from '../../../../assets';
import {SCREEN_WIDTH} from '../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginBottom: heightPixel(20),
    width: SCREEN_WIDTH,
    backgroundColor: colors.background,
  },
});
