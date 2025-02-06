import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginLeft: widthPixel(15),
    marginVertical: heightPixel(10),
    flexDirection: 'row',
  },
  mainView: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    maxWidth: widthPixel(370),
    flexWrap: 'wrap',
    backgroundColor: colors.offWhite,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(15),
  },
  messageText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
  },
  timeText: {
    paddingVertical: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
  requestedView: {
    marginBottom: heightPixel(15),
    width: widthPixel(280),
    height: widthPixel(260),
  },
  requestedCoverPhotoStyle: {
    width: widthPixel(270),
    height: widthPixel(250),
    borderRadius: widthPixel(10),
  },
  bottomView: {position: 'absolute', bottom: 10, alignSelf: 'center'},
  buttonStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: widthPixel(250),
    height: heightPixel(32),
    borderRadius: 8,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  requestedButtonStyle: {
    width: widthPixel(250),
    height: heightPixel(32),
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceButtonStyle: {
    width: widthPixel(370),
    height: heightPixel(32),
    borderRadius: 8,
    backgroundColor: colors.darkBlack,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },

  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  reviewText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
  },
  serviceRequestView: {
    width: widthPixel(390),
    alignSelf: 'center',
  },
  serviceborderView: {
    backgroundColor: colors.offWhite,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
  },
  servicesInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    alignItems: 'center',
    paddingTop: heightPixel(10),
  },
  serciveImgView: {
    width: widthPixel(70),
    height: heightPixel(70),
    backgroundColor: colors.cyanLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceImgStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  servicesTextView: {
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  description: {
    marginTop: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
});
