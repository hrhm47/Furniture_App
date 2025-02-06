import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeaderButton from '../../../../components/HeaderButton';
import {styles} from './styles';
import ProductListingOnly from '../../../../components/ProductImageListingOnly';
import {colors} from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import {Routes} from '../../../../navigation/Routes';

const ComapnyProductsListing = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const fromCompanyEditingProfile = paramsData?.fromCompanyEditingProfile;
  const ProductListingData = paramsData?.ProductListingData;
  // console.log('product data ', fromCompanyEditingProfile);
  return (
    <AppBackground style={styles.topView}>
      <HeaderButton
        title={'Products'}
        leftOnPress={() => navigation.goBack()}
        leftBtnTextStyle={{color: colors.black}}
        leftIconColor={colors.black}
        rightBtn={fromCompanyEditingProfile}
        rightPress={() => {
          navigation.navigate(Routes.ADDEDITCOMPANYPRODUCT);
        }}
        isDivider={false}
      />
      <ProductListingOnly
        productData={ProductListingData}
        fromCompanyEditingProfile={fromCompanyEditingProfile}
      />
    </AppBackground>
  );
};

export default ComapnyProductsListing;
