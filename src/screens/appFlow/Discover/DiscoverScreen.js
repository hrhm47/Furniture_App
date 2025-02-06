import {
  Alert,
  BackHandler,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import {images} from '../../../assets';
import {
  useNavigation,
  DrawerActions,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';

import {useDrawerStatus} from '@react-navigation/drawer';
import SearchComponent from '../../../components/SearchComponent';
import {
  filterData,
  postsData,
  userBottomModalDataForConnections,
  userBottomModalDataToRemoveConnections,
} from '../../../utils/data/JsonData';
import HorizontalFilterComponent from '../../../components/HorizontalFilterComponent';
import {PostsComponents} from '../../../components/PostsComponents';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheetForCompany from '../../../components/BottomSheetComponent/BottomSheetForCompany';
import BottomSheetForSponsoredPost from '../../../components/BottomSheetComponent/BottomSheetForSponsoredPosts';
import BottomSheetForUser from '../../../components/BottomSheetComponent/BottomSheetForUser';
import {Routes} from '../../../navigation/Routes';
import MessageModal from '../../../components/Modals/MessageModal';
import {
  setOpenBlockUserPostAccount,
  setOpenDeleteModal,
  setOpenMessageModal,
} from '../../../app/slices/postSlice';
import DeleteModal from '../../../components/Modals/DeleteModal/DeleteModal';

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFilterPress = useCallback(item => {
    setSelectedFilter(item.name);
  }, []);
  const {
    openFullScreenView,
    fullScreenPostData,
    openCompanyBottomSheet,
    openCompanySponsoredBottomSheet,
    openUserBottomSheet,
    openMessageModal,
    blockUserPostAccount,
    focusOnSpecificPost,
  } = useSelector(state => state?.postSlice);
  const [selectedFilter, setSelectedFilter] = useState('Events');

  const [inputData, setInputData] = useState('');
  const [myFocusedIndexForCommentSection, setMyFocusedIndexForCommentSection] =
    useState('');
  const isDrawerOpen = useDrawerStatus();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const isFocused = useIsFocused();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    // const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
    //   setKeyboardVisible(true);
    // });
    // const keyboardHid = Keyboard.addListener('keyboardDidHide', () => {
    //   setKeyboardVisible(false);
    // });

    if (isFocused) {
      // setMyFocusedIndexForCommentSection(focusOnSpecificPost?.postIndex);
      // flatListRef.current.scrollToIndex({
      //   index: focusOnSpecificPost?.postIndex,
      //   animate: true,
      //   viewPosition: 0.5,
      //   viewOffset: 0,
      // });
    }
    // return () => {
    //   keyboardHid.remove();
    //   keyboardShow.remove();
    // };
  }, [isFocused]);

  // const getItemLayout = (data, index) => ({
  //   length: 100, // Height of each item
  //   offset: 100 * 2, // Height of each item times index
  //   index,
  // });

  // const onScrollToIndexFailed = info => {
  //   flatListRef.current.scrollToOffset({
  //     offset: info.averageItemLength * info.index,
  //     animated: true,
  //   });
  //   setTimeout(() => {
  //     if (
  //       flatListRef.current !== null &&
  //       focusOnSpecificPost?.postIndex !== ''
  //     ) {
  //       flatListRef.current.scrollToIndex({
  //         index: focusOnSpecificPost?.postIndex,
  //         animated: true,
  //         viewPosition: 1,
  //       });
  //     }
  //   }, 100);
  // };

  return (
    <>
      <AppBackground
        statusBarColor={
          isDrawerOpen === 'closed' ? 'dark-content' : 'light-content'
        }>
        <View style={styles.topView}>
          <Header
            title={'BEDNET'}
            leftIcon={images.menu}
            leftPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
            rightIcon={images.notification}
            rightPress={() => navigation.navigate(Routes.NOTIFICATIONS)}
          />
          {/* search functionaliyt */}
          <SearchComponent
            placeholder={'Search...'}
            value={inputData}
            onChangeText={setInputData}
          />
          <View style={{}}>
            <FlatList
              data={filterData}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{marginTop: 5, marginBottom: 5}}
              contentContainerStyle={{columnGap: 3}}
              renderItem={({item}) => {
                return (
                  <HorizontalFilterComponent
                    item={item}
                    selectedFilter={selectedFilter}
                    onPress={() => {
                      setSelectedFilter(item.name);
                    }}
                  />
                );
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}}>
              <ScrollView style={{flexGrow: 1}}>
                <FlatList
                  ref={flatListRef}
                  data={postsData}
                  renderToHardwareTextureAndroid={true}
                  directionalLockEnabled={true}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={
                    keyboardVisible && {
                      paddingBottom: '90%',
                    }
                  }
                  initialScrollIndex={0}
                  // getItemLayout={getItemLayout}
                  // onScrollToIndexFailed={onScrollToIndexFailed}
                  renderItem={({item, index}) => {
                    // console.log(item.postType);
                    const PostComponent = PostsComponents[item.postType];
                    if (PostComponent) {
                      return (
                        <PostComponent
                          postData={item?.postData}
                          postIndex={index}
                          // focusedPost={index == myFocusedIndexForCommentSection}
                        />
                      );
                    } else {
                      return null;
                    }
                  }}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>

        {/* <PostBottomSheet /> */}
      </AppBackground>
      {openFullScreenView && fullScreenPostData && (
        <ViewPost ImagesVideos={fullScreenPostData} />
      )}
      {openCompanyBottomSheet && (
        <BottomSheetForCompany removeTabOnReturn={false} />
      )}
      {openCompanySponsoredBottomSheet && (
        <BottomSheetForSponsoredPost removeTabOnReturn={false} />
      )}
      {openUserBottomSheet && (
        <BottomSheetForUser
          bottomData={userBottomModalDataForConnections}
          removeTabOnReturn={false}
        />
      )}
      {openMessageModal && (
        <MessageModal
          rightButtonOnPress={() => dispatch(setOpenMessageModal(false))}
          leftButtonOnPress={() => dispatch(setOpenMessageModal(false))}
        />
      )}
      {blockUserPostAccount && (
        <DeleteModal
          leftButtonOnPress={() => {
            dispatch(setOpenBlockUserPostAccount(false));
          }}
          rightButtonOnPress={() => {
            dispatch(setOpenBlockUserPostAccount(false));
          }}
        />
      )}
    </>
  );
};

export default DiscoverScreen;
