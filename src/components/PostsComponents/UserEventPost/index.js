import {Alert, Image, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, fontSize, images, widthPixel} from '../../../assets';
import PostHeader from '../../PostsHeader';
import {calulateTimeMilliSecondsToMinutes} from '../../../utils/methods/millisecondsToMints';
import PostFooter from '../../PostFooter';
import OrganizerComponent from '../../OrganizerComponent';
import MainButton from '../../MainButton';
import HorizontalImagesVideosSwiper from '../../HorizontalImagesVideosSwiper';
import {setOpenUserBottomSheet} from '../../../app/slices/postSlice';
import {useDispatch} from 'react-redux';
import {SCREEN_WIDTH} from '../../../assets/constants';
import {Routes} from '../../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import EventImagesVideosSwiper from '../../HorizontalImagesVideosSwiper/EventImagesVideosSwiper';
import {eventsData} from '../../../utils/data/JsonData';

const UserEventPost = ({postData, postIndex, removeTabOnReturn = false}) => {
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
    <>
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
          <View style={styles.eventPhotoView}>
            {postData?.albumCollection && (
              <View>
                <EventImagesVideosSwiper
                  ImagesVideos={postData?.albumCollection}
                  fromView={false}
                  postLocationInFlatlist={[postData?.postType, postIndex]}
                  removeTabOnReturn={
                    removeTabOnReturn ? removeTabOnReturn : false
                  }
                  // eventPhotoStyle={}
                  // imgStyle={styles.eventCoverStyle}
                  // eventPhotoStyle={styles.eventPhotoStyle}
                  // videoStyle={styles.eventCoverStyle}
                />
              </View>
            )}
            {/* Thursday, 22 February - 05:30pm */}
            <View style={styles.eventTitleView}>
              <Image
                source={images.calendar}
                style={styles.imgStyle}
                tintColor={colors.imageGrey}
              />
              <AppText
                body={'Thursday, 22 February - 05:30pm'}
                style={styles.dateTimeText}
              />
            </View>
            <TouchableOpacity
              style={styles.eventHeadingView}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                  eventsParamsData: eventsData[0]?.eventData[0],
                  myEvents: false,
                  removeTabOnReturn: removeTabOnReturn,
                });
              }}>
              <AppText
                body={
                  'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra.'
                }
              />
              <TouchableOpacity
                style={styles.peopleAttendingView}
                onPress={() => {
                  navigation.navigate(Routes.EVENTPEOPLELIST, {
                    headingName: 'Attendess',
                    createGroupButton: false,
                    removeTabOnReturn: removeTabOnReturn
                      ? removeTabOnReturn
                      : false,
                  });
                }}>
                <Image
                  source={images.peopleAttending}
                  style={styles.imgStyle}
                  tintColor={colors.imageGrey}
                />
                <AppText
                  body={'372 people attending'}
                  style={[
                    styles.dateTimeText,
                    {fontSize: fontSize.BODY2_medium},
                  ]}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <OrganizerComponent onPress={() => Alert.alert('Comapny Name')} />

            <MainButton
              title={'Attend'}
              buttonColor={colors.black}
              textColor={colors.white}
              onPress={() => Alert.alert('Attend')}
            />
          </View>
        </View>
        <View style={{}}>
          <PostFooter
            userName={postData?.userName}
            userProfile={postData?.profileLink}
          />
        </View>
      </View>
    </>
  );
};

export default UserEventPost;
