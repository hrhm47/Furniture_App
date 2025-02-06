import {StyleSheet} from 'react-native';
import {colors, heightPixel} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    paddingHorizontal: heightPixel(5),
    paddingVertical: heightPixel(5),
    alignItems: 'center',
  },
  flatListHorizontalItemView: {
    alignSelf: 'center',
    justifyContent: 'center',

    backgroundColor: colors.offWhite,
    height: heightPixel(35),
    paddingHorizontal: heightPixel(15),
    // marginVertical: heightPixel(10),
    borderRadius: 8,
  },
  filterTextView: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  flatListHorizontalItemText: {
    color: colors.grey,
  },
});
