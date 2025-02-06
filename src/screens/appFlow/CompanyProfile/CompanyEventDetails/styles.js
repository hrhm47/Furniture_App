import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  //eventData
  EventTopView: {
    // marginTop: heightPixel(20),
    backgroundColor: colors.offWhite,
    // paddingVertical: heightPixel(10),
  },
  aboutSection: {
    width: widthPixel(390),
    // backgroundColor: 'red',
    marginHorizontal: widthPixel(15),
  },
  toggleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  selectedTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  dropDownStyle: {
    backgroundColor: colors.white,
    marginVertical: heightPixel(15),
    height: heightPixel(50),
    borderRadius: 10,
    paddingHorizontal: widthPixel(10),
  },
  dropDownViewStyle: {
    marginTop: heightPixel(5),
    paddingHorizontal: widthPixel(10),
    paddingVertical: 10,
    backgroundColor:colors.background
  },
  aboutInnerView: {},
  aboutText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
    paddingVertical: heightPixel(10),
  },
  tagOuterView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    columnGap: widthPixel(10),
    flexWrap: 'wrap',
    rowGap: heightPixel(10),
    marginBottom: heightPixel(20),
  },
  tagView: {
    backgroundColor: colors.darkBlack,
    paddingVertical: widthPixel(3),
    paddingHorizontal: widthPixel(10),
    borderRadius: 6,
  },
  tagTextColor: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.white,
    textAlign: 'center',
  },
});
