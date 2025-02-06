import {StyleSheet} from 'react-native';
import {colors, heightPixel} from '../../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    paddingBottom: heightPixel(20),
    backgroundColor: colors.background,
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'cover',
  },
});
