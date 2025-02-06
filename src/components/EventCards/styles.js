import {StyleSheet} from 'react-native';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../assets/constants';
import {colors, fontFamily, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(15),
    // backgroundColor: colors.white,
    // marginTop: heightPixel(10),
  },
  eventCardView: {
    marginTop: heightPixel(15),
  },
  innerCarView: {
    flexDirection: 'row',
    borderColor: colors.imageGrey,
    borderWidth: 1,
    marginTop: heightPixel(10),
    borderRadius: 10,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
  eventTimeView: {
    width: widthPixel(80),
    alignItems: 'center',
  },
  cardTextView: {
    width: widthPixel(290),
    paddingLeft: widthPixel(10),
  },
  ComapnyView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    paddingTop: heightPixel(10),
  },
  eventTitileText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  dateText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.grey,
  },
  timeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
  comapnyText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  comapnyProfile: {
    width: widthPixel(24),
    height: widthPixel(24),
    borderRadius: widthPixel(2),
  },
});
