import {StyleSheet} from 'react-native';
import {
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../../assets/constants';
import {colors, fontFamily, fontSize} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.background,
  },
  headingStyle: {
    color: colors.grey,
    paddingLeft: widthPixel(10),
  },
  eventCardView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(10),
  },
  innerCarView: {
    flexDirection: 'row',
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginTop: heightPixel(15),
    borderRadius: 10,
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
  },
  eventTimeView: {
    width: widthPixel(70),
    // alignItems: 'center',
  },
  cardTextView: {
    width: widthPixel(300),
    paddingLeft: widthPixel(10),
    justifyContent:'center'
  },
  ComapnyView: {
    flexDirection: 'row',
    columnGap:10,
    paddingVertical: heightPixel(5),
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
    flexWrap:'wrap',
    width:widthPixel(270),
  },
  comapnyText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  comapnyProfile: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  sideImage: {
    width: widthPixel(70),
    height: widthPixel(70),
    borderRadius: 10,
  },
  cancelButton: {
    alignSelf:"center",
    height: heightPixel(40),
    width: widthPixel(370),
  },
});
