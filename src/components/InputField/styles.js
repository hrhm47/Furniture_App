import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../assets/constants';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/fontFamily';
import {fontSize} from '../../assets/fontSize';

export const styles = StyleSheet.create({
  inputView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
    height: heightPixel(50),
    borderRadius: heightPixel(10),
    backgroundColor: colors.offWhite,
    // borderColor:colors.grey,
    // borderWidth:1,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  textInput: {
    width: widthPixel(340),
    paddingLeft: widthPixel(20),
    color: colors.darkBlack,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
  },
  RichTextInput: {
    backgroundColor: colors.offWhite,
    width: widthPixel(390),
    paddingLeft: widthPixel(20),
    color: colors.darkBlack,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    textAlignVertical: 'top',
  },
});
