import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../assets';
import {SCREEN_WIDTH} from '../../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: heightPixel(10),
    // alignItems: 'center',
  },
  inputBoxStyle: {
    height: heightPixel(200),
    backgroundColor: colors.background,
    textAlignVertical: 'top',
  },
  viewStyle: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  optionTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(15)},
  eventListingView: {
    width: widthPixel(390),
    alignSelf: 'center',
  },
  eventCardView: {
    marginTop: heightPixel(15),
    paddingHorizontal: widthPixel(5),
  },
  innerCarView: {
    width: widthPixel(350),
    flexDirection: 'row',
    borderColor: colors.imageGrey,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(5),
  },
  eventTimeView: {
    width: widthPixel(85),
    alignItems: 'center',
  },
  cardTextView: {
    width: widthPixel(250),
  },
  ComapnyView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    paddingTop: heightPixel(10),
  },
  eventTitileText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.pink,
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
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
});
