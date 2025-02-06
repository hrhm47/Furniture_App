import {Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors, fontFamily, fontSize, images} from '../../assets';
import AppText from '../AppText';
import CommentSection from './CommentSection';
import {useNavigation} from '@react-navigation/native';

const PostFooter = ({
  totalLike,
  likeOnPress,
  totalComment,
  commentOnPress,
  repostOnPress,
  sendOnPress,
  fullPostView,
  userName,
  userProfile,
  userId,
  fromView,
  focusedCommentSection = false,
}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [send, setsend] = useState(false);
  const [repost, setRepost] = useState(false);

  return (
    <View
      style={[styles.topView, fromView && {backgroundColor: colors.darkBlack}]}>
      <View style={styles.footerAboveView}>
        <View style={styles.onlyLikeView}>
          {!liked && (
            <>
              <Image
                source={liked ? images.like : images.likeFilled}
                style={styles.hitBtnView}
              />
              <AppText body={'1 Like'} style={styles.footerAboveTextStyle} />
            </>
          )}
        </View>
        <View style={styles.commentCountRepostView}>
          {!comment && (
            <AppText
              body={'122 commnets'}
              style={styles.footerAboveTextStyle}
            />
          )}
          {!repost && (
            <AppText
              body={'. 23 reposts'}
              style={styles.footerAboveTextStyle}
            />
          )}
        </View>
      </View>

      <View style={styles.likeCommentView}>
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.btnView}>
          <Image
            source={liked ? images.like : images.likeFilled}
            style={styles.hitBtnView}
          />
          <AppText
            body={liked ? 'Like' : 'Liked'}
            style={[
              styles.footerAboveTextStyle,
              {fontSize: fontSize.BODY2_medium},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setComment(!comment);
            fromView && navigation.goBack();
          }}
          style={styles.btnView}>
          <Image
            source={images.comment}
            style={styles.hitBtnView}
            tintColor={fullPostView}
          />
          <AppText
            body={'comments'}
            style={[
              styles.footerAboveTextStyle,
              {fontSize: fontSize.BODY2_medium},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRepost(!repost)}
          style={styles.btnView}>
          <Image
            source={images.repost}
            style={styles.hitBtnView}
            tintColor={fullPostView}
          />
          <AppText
            body={'repost'}
            style={[
              styles.footerAboveTextStyle,
              {fontSize: fontSize.BODY2_medium},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setsend(!send)} style={styles.btnView}>
          <Image
            source={images.send}
            style={styles.hitBtnView}
            tintColor={fullPostView}
          />
          <AppText
            body={'send'}
            style={[
              styles.footerAboveTextStyle,
              {fontSize: fontSize.BODY2_medium},
            ]}
          />
        </TouchableOpacity>
      </View>
      {!fromView && (
        <CommentSection
          userName={userName}
          userProfile={userProfile}
          userId={{}}
          fromView={fromView}
          focusedCommentSection={focusedCommentSection}
        />
      )}
    </View>
  );
};

export default PostFooter;
