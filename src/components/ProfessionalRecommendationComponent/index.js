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
import AppText from '../AppText';
import SquareButtons from '../SquareButtons';
import {colors, heightPixel, images} from '../../assets';
import ProductProfessionalHorizontalList from './ProductProfessionalHorizontalList';
import ServicesHorizontalList from './ServicesHorizontalList';
import {useNavigation} from '@react-navigation/native';
import ViewAllButton from '../ViewAllButton';
import SmallSizeButton from '../SmallSizeButton';
import {Routes} from '../../navigation/Routes';

const ProfessionalRecommendationComponent = ({
  professionalRecommendatiaonData,
  heading,
  servicesData,
  orientation,
  bgColorBtn2,
  bgColorBtn1,
  ButtonTextColorBtn1,
  ButtonTextColorBtn2,
  bdColorBtn1,
  bdColorBtn2,
  leftButtonOnPress,
  RigtButtonOnPress,
  showProductList,
  groupsMemberShipData,
  viewAllButtonPress,
  fromEditingProfile = false,
  addButton,
  showGroupsDetails = false,
  fromCompanyEditingProfile = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <View
        style={[
          styles.bussinesDetials,
          !fromEditingProfile && {
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: 1,
          },
        ]}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
          <Image source={images.diamond} style={styles.diamond} />
          <AppText body={heading} style={styles.bussinessHeading} />
        </View>
        {fromEditingProfile && (
          <SmallSizeButton
            buttonImage={images.add}
            buttonImageAvailable={true}
            ButtonText={'Add'}
            ButtonStyle={styles.postButtonStyle}
            ButtonPress={addButton}
          />
        )}
      </View>

      {!groupsMemberShipData && (
        <View style={{alignItems: 'center'}}>
          <SquareButtons
            bgColorBtn2={showProductList ? colors.lightGrey : colors.pink}
            bgColorBtn1={showProductList ? colors.pink : colors.lightGrey}
            ButtonTextColorBtn1={showProductList ? colors.white : colors.grey}
            ButtonTextColorBtn2={showProductList ? colors.grey : colors.white}
            bdColorBtn1={showProductList ? colors.pink : colors.lightGrey}
            bdColorBtn2={showProductList ? colors.lightGrey : colors.pink}
            leftButtonOnPress={leftButtonOnPress}
            RigtButtonOnPress={RigtButtonOnPress}
          />
        </View>
      )}
      {showGroupsDetails && (
        <>
          <View>
            <View style={styles.cardOuterView}>
              {groupsMemberShipData ? (
                <ProductProfessionalHorizontalList
                  orientation={true}
                  productData={groupsMemberShipData}
                  groupsData={true}
                />
              ) : (
                <>
                  {showProductList ? (
                    <ProductProfessionalHorizontalList
                      orientation={true}
                      productData={professionalRecommendatiaonData}
                      fromCompanyEditingProfile={fromCompanyEditingProfile}
                    />
                  ) : (
                    <ServicesHorizontalList
                      orientation={true}
                      servicesData={servicesData}
                      fromCompanyEditingProfile={fromCompanyEditingProfile}
                    />
                  )}
                </>
              )}
            </View>
          </View>
          <ViewAllButton
            viewAllButtonPress={() =>
              groupsMemberShipData
                ? navigation.navigate(Routes.GROUPMEMBERSHIPSLIST)
                : navigation.navigate(Routes.COMPANYPRODUCTREVIEWPAGE, {
                    fromCompanyEditingProfile: fromCompanyEditingProfile,
                    showTabOnVeiwAll: showProductList,
                  })
            }
          />
        </>
      )}
    </View>
  );
};

export default ProfessionalRecommendationComponent;
