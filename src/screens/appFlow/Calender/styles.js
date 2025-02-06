import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../assets';

export const styles = StyleSheet.create({
  calendarIcons: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  squareButtonView: {
    alignSelf: 'center',
    marginBottom: heightPixel(15),
  },
  divider: {
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
  },
});
