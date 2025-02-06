import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, images} from '../../assets';
import {
  setFullScreenPostData,
  setOpenFullScreenView,
} from '../../app/slices/postSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const CompanyProductPostComponent = ({
  CompanyProductPostData,
  removeTabOnReturn = false,
}) => {
  //   console.log('CompanyProductPostComponent', CompanyProductPostData);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.topView}>
      <FlatList
        data={CompanyProductPostData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Use index as key
        pagingEnabled
        automaticallyAdjustsScrollIndicatorInsets
        renderToHardwareTextureAndroid
        persistentScrollbar={true}
        contentContainerStyle={styles.contentContainerStyle}
        // onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item, index}) => {
          return (
            <View>
              <View style={styles.imagesCountView}>
                <AppText
                  body={`${index + 1}/${CompanyProductPostData.length}`}
                  style={styles.countTextStyle}
                />
              </View>

              {/* Render video or image */}
              <Pressable
                style={[styles.eventPhotoView]}
                onPress={() => {
                  dispatch(
                    setFullScreenPostData({
                      ImagesVideos: CompanyProductPostData,
                    }),
                  );
                  navigation.navigate(Routes.VIEWPOST, {
                    ImagesVideos: CompanyProductPostData,
                    removeTabOnReturn: removeTabOnReturn,
                  });
                  // dispatch(setOpenFullScreenView(true));
                  //   if (openFullScreenView) {
                  //     focusedIndex === index
                  //       ? handleFocus(-1)
                  //       : handleFocus(index);
                  //   }
                }}>
                <Image
                  source={item.img}
                  style={[styles.eventCoverStyle]}
                  resizeMode="cover"
                />
              </Pressable>
              <View style={styles.ProductTextView}>
                <AppText
                  body={`${item.companyProductName}`}
                  style={styles.countTextStyle}
                />
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.linkView} onPress={() => {}}>
        <AppText body={'Learn more '} style={styles.linkText} />
        <Image
          source={images.learnMore}
          style={styles.imgStylee}
          tintColor={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CompanyProductPostComponent;
