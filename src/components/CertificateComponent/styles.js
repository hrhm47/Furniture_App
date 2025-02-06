import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  accomView: {
    marginTop: heightPixel(15),
    width: widthPixel(390),
    alignSelf: 'center',
    // height: heightPixel(119),
    borderRadius: heightPixel(12),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    paddingVertical:heightPixel(5)
    // justifyContent: 'space-between',
  },
  mainMiddleView: {
    width: widthPixel(320),
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
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
    // marginLeft: widthPixel(15),
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
    // marginTop: heightPixel(10),
  },
  experieneView: {
    flexDirection: 'row',
    width: widthPixel(310),
  },
  
});
