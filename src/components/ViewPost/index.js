import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {styles} from './styles';
import HorizontalImagesVideosSwiper from '../HorizontalImagesVideosSwiper';
import HeaderButton from '../HeaderButton';
import {colors, images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {setOpenFullScreenView} from '../../app/slices/postSlice';
import PostFooter from '../PostFooter';
import {useNavigation, useRoute} from '@react-navigation/native';

const ViewPost = ({
  showPostInFullScreen,
  setopenPostModal,
  // removeTabOnReturn = false,
}) => {
  // console.log('postAlbumData', ImagesVideos);
  const dispatch = useDispatch();
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;
  const ImagesVideos = paramsData?.ImagesVideos;
  const navigation = useNavigation();
  // const {fullScreenPostData} = useSelector(state => state?.postSlice);
  console.log('removeTabOnReturn in view post ==> ', removeTabOnReturn);
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
      handleFocus(lastVisibleItem);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn
        ? ''
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <View style={styles.topView}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <HeaderButton
        title={'Posts'}
        companyLogo={images.companyLogo}
        leftOnPress={() => navigation.goBack()}
        leftBtnTextStyle={{color: colors.white}}
        leftIconColor={colors.white}
        isDivider={false}
      />
      <View>
        <HorizontalImagesVideosSwiper
          removeTabOnReturn={removeTabOnReturn ? removeTabOnReturn : false}
          ImagesVideos={ImagesVideos}
          // setopenPostModal={setopenPostModal}
          fromView={true}
          style={styles.horizontalMainView}
          imgStyle={styles.eventCoverStyle}
          eventPhotoStyle={styles.eventPhotoView}
          videoStyle={styles.videoStyle}
        />
      </View>
      <View style={styles.bottomView}>
        <PostFooter
          totalLike={'12'}
          fullPostView={colors.grey}
          fromView={true}
        />
      </View>
    </View>
  );
};

export default ViewPost;
