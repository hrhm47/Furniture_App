import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';
import {SCREEN_WIDTH} from '../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.background,
  },
  locationView: {
    width: widthPixel(390),
    alignSelf: 'center',
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.grey,
  },
  bottomBtn: {
    position: 'absolute',
    bottom: heightPixel(20),
  },
  keyboardAwareScrollView: {
    flexGrow: 1,
    paddingBottom: heightPixel(150), // Adjust this value as needed
  },
  FlatView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(15),
    width: widthPixel(390),
  },
  locationTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(15),
    width: widthPixel(390),
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 6,
    paddingHorizontal: widthPixel(10),
    // height: heightPixel(70),
    paddingVertical: heightPixel(10),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  aboutView: {
    marginTop: heightPixel(10),
    width: widthPixel(380),
    alignSelf: 'center',
    rowGap: heightPixel(8),
    paddingBottom: heightPixel(20),
  },
  inputStyle: {
    textAlignVertical: 'top',
    height: heightPixel(140),
    backgroundColor: colors.white,
    width: widthPixel(390),
    borderRadius: 10,
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
    elevation: 5,
    paddingHorizontal: widthPixel(20),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  selectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: widthPixel(10),
  },
  imgStyle: {
    width: 18,
    height: 18,
    marginRight: widthPixel(10),
  },
  travelView: {
    width: widthPixel(390),
    alignSelf: 'center',
  },
  dropDown: {
    width: widthPixel(390),
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
    paddingVertical: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    // elevation: 5,
  },
  placeholderStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  selectedTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  tagsView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: widthPixel(380),
  },
  tagMainView: {
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(3),
    backgroundColor: colors.darkBlack,
    marginRight: widthPixel(10),
    borderRadius: 6,
  },
  mapView: {
    height: heightPixel(404),
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(20),
    overflow: 'hidden',
    borderRadius: 10,
  },
  scanner: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
