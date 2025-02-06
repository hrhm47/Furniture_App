import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import Video from 'react-native-video';
import AppText from '../AppText';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFocusOnSpecificPost,
  setFullScreenPostData,
  setOpenFullScreenView,
} from '../../app/slices/postSlice';
import {widthPixel} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const HorizontalImagesVideosSwiper = ({
  ImagesVideos,
  onPress,
  setopenPostModal,
  fromView,
  style,
  eventPhotoStyle,
  imgStyle,
  videoStyle,
  postLocationInFlatlist = null,
  removeTabOnReturn = false,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const videoRef = useRef();
  const onEnd = () => {
    // Repeat the video when it ends
    videoRef.current.seek(0);
  };

  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleFocus = index => {
    setFocusedIndex(index);
  };
  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      const lastVisibleItem = viewableItems[0].index;
      // console.log('data', lastVisibleItem);
      handleFocus(lastVisibleItem);
    }
  }, []);

  return (
    <>
      <View style={[styles.topView, style]}>
        <FlatList
          data={ImagesVideos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()} // Use index as key
          pagingEnabled
          automaticallyAdjustsScrollIndicatorInsets
          renderToHardwareTextureAndroid
          persistentScrollbar={true}
          contentContainerStyle={styles.contentContainerStyle}
          onViewableItemsChanged={onViewableItemsChanged}
          renderItem={({item, index}) => {
            return (
              <View style={eventPhotoStyle}>
                {fromView == false && ImagesVideos.length > 1 && (
                  <View style={styles.imagesCountView}>
                    <AppText
                      body={`${index + 1}/${ImagesVideos.length}`}
                      style={styles.countTextStyle}
                    />
                  </View>
                )}

                {/* Render video or image */}
                <Pressable
                  style={styles.eventPhotoView}
                  onPress={() => {
                    console.log(index);
                    // dispatch(
                    //   setFullScreenPostData({
                    //     ImagesVideos: ImagesVideos,
                    //   }),
                    // );
                    if (fromView) {
                      focusedIndex === index
                        ? handleFocus(-1)
                        : handleFocus(index);
                    } else {
                      dispatch(
                        setFocusOnSpecificPost({
                          postType: postLocationInFlatlist[0],
                          postIndex: postLocationInFlatlist[1],
                        }),
                      );
                      navigation.navigate(Routes.VIEWPOST, {
                        ImagesVideos,
                        removeTabOnReturn: true,
                      });
                    }
                    // navigation.navigate(Routes.VIEWPOST);
                    // dispatch(setOpenFullScreenView(true));
                  }}>
                  {item.video ? (
                    <Video
                      source={{uri: item.video}}
                      ref={ref => (videoRef.current = ref)}
                      onEnd={onEnd}
                      //   onLoadStart={() => handleFocus(index)}
                      paused={focusedIndex !== index ? true : false}
                      controls={fromView && true}
                      repeat={true}
                      fullscreen={true}
                      resizeMode={'contain'}
                      fullScreen={true}
                      style={[styles.videoStyle, videoStyle]}
                    />
                  ) : (
                    <Image
                      source={item.img}
                      //   width={100}
                      style={[styles.eventCoverStyle, imgStyle]}
                      resizeMode="cover"
                    />
                  )}
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default HorizontalImagesVideosSwiper;
