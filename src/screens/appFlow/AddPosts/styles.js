import {StyleSheet} from 'react-native';
import {colors, heightPixel} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: heightPixel(10),
  },
  inputBoxStyle: {
    height: heightPixel(320),
    backgroundColor: colors.background,
    textAlignVertical: 'top',
  },
  bottomButton: {
    position: 'absolute',
    bottom:heightPixel(15)
  },
});
