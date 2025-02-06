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
  MessageTopView: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
  },
  mainView: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: widthPixel(15),
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  imgStyle: {
    width: widthPixel(20),
    height: heightPixel(20),
    borderRadius: 100,
    padding: 5,
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
    width: widthPixel(300),
  },
  messageBox: {
    paddingVertical: heightPixel(15),
    flexDirection: 'row',
    columnGap: widthPixel(10),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  inputStyle: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    elevation: 6,
    height: heightPixel(100),
    borderRadius: 10,
    backgroundColor: colors.white,
    textAlignVertical: 'top',
    paddingHorizontal: widthPixel(10),
    color: colors.darkBlack,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  connectButton: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: colors.pink,
  },
  cancelButton: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
  },
});
