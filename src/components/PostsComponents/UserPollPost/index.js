import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, widthPixel} from '../../../assets';
import PostHeader from '../../PostsHeader';
import {calulateTimeMilliSecondsToMinutes} from '../../../utils/methods/millisecondsToMints';
import PostFooter from '../../PostFooter';
import HorizontalImagesVideosSwiper from '../../HorizontalImagesVideosSwiper';
import PollPostComponent from '../../PollPostComponent';
import {setOpenUserBottomSheet} from '../../../app/slices/postSlice';
import {useDispatch} from 'react-redux';
import {Routes} from '../../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';

const UserPollPost = ({postData, postIndex, removeTabOnReturn = false}) => {
  const navigation = useNavigation();
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
    <View style={styles.topView}>
      <View style={{paddingHorizontal: widthPixel(10)}}>
        <PostHeader
          ProfileImage={postData?.profileLink}
          ProfileName={postData?.userName}
          ProfileOnPress={() => {
            // Alert.alert(postData?.userName);
            navigation.navigate(Routes.USERPROFILE, {
              removeTabOnReturnOnHome: removeTabOnReturn
                ? removeTabOnReturn
                : false,
            });
          }}
          Profile_Follower_Position={postData?.designation}
          sponsored_date_time={calulateTimeMilliSecondsToMinutes(
            postData?.uploadDateTime,
          )}
          MoreOnPress={() => {
            dispatch(setOpenUserBottomSheet(true));
          }}
        />
        <AppText
          onTextLayout={onTextLayout}
          body={postData?.pollHeading}
          //   numberOfLines={textShown ? undefined : 3}
          style={styles.titleText}
        />
        <AppText
          onTextLayout={onTextLayout}
          body={postData?.pollSubheading}
          numberOfLines={textShown ? undefined : 3}
          style={styles.description}
        />

        <PollPostComponent PollPostComponentData={postData?.pollData} />
      </View>
      {postData?.albumCollection && (
        <View>
          <HorizontalImagesVideosSwiper
            ImagesVideos={postData?.albumCollection}
            fromView={false}
            removeTabOnReturn={removeTabOnReturn ? removeTabOnReturn : false}
          />
        </View>
      )}
      <View style={{}}>
        <PostFooter
          userName={postData?.userName}
          userProfile={postData?.profileLink}
        />
      </View>
    </View>
  );
};

export default UserPollPost;
