import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
  },
  cardView: {
    backgroundColor: colors.white,
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightPixel(62),
    paddingHorizontal: widthPixel(15),
    borderRadius: heightPixel(10),
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  innerStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(15),
  },
  icontyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(30),
    alignSelf: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.pink,
    height: heightPixel(60),
    borderRadius: 30,
    paddingHorizontal: widthPixel(20),
    columnGap: widthPixel(20),
  },
  logoutText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color: colors.white,
  },
});
