import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {heightPixel, images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const starTotal = [1, 2, 3, 4, 5];
const ServicesHorizontalList = ({servicesData, fromCompanyEditingProfile}) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={servicesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: heightPixel(8)}}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.cardView}
              onPress={() => Alert.alert('you press card')}
              key={index}>
              <Image
                source={item.image}
                style={styles.ServiecsimgStyle}
                resizeMode="cover"
              />
              <AppText body={item.title} style={styles.ServiecsTtitle} numberOfLines={2} />
              <View style={styles.profilePicNameView}>
                <Image
                  source={item.profiePic}
                  style={styles.profilePic}
                  resizeMode="cover"
                />
                <AppText body={item.name} style={[styles.profileName,{paddingTop:5}]} />
              </View>
              <View style={styles.starView}>
                {starTotal.map((innerItem, index) => {
                  return (
                    <Image
                      key={index}
                      source={
                        innerItem < item.starCount
                          ? images.StarFilled
                          : images.starUnFilled
                      }
                      style={styles.profilePic}
                      resizeMode="contain"
                    />
                  );
                })}
              </View>
              <TouchableOpacity
                style={styles.seeReviewView}
                onPress={() => {
                  navigation.navigate(Routes.COMPANYSERVICEREVIEWPREVIEW, {
                    serviceReviewData: item,
                    fromCompanyEditingProfile: fromCompanyEditingProfile,
                  });
                }}>
                <AppText body={'See review'} style={styles.seeReveiwText} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ServicesHorizontalList;
