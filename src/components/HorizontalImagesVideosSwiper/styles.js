import {Dimensions, StyleSheet} from 'react-native';
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
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  contentContainerStyle: {},
  imagesCountView: {
    width: widthPixel(61),
    height: heightPixel(30),
    backgroundColor: colors.darkBlack,
    position: 'absolute',
    zIndex: 1,
    borderRadius: heightPixel(15),
    alignItems: 'center',
    justifyContent: 'center',
    right: widthPixel(20),
    top: heightPixel(20),
  },
  countTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.white,
  },
  eventPhotoView: {
    marginTop: heightPixel(10),
  },
  eventCoverStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
  },
  videoStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
    backgroundColor: colors.black,
  },
  EventImagesVideosView: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: widthPixel(10),
    paddingBottom: widthPixel(5),
  },
  EventCoverImageStyle: {
    width: widthPixel(390),
    height: heightPixel(190),
    borderRadius: heightPixel(10),
  },
  EventVideoStyle: {
    width: widthPixel(390),
    height: heightPixel(190),
    borderRadius: heightPixel(10),
    backgroundColor: colors.black,
  },
});
