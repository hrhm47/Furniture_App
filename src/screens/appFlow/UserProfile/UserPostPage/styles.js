import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {},
  flatListHorizontalItemView: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    paddingHorizontal: heightPixel(15),
    height: heightPixel(35),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    borderRadius: 10,
  },
  filterTextView: {
    backgroundColor: 'transparent',
    paddingHorizontal: heightPixel(1),
  },
  flatListHorizontalItemText: {
    color: colors.white,
  },
  PagePostTopView: {
    marginBottom: heightPixel(20),
  },
});
