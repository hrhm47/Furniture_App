import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    flex:1,
    paddingHorizontal: widthPixel(10),
    paddingTop:heightPixel(10)
  },

  cardView: {
    width: widthPixel(190),
    alignItems:'center',
    marginTop:heightPixel(10)
  },
  imgView: {
    width: widthPixel(190),
    alignItems:'center'
  },
  imgStyle: {
    width: widthPixel(190),
    height: widthPixel(250),
    borderRadius: 10,
  },
  buttonStyle: {
    position: 'absolute',
    // marginHorizontal: widthPixel(5),
    width: widthPixel(180),
    height: heightPixel(35),
    bottom: heightPixel(10),
    borderRadius: 6,
    backgroundColor: colors.white,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(5),
    alignSelf:'center'
  },
});
