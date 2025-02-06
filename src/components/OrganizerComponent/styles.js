import {StyleSheet} from 'react-native';
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
    marginTop: heightPixel(10),
    // marginBottom: heightPixel(10),
    width: widthPixel(390),
    height: heightPixel(80),
    backgroundColor: colors.lightGrey,
    paddingVertical: heightPixel(10),
    rowGap: heightPixel(10),
    paddingLeft: widthPixel(20),
    borderRadius: heightPixel(10),
    borderColor: colors.lightGrey,
  },
  oragnizerText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.grey,
  },
  companyText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_medium,
    color: colors.darkBlack,
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  peopleAttendingView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    alignItems: 'center',
  },
});
