import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginVertical: heightPixel(10),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    // marginBottom:heightPixel(10)
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.pink,
  },
  diamondStyle: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  cardView: {
    //   marginBottom: 10,
  },
  cardInnerView: {
    width: widthPixel(390),
    marginTop: heightPixel(15),
    flexDirection: 'row',
    height: heightPixel(80),
    borderColor: colors.imageGrey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  imgeview: {
    width: widthPixel(40),
    paddingTop: heightPixel(1),
  },
  cardImageStyle: {
    width: widthPixel(26),
    height: widthPixel(26),
  },
  innerCardStyle: {
    alignSelf: 'flex-start',
    rowGap: heightPixel(4),
  },
  detailsSubheadingText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
});
