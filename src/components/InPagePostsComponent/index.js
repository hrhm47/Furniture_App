import {Alert, FlatList, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {companyProfileData, dummyPagePost, reactionsList} from '../../utils/data/JsonData';
import {colors, fontSize, images, widthPixel} from '../../assets';
import {heightPixel} from '../../assets/constants';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import ViewAllButton from '../ViewAllButton';

const InPagePostsComponent = ({
  heading,
  PressCard,
  pagePostData,
  viewAllButtonPress,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <View style={styles.bussinesDetials}>
        <AppText body={heading} style={styles.bussinessHeading} />
      </View>
      <View style={styles.cardOuterView}>
        <FlatList
          data={pagePostData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: heightPixel(8)}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.cardView}
                onPress={() => {
                  // Alert.alert(item?.description);
                  console.log(companyProfileData);
                  // navigation.navigate(Routes.VIEWPOST, {
                  //   ImagesVideos,
                  // });
                }}
                key={index}>
                <Image source={item.image} style={styles.imgStyle} />

                <AppText
                  body={item.description}
                  style={styles.description}
                  numberOfLines={2}
                />

                <View style={styles.reactionView}>
                  <View style={styles.imagesContainer}>
                    {reactionsList
                      ?.map((item, index) => (
                        <Image
                          key={index}
                          style={[
                            styles.indexImageStyle,
                            {
                              zIndex: index,
                              right: widthPixel(index * 8),
                            },
                          ]}
                          source={item?.image}
                          resizeMode="contain"
                        />
                      ))
                      .slice(0, 3)}
                  </View>
                  <AppText
                    body={item.reactionsCount}
                    style={styles.mututalText}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <ViewAllButton viewAllButtonPress={viewAllButtonPress} />
    </View>
  );
};

export default InPagePostsComponent;
