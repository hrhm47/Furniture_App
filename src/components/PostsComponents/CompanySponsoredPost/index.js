import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import {colors, widthPixel} from '../../../assets';
import PostHeader from '../../PostsHeader';
import PostFooter from '../../PostFooter';
import HorizontalImagesVideosSwiper from '../../HorizontalImagesVideosSwiper';
import CompanyProductPostComponent from '../../CompanyProductPostComponent';
import CompanyServicesPostComponent from '../../CompanyServicesPostComponent';
import DocumentViewer from '../../DocumentViewer';
import {useDispatch} from 'react-redux';

import {setOpenCompanySponsoredBottomSheet} from '../../../app/slices/postSlice';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

const CompanySponsoredPost = ({
  postData,
  postIndex,
  removeTabOnReturn = false,
}) => {
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
  }, []);

  console.log('removeTabOnReturn in company sponsored post', removeTabOnReturn);

  return (
    <>
      <View style={styles.topView}>
        <View style={{paddingHorizontal: widthPixel(10)}}>
          <PostHeader
            ProfileImage={postData?.profileLink}
            ProfileName={postData?.companyName}
            ProfileOnPress={() => {
              navigation.navigate(Routes.COMPANYPROFILE, {
                removeTabOnReturnOnHome: removeTabOnReturn
                  ? removeTabOnReturn
                  : false,
              });
              // Alert.alert(postData?.companyName);
            }}
            sponsored_date_time={'sponsored'}
            Profile_Follower_Position={`${postData?.followers} followers`}
            MoreOnPress={() => {
              dispatch(setOpenCompanySponsoredBottomSheet(true));
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
        </View>
        {postData?.companyProducts?.length > 0 && (
          <CompanyProductPostComponent
            CompanyProductPostData={postData?.companyProducts}
            removeTabOnReturn={removeTabOnReturn}
          />
        )}
        {postData?.companyServices?.length > 0 && (
          <CompanyServicesPostComponent
            CompanyServicesPostData={postData?.companyServices}
          />
        )}
        {postData?.albumCollection && (
          <View>
            <HorizontalImagesVideosSwiper
              ImagesVideos={postData?.albumCollection}
              fromView={false}
              postLocationInFlatlist={[postData?.postType, postIndex]}
              removeTabOnReturn={removeTabOnReturn}
            />
          </View>
        )}
        {postData?.documentLink !== '' && (
          <View>
            <DocumentViewer documentLink={postData?.documentLink} />
          </View>
        )}
        <View style={{}}>
          <PostFooter
            userName={postData?.companyName}
            userProfile={postData?.profileLink}
          />
        </View>
      </View>
    </>
  );
};

export default CompanySponsoredPost;
