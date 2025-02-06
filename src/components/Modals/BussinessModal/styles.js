import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  bussinesDetials: {
    marginHorizontal: widthPixel(15),
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    borderRadius: 10,
    paddingVertical: heightPixel(15),
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  middleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.imageGrey,
    borderBottomWidth: 1,
  },
  bussinessHeading: {
    paddingVertical: heightPixel(10),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color: colors.darkBlack,
  },
  cardInnerView: {
    width: widthPixel(390),
    marginTop: heightPixel(8),
    flexDirection: 'row',
    height: heightPixel(80),
    borderRadius: 10,
    // paddingHorizontal: widthPixel(10),
  },
  imgeview: {
    width: widthPixel(40),
    paddingTop: heightPixel(12),
  },
  cardImageStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  innerCardStyle: {
    alignSelf: 'flex-start',
    // rowGap: heightPixel(4),
  },
  detailsSubheadingText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
});
