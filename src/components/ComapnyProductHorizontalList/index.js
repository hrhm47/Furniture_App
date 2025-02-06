import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  ProductImagesList,
  professionalRecommendatiaonlist,
} from '../../utils/data/JsonData';
import {colors, heightPixel, images} from '../../assets';
import AppText from '../AppText';
import ViewAllButton from '../ViewAllButton';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const CompanyProductHorizontalList = ({
  CompanyProductHorizontalListData,
  fromCompanyEditingProfile = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <View style={styles.bussinesDetials}>
        <Image source={images.diamond} style={styles.diamondStyle} />
        <AppText body={'Company Products'} style={styles.bussinessHeading} />
      </View>
      <FlatList
        data={professionalRecommendatiaonlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: heightPixel(10),
          paddingBottom: heightPixel(10),
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.cardView}
              onPress={() => {
                navigation.navigate(Routes.COMPANYPRODUCTREVIEWPREVIEW, {
                  productReviewData: item,
                  fromCompanyEditingProfile: fromCompanyEditingProfile,
                });
              }}
              key={index}>
              <Image
                source={item.image}
                style={styles.imgStyle}
                resizeMode="cover"
              />
              {fromCompanyEditingProfile && (
                <TouchableOpacity
                  style={styles.editButtonView}
                  onPress={() => {
                    navigation.navigate(Routes.ADDEDITCOMPANYPRODUCT, {
                      productData: true, // we have send product to next page
                    });
                  }}>
                  <Image
                    source={images.edit}
                    style={styles.diamondStyle}
                    tintColor={colors.imageGrey}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        }}
      />
      <ViewAllButton
        viewAllButtonPress={() => {
          navigation.navigate(Routes.COMPANYPRODUCTLISTING, {
            ProductListingData: professionalRecommendatiaonlist,
            fromCompanyEditingProfile: fromCompanyEditingProfile,
          });
        }}
      />
    </View>
  );
};

export default CompanyProductHorizontalList;
