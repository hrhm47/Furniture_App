import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  setFullScreenPostData,
  setOpenFullScreenView,
} from '../../app/slices/postSlice';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import AppText from '../AppText';

const CompanyServicesPostComponent = ({CompanyServicesPostData}) => {
  //   console.log('CompanyServicesPostData', CompanyServicesPostData);
  const [focusIndex, setFocusIndex] = useState(0);
  const dispatch = useDispatch();
  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    // console.log('onViewableItemsChanged', viewableItems[0].index);
    setFocusIndex(viewableItems[0].index);
  }, []);

  return (
    <View style={styles.topView}>
      <FlatList
        data={CompanyServicesPostData}
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
            <View
              key={index + 12}
              style={{
                width: Dimensions.get('screen').width,
                paddingHorizontal: widthPixel(10),
              }}>
              <View style={styles.mainBorderView}>
                <View style={styles.imgView}>
                  <Image
                    source={item.img}
                    style={[styles.eventCoverStyle]}
                    resizeMode="cover"
                  />
                </View>

                <View style={[styles.eventTextView]}>
                  <AppText
                    body={item.comapnyServicName}
                    style={styles.ProductText}
                  />
                  <AppText
                    body={item.comapnyServiceDescription}
                    style={styles.ProductTextDescription}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />

      <View
        style={{
          columnGap: widthPixel(15),
          alignSelf: 'center',
          flexDirection: 'row',
          marginBottom: heightPixel(10),
        }}>
        {CompanyServicesPostData?.length > 1 &&
          CompanyServicesPostData?.map((item, index) => {
            return (
              <>
                <View
                  key={index + 12}
                  style={[
                    styles.circleStyle,
                    {
                      backgroundColor:
                        focusIndex == index ? colors.black : colors.imageGrey,
                    },
                  ]}
                />
              </>
            );
          })}
      </View>

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

export default CompanyServicesPostComponent;
