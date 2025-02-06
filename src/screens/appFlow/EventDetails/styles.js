import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  //eventData
  EventTopView: {
    backgroundColor: colors.background,
  },
  aboutSection: {
    width: widthPixel(390),
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  dropDownViewStyle: {
    marginTop: heightPixel(5),
    paddingHorizontal: widthPixel(10),
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
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
  myEventsButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: heightPixel(20),
  },
  myEventLeftButton: {
    width: widthPixel(190),
    height: heightPixel(60),
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderColor: colors.darkBlack,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myEventRightButton: {
    width: widthPixel(190),
    height: heightPixel(60),
    borderRadius: 30,
    backgroundColor: colors.darkBlack,
    borderColor: colors.darkBlack,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: widthPixel(10),
  },
  diamondIconStyle: {
    width: widthPixel(20),
    height: heightPixel(20),
  },
});
