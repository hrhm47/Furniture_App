import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: colors.offWhite,
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(15),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.pink,
  },
  eventPhotoView: {
    // marginTop: heightPixel(20),
    marginTop: heightPixel(10),
    paddingTop: heightPixel(10),
    width: SCREEN_WIDTH,
    alignItems: 'center',
    // paddingBottom: heightPixel(15),
  },
  eventCoverStyle: {
    width: widthPixel(390),
    // height: heightPixel(190),
  },
  eventTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(390),
    columnGap: widthPixel(8),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  dateTimeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  eventStyle: {
    width: widthPixel(390),
    height: heightPixel(190),
    borderRadius: 10,
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  eventHeadingView: {
    width: widthPixel(390),
    rowGap: heightPixel(15),
    alignItems: 'flex-start',
    // alignItems: 'center',
  },
  peopleAttendingView: {
    flexDirection: 'row',
    columnGap: widthPixel(8),
    alignItems: 'center',
    // justifyContent:"flex-start"
  },
});
