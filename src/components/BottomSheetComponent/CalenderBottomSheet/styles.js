import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';
import {SCREEN_WIDTH} from '../../../assets/constants';

export const styles = StyleSheet.create({
  BottomTopView: {
    // alignItems: 'center',
    // height:'100%'
  },
  itemStyle: {
    marginHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    marginTop: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bottomMiddleView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: heightPixel(10),
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  DeleteTopView: {
    height: heightPixel(700),
    position: 'absolute',
    zIndex: 10000,
    backgroundColor: 'red',
  },

  eventCardView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(15),
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
    width: widthPixel(280),
    paddingLeft: widthPixel(5),
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
