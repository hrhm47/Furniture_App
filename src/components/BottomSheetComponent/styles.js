import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../assets';

export const styles = StyleSheet.create({
  BottomTopView: {
    flex: 1,
  },
  itemStyle: {
    marginHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    marginTop: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bottomMiddleView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: heightPixel(10),
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
});
