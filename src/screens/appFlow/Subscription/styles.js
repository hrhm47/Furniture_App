import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../assets';
import { SCREEN_WIDTH } from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(5),
    width: SCREEN_WIDTH,
    paddingHorizontal:widthPixel(15)
  },
  titleView: {
    paddingHorizontal: widthPixel(10),
    // paddingTop: widthPixel(10),
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.6,
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  titleText: {
    // marginTop: heightPixel(10),
    marginLeft:widthPixel(-10)
  },
  flatView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: heightPixel(15),
  },
  desc: {
    color: colors.offWhite,
    paddingLeft: widthPixel(15),
    width: widthPixel(370),
  },
  buttonView: {position: 'absolute', bottom: heightPixel(30)},
});
