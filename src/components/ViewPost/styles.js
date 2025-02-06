import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
    marginBottom: heightPixel(10),
    paddingTop:
      Platform.OS == 'android' ? StatusBar.currentHeight - 15 : heightPixel(60),
    justifyContent: 'space-between',
    backgroundColor: colors.darkBlack,
    paddingHorizontal: widthPixel(4),
  },
  horizontalMainView: {
    width: Dimensions.get('screen').width,
  },
  eventPhotoView: {
    // marginTop: heightPixel(10),
    // marginRight: widthPixel(5),
    // marginLeft: widthPixel(2),
    borderRadius: heightPixel(10),
  },
  eventCoverStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
    // borderRadius: heightPixel(10),
  },
  videoStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
    // borderRadius: heightPixel(10),
    backgroundColor: colors.black,
  },
  bottomView: {
    paddingBottom: heightPixel(40),
  },
});
