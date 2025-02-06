import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../../../../assets';
import {
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    // paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
  },
  addPostView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: heightPixel(15),
  },
  addPostTitleView: {
    width: widthPixel(390),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingBottom: heightPixel(10),
  },
  addPostInner1View: {
    paddingTop: heightPixel(15),
    width: widthPixel(390),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  imageStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: widthPixel(50 / 2),
  },
  iconStyle: {
    width: widthPixel(24),
    height: heightPixel(24),
  },
  addpostInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: widthPixel(27),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    // paddingVertical: heightPixel(15),
    width: widthPixel(340),
    paddingLeft: widthPixel(5),
    columnGap: 15,
  },
  cameraImageBorderView: {
    borderRightColor: colors.lightGrey,
    borderRightWidth: 1,
    paddingVertical: heightPixel(15),
    paddingHorizontal: widthPixel(15),
  },
});
