import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import PostHeader from '../../PostsHeader';
import {calulateTimeMilliSecondsToMinutes} from '../../../utils/methods/millisecondsToMints';
import PostFooter from '../../PostFooter';
import HorizontalImagesVideosSwiper from '../../HorizontalImagesVideosSwiper';
import {setOpenUserBottomSheet} from '../../../app/slices/postSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

const CelebrationPost = ({postData, postIndex, removeTabOnReturn = false}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
          ProfileName={postData?.companyName}
          ProfileOnPress={() => {
            navigation.navigate(Routes.USERPROFILE, {
              removeTabOnReturnOnHome: removeTabOnReturn
                ? removeTabOnReturn
                : false,
            });
          }}
          sponsored_date_time={calulateTimeMilliSecondsToMinutes(
            postData?.uploadDateTime,
          )}
          Profile_Follower_Position={postData?.designation}
          MoreOnPress={() => dispatch(setOpenUserBottomSheet(true))}
        />

        <AppText
          onTextLayout={onTextLayout}
          body={postData?.description}
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
      </View>
      <View style={{width: '100%'}}>
        <View style={styles.celebrationView}>
          <ImageBackground
            source={images.celebrationBackground}
            style={styles.imgBackground}
            resizeMode="cover">
            <AppText body={'Launching Porjet'} style={styles.titleText} />
          </ImageBackground>
        </View>
        {postData?.albumCollection && (
          <HorizontalImagesVideosSwiper
            ImagesVideos={postData?.albumCollection}
            fromView={false}
            postLocationInFlatlist={[postData?.postType, postIndex]}
            removeTabOnReturn={removeTabOnReturn ? removeTabOnReturn : false}
          />
        )}
      </View>

      {/* <CommentSection
          userName={postData?.companyName}
          userProfile={postData?.profileLink}
          userId={{}}
          // fromView={fromView}
        /> */}
      <View style={{}}>
        <PostFooter
          userName={postData?.companyName}
          userProfile={postData?.profileLink}
        />
      </View>
    </View>
  );
};

export default CelebrationPost;
