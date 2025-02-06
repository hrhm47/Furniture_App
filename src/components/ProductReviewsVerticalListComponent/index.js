import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {colors} from '../../assets';
import SquareButtons from '../SquareButtons';
import {
  groupsMemberShipData,
  professionalRecommendatiaonlist,
  serviecslist,
} from '../../utils/data/JsonData';
import ProductProfessionalHorizontalList from './ProductProfessionalVerticalList';
import ServicesHorizontalList from './ServicesVerticalList';
import ProductProfessionalVerticalList from './ProductProfessionalVerticalList';
import ServicesVerticalList from './ServicesVerticalList';

const ProductReviewsVerticalListComponent = ({
  groupsData = false,
  productData,
  servicesData,
  fromCompanyEditingProfile,
  highlightTabOnViewAll = true,
}) => {
  const [showProductList, setShowProductList] = useState(true);
  useEffect(() => {
    setShowProductList(highlightTabOnViewAll);
  }, []);
  return (
    <View style={styles.topView}>
      {!groupsData && (
        <SquareButtons
          bgColorBtn2={showProductList ? colors.lightGrey : colors.pink}
          bgColorBtn1={showProductList ? colors.pink : colors.lightGrey}
          ButtonTextColorBtn1={showProductList ? colors.white : colors.grey}
          ButtonTextColorBtn2={showProductList ? colors.grey : colors.white}
          bdColorBtn1={showProductList ? colors.pink : colors.lightGrey}
          bdColorBtn2={showProductList ? colors.lightGrey : colors.pink}
          leftButtonOnPress={() => {
            setShowProductList(true);
          }}
          RigtButtonOnPress={() => {
            setShowProductList(false);
          }}
        />
      )}
      <View style={styles.cardOuterView}>
        {groupsData ? (
          <ProductProfessionalVerticalList
            groupsData={true}
            productData={groupsMemberShipData}
          />
        ) : (
          <>
            {showProductList ? (
              <ProductProfessionalVerticalList
                fromCompanyEditingProfile={fromCompanyEditingProfile}
                productData={professionalRecommendatiaonlist}
              />
            ) : (
              <ServicesVerticalList
                servicesData={serviecslist}
                fromCompanyEditingProfile={fromCompanyEditingProfile}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default ProductReviewsVerticalListComponent;
