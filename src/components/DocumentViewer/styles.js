import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: Dimensions.get('screen').width,
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  documentViewerTop: {
    backgroundColor: colors.offWhite,
    borderRadius: heightPixel(12),
    width: widthPixel(380),
    paddingTop: heightPixel(10),
  },
  documentViewer: {
    //   height: heightPixel(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:"center"
  },
  RFPTextView: {
    // backgroundColor: 'red',
    flexWrap: 'wrap',
    paddingHorizontal: widthPixel(10),
  },
  documentTitle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
  },
  documentDescripton: {
    flexWrap: 'wrap',
    width: widthPixel(240),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
  },
  imgView: {
    // width: widthPixel(100),
    // height:widthPixel(100)
  },
  imgStyle: {
    width: widthPixel(110),
    height: widthPixel(110),
  },
  linkView: {
    marginTop: heightPixel(15),
    width: widthPixel(380),
    height: heightPixel(50),
    backgroundColor: colors.darkBlack,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPixel(5),
    flexDirection: 'row',
    // columnGap: widthPixel(10),
    borderBottomLeftRadius: heightPixel(12),
    borderBottomRightRadius: heightPixel(12),
  },
  linkText: {
    color: colors.white,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
  },
  imgStylee: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
});
