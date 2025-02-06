import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginBottom: heightPixel(20),
    width: widthPixel(390),
    marginHorizontal: widthPixel(15),
  },
  accomView: {
    marginTop: heightPixel(15),
    width: widthPixel(390),
    height: heightPixel(199),
    borderRadius: heightPixel(12),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
  },
  mainMiddleView: {
    width: widthPixel(320),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPixel(320),
    paddingVertical: heightPixel(5),
  },
  time: {
    color: colors.grey,
    fontSize: fontSize.BODY3_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
  },
  description: {
    color: colors.black,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    paddingVertical: heightPixel(5),
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
  sideImageView: {
    paddingHorizontal: heightPixel(10),
    paddingTop: heightPixel(10),
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },
  EditCertificatesView: {
    width: Dimensions.get('screen').width,
    paddingBottom: heightPixel(20),
  },
  inputStyle: {
    height: heightPixel(150),
    textAlignVertical: 'top',
    flexWrap: 'wrap',
    marginBottom: heightPixel(20),
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
