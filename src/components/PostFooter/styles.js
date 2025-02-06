import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';
import {SCREEN_WIDTH} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    // width: widthPixel(390),

    width: SCREEN_WIDTH,
    marginTop: heightPixel(10),
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(10),
  },
  viewAllCommentsText: {
    paddingVertical: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  likeCommentView: {
    paddingTop: heightPixel(10),
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(5),
  },
  footerAboveView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(5),
    marginBottom: heightPixel(5),
  },
  hitBtnView: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  onlyLikeView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    marginBottom: heightPixel(5),
  },
  commentCountRepostView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    marginBottom: heightPixel(5),
  },
  footerAboveTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  commentMainView: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    columnGap: widthPixel(8),
    paddingVertical: heightPixel(5),
  },
  imgView: {
    width: widthPixel(40),
    height: heightPixel(40),
  },
  commentImageStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
    borderRadius: widthPixel(32),
  },
  inputStyle: {
    width: widthPixel(300),
    maxHeight: heightPixel(100),
    textAlignVertical: 'center',
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  commnetView: {
    width: widthPixel(300),
  },
  commentSectionNamesDate: {
    flexDirection: 'row',
    columnGap: widthPixel(20),
    // justifyContent:'space-evenly',
  },
  nameTextStyle: {
    width: widthPixel(130),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.black,
  },
  dateTimeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
  messageText: {
    // width: widthPixel(130),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  inputCommentView: {
    // width: widthPixel(390),
    marginTop: heightPixel(10),
    paddingTop: heightPixel(5),
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',

    columnGap: widthPixel(10),
  },
});
