import {StyleSheet} from 'react-native';
import { colors, fontFamily, fontSize, heightPixel, widthPixel } from '../../../../assets';
import { SCREEN_WIDTH } from '../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    // marginBottom: heightPixel(20),
    width: SCREEN_WIDTH,
    backgroundColor: colors.background,
  },
  networkInvitationButtonView: {
    marginTop: heightPixel(25),
    marginBottom: heightPixel(15),
    marginHorizontal: widthPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  networkButtonStyles: {
    backgroundColor: colors.darkBlack,
    height: heightPixel(80),
    padding: widthPixel(10),
    borderRadius: 10,
  },
  myRequestText: {
    marginTop: heightPixel(15),
    width:widthPixel(390),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.grey,
  },
});
