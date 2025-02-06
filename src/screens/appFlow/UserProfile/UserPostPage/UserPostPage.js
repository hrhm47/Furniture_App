import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import HeaderButton from '../../../../components/HeaderButton';
import {
  userBottomModalDataForConnections,
  userProfileData,
} from '../../../../utils/data/JsonData';
import {PostsComponents} from '../../../../components/PostsComponents';
import ViewPost from '../../../../components/ViewPost';
import AppBackground from '../../../../components/AppBackground';
import BottomSheetForCompany from '../../../../components/BottomSheetComponent/BottomSheetForCompany';
import BottomSheetForSponsoredPost from '../../../../components/BottomSheetComponent/BottomSheetForSponsoredPosts';
import BottomSheetForUser from '../../../../components/BottomSheetComponent/BottomSheetForUser';

const UserPostPage = () => {
  const navigation = useNavigation();
  const routeParams = useRoute()?.params;
  const dispatch = useDispatch();
  const removeTabOnReturn = routeParams?.removeTabOnReturn;
  console.log(
    'removeTabOnReturn={removeTabOnReturn ? removeTabOnReturn : false}',
    removeTabOnReturn,
  );

  const {
    openFullScreenView,
    fullScreenPostData,
    openCompanyBottomSheet,
    openCompanySponsoredBottomSheet,
    openUserBottomSheet,
  } = useSelector(state => state?.postSlice);
  const [selectedFilter, setSelectedFilter] = useState('Events');

  const [inputData, setInputData] = useState('');
  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <View style={styles.PagePostTopView}>
          <HeaderButton
            title={
              routeParams?.headingName ? routeParams?.headingName : 'Posts'
            }
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            isDivider={false}
          />

          {/* posts data */}
          <FlatList
            data={userProfileData}
            style={{}}
            renderToHardwareTextureAndroid={true}
            directionalLockEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '30%'}}
            renderItem={({item}) => {
              const PostComponent = PostsComponents[item.postType];
              if (PostComponent) {
                return (
                  <PostComponent
                    postData={item?.postData}
                    removeTabOnReturn={true}
                  />
                );
              } else {
                return null;
              }
            }}
          />
        </View>

        {/* <PostBottomSheet /> */}

        {openFullScreenView && fullScreenPostData && (
          <ViewPost ImagesVideos={fullScreenPostData} />
        )}
        {openCompanyBottomSheet && (
          <BottomSheetForCompany removeTabOnReturn={true} />
        )}
        {openCompanySponsoredBottomSheet && (
          <BottomSheetForSponsoredPost removeTabOnReturn={true} />
        )}
        {openUserBottomSheet && (
          <BottomSheetForUser
            bottomData={userBottomModalDataForConnections}
            removeTabOnReturn={true}
          />
        )}
      </AppBackground>
    </>
  );
};

export default UserPostPage;
