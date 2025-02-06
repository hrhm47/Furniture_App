import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontSize, heightPixel, images, widthPixel} from '../../assets';
import {SCREEN_WIDTH} from '../../assets/constants';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';

const ProductProfessionalHorizontalList = ({
  productData,
  groupsData = false,
  fromCompanyEditingProfile,
}) => {
  const navigation = useNavigation();
  // console.log('fromCompanyEditingProfile', fromCompanyEditingProfile);
  return (
    <View>
      <FlatList
        data={productData}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{columnGap: heightPixel(8)}}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.cardView}
              // onPress={() => Alert.alert('you press card')}
              key={index}>
              <View onPress={() => {}}>
                <Image
                  source={item.image}
                  style={styles.imgStyle}
                  resizeMode="cover"
                />
                {/* {fromCompanyEditingProfile && (
                  <View style={{position: 'absolute', height: 20, width: 20}}>
                    <Image source={images.eyeFill} style={styles.diamond} />
                  </View>
                )} */}
              </View>
              <View style={styles.profilePicNameView}>
                {!groupsData && (
                  <Image
                    source={item.profiePic}
                    style={styles.profilePic}
                    resizeMode="cover"
                  />
                )}
                <AppText
                  body={item.name}
                  style={styles.profileName}
                  numberOfLines={1}
                />
              </View>
              <TouchableOpacity
                disabled={!item?.location}
                onPress={() => Alert.alert(item?.location)}>
                <AppText
                  body={item?.description ? item?.description : item?.location}
                  numberOfLines={2}
                  style={
                    item?.location ? styles?.locationYear : styles?.description
                  }
                />
              </TouchableOpacity>
              {groupsData ? (
                <AppText
                  body={'year ' + item?.year}
                  style={[
                    styles?.locationYear,
                    {color: colors?.grey, fontSize: fontSize?.BODY3_medium},
                  ]}
                  numberOfLines={1}
                />
              ) : (
                <TouchableOpacity
                  style={styles.seeReviewView}
                  onPress={() => {
                    navigation.navigate(Routes.COMPANYPRODUCTREVIEWPREVIEW, {
                      productReviewData: item,
                      fromCompanyEditingProfile: fromCompanyEditingProfile,
                    });
                  }}>
                  <AppText body={'See review'} style={styles.seeReveiwText} />
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductProfessionalHorizontalList;

// {IsUserProfile && (
//   <View style={styles.groupMemberView}>
//     <AppText
//       body={item?.name}
//       numberOfLines={1}
//       style={styles.groupMemberTitle}
//     />
//     <AppText
//       body={item?.location}
//       style={styles.locationYear}
//       numberOfLines={2}
//     />
// <AppText
//   body={'year ' + item?.year}
//   style={[
//     styles.locationYear,
//     {color: colors.grey, fontSize: fontSize.BODY3_medium},
//   ]}
//   numberOfLines={1}
// />
//   </View>
// )}
