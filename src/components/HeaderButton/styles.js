import {Dimensions, Platform, StyleSheet} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../../assets/constants';
import {colors} from '../../assets/colors';
import {fontFamily, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    paddingTop: Platform.OS == 'android' && heightPixel(20),
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    marginBottom: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
  midleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: fontSize.BODY1_bold,
    paddingLeft: widthPixel(5),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
  },
  divider: {
    width: widthPixel(390),
    marginHorizontal: widthPixel(15),
    borderColor: colors.lightGrey,
    opacity: 0.9,
    borderWidth: 0.5,
    // backgroundColor: colors.lightGrey,
  },
  image: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  rightbtn: {
    width: widthPixel(100),
    height: heightPixel(40),
    backgroundColor: colors.black,
    borderRadius: heightPixel(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPixel(4),
  },
  rightBtnText: {
    color: colors.white,
    fontSize: fontSize.BODY2_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
  },
  MessagesView: {
    position: 'absolute',
    backgroundColor: colors.pink,
    height: heightPixel(20),
    width: heightPixel(20),
    borderRadius: heightPixel(20),
    left: 10,
    bottom: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY3_bold,
    textAlign: 'center',
    color: colors.white,
  },
  CalendarEventView: {
    flexDirection: 'row',
    width: widthPixel(140),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarButtons: {
    width: heightPixel(90),
    height: heightPixel(40),
    backgroundColor: colors.black,
    borderRadius: heightPixel(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPixel(2),
  },
});
