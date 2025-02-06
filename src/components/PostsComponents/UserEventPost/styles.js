import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    // width: '100%',
    // paddingHorizontal: widthPixel(15),
    backgroundColor: colors.white,
    marginBottom: heightPixel(10),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.black,
    textAlign: 'justify',
  },
  eventPhotoView: {
   
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignItems: 'center',
    borderRadius: heightPixel(10),
  },
  eventPhotoStyle: {
    width: widthPixel(390),
    height:heightPixel(190),
    columnGap:10,
    backgroundColor:"red",
  },
  eventCoverStyle: {
    height: heightPixel(190),
    // marginLeft:10,
  },
  eventTitleView: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    columnGap: widthPixel(8),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  dateTimeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  eventHeadingView: {
    width: widthPixel(380),
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
  sheettopView: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    height: heightPixel(250),
    bottom: 0,
  },
  bottomsheetcontainerstyle: {},
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
});
