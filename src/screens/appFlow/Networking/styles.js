import {StyleSheet} from 'react-native';
import {colors, heightPixel} from '../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.background,
    flex: 1,
    // paddingTop:heightPixel(23)
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
});
