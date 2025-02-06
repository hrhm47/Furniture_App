import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors} from '../../../assets';
import PostHeader from '../../PostsHeader';
import {calulateTimeMilliSecondsToMinutes} from '../../../utils/methods/millisecondsToMints';
import PostFooter from '../../PostFooter';
import HorizontalImagesVideosSwiper from '../../HorizontalImagesVideosSwiper';
import PostTags from '../../PostTags';
import {useDispatch} from 'react-redux';
import {setOpenUserBottomSheet} from '../../../app/slices/postSlice';

const ArticlePost = ({postData, postIndex, removeTabOnReturn = false}) => {
  const dispatch = useDispatch();

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);

  return (
    <>
      <View style={styles.topView}>
        <PostHeader
          ProfileImage={postData?.profileLink}
          ProfileName={postData?.userName}
          ProfileOnPress={() => {
            Alert.alert(postData?.userName);
          }}
          sponsored_date_time={calulateTimeMilliSecondsToMinutes(
            postData?.uploadDateTime,
          )}
          Profile_Follower_Position={postData?.designation}
          MoreOnPress={() => dispatch(setOpenUserBottomSheet(true))}
        />

        <AppText body={postData?.articleTitle} />

        <AppText
          onTextLayout={onTextLayout}
          body={postData?.articleDescription}
          numberOfLines={textShown ? undefined : 3}
          style={styles.description}
        />

        {lengthMore ? (
          <AppText
            onPress={toggleNumberOfLines}
            style={[styles.description, {color: colors.grey}]}
            body={textShown ? 'Read less...' : 'Read more...'}
          />
        ) : null}
        {/* {postData?.albumCollection && (
        <View>
          <HorizontalImagesVideosSwiper
            ImagesVideos={postData?.albumCollection}
            fromView={false}
          />
        </View>
      )} */}
        <PostTags tagsCollection={postData?.articleTags} />
      </View>
      <View>
        <PostFooter
          userName={postData?.userName}
          userProfile={postData?.profileLink}
        />
      </View>
    </>
  );
};

export default ArticlePost;
