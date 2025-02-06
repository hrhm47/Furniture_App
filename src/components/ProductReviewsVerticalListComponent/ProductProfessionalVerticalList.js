import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontSize, heightPixel, images, widthPixel} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const ProductProfessionalVerticalList = ({
  productData,
  groupsData = false,
  fromCompanyEditingProfile,
}) => {
  const navigation = useNavigation();
  const [showCard, setShowCard] = useState([]);
  return (
    <View style={{flex:1}}>
      <FlatList
        data={productData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          columnGap: heightPixel(8),
          rowGap: heightPixel(15),
          paddingBottom: '2%',
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.cardView} key={index}>
              <View>
                <Image
                  source={item.image}
                  style={styles.imgStyle}
                  resizeMode="cover"
                />
                {fromCompanyEditingProfile && (
                  <TouchableOpacity
                    style={styles.eyeIconView}
                    onPress={() => {
                      showCard?.includes(index)
                        ? setShowCard(prev => [
                            prev?.filter(elem => elem !== index),
                          ])
                        : setShowCard(prev => [...prev, index]);
                    }}>
                    <Image
                      source={
                        showCard?.includes(index)
                          ? images.hideAd
                          : images.eyeFill
                      }
                      style={styles.eyeIconStyle}
                      tintColor={
                        showCard?.includes(index)
                          ? colors.imageGrey
                          : colors.pink
                      }
                    />
                  </TouchableOpacity>
                )}
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

export default ProductProfessionalVerticalList;
