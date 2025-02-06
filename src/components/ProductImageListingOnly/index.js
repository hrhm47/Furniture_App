import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontSize, heightPixel, images, widthPixel} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import SmallSizeButton from '../SmallSizeButton';
import Buttons from '../Buttons';

const ProductListingOnly = ({productData, fromCompanyEditingProfile}) => {
  const navigation = useNavigation();
  //   console.log('navigation', productData);
  return (
    <View style={styles.topView}>
      <FlatList
        data={productData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          columnGap: heightPixel(8),
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.cardView} key={index}>
              <View style={styles.imgView}>
                <Image
                  source={item.image}
                  style={styles.imgStyle}
                  resizeMode="cover"
                  borderRadius={10}
                />
                <Buttons
                  mainButtonStyle={styles.buttonStyle}
                  imageLink={images.diamond}
                  mainButtonText={'Add a review'}
                  mainButtonTextColor={colors.black}
                  jointButton={false}
                  mainButtonOnPress={() => {
                    navigation.navigate(Routes.COMPANYPRODUCTREVIEWPREVIEW, {
                      productReviewData: item,
                      fromCompanyEditingProfile: fromCompanyEditingProfile,
                    });
                  }}
                />
                <AppText
                  body={item?.furnitureName}
                  style={{
                    fontSize: fontSize.BODY2_bold,
                    paddingVertical: heightPixel(10),
                    width: widthPixel(180),
                  }}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductListingOnly;
