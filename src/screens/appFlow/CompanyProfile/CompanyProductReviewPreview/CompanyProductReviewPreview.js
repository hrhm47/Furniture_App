import {
  Image,
  ScrollView,
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppText from '../../../../components/AppText';
import Buttons from '../../../../components/Buttons';
import {colors, heightPixel, images, widthPixel} from '../../../../assets';
import ServiceCard from '../../../../components/ComapnyProvidedServicesList/ServiceCard';
import AddReviewModal from '../../../../components/Modals/AddReviewModal';
import HeaderButton from '../../../../components/HeaderButton';
import {Routes} from '../../../../navigation/Routes';
import AppBackground from '../../../../components/AppBackground';
import Toast from 'react-native-toast-message';

const CompanyProductReviewPreview = () => {
  const paramsData = useRoute()?.params;
  const productReviewData = paramsData?.productReviewData;
  const fromCompanyEditingProfile = paramsData?.fromCompanyEditingProfile;
  // fromCompanyEditingProfile
  const navigation = useNavigation();
  const [addReview, setAddReview] = useState(false);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <View style={styles.topView}>
          <HeaderButton
            title={'Product'}
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            // isDivider={false}
          />
          <View style={{flex: 1}}>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              <View style={styles.recommendationsPageView}>
                <View style={styles.imageView}>
                  <Image
                    source={productReviewData.image}
                    style={styles.imgStyle}
                  />
                  <View style={styles.sofaNameView}>
                    <AppText
                      body={productReviewData?.furnitureName}
                      style={styles.SofatitleStyle}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        fromCompanyEditingProfile
                          ? navigation.navigate(Routes.ADDEDITCOMPANYPRODUCT, {
                              productData: true, // we have send product to next page
                            })
                          : Toast.show({
                              type: 'success',
                              text1: 'Product Shared',
                            });
                      }}>
                      <Image
                        source={
                          fromCompanyEditingProfile
                            ? images.edit
                            : images.shareLink
                        }
                        style={styles.iconStyle}
                        tintColor={
                          fromCompanyEditingProfile
                            ? colors.grey
                            : colors.darkBlack
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.linkViewinCard}>
                    <AppText
                      body={'www.abccompany.com/single-seat-sofa'}
                      style={styles.productLinkText}
                      numberOfLines={2}
                    />
                    {fromCompanyEditingProfile && (
                      <TouchableOpacity onPress={() => {}}>
                        <Image
                          source={images.trash}
                          style={styles.trashIconStyle}
                          tintColor={colors.tomato}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
                <Buttons
                  jointButton={false}
                  mainButtonText={
                    fromCompanyEditingProfile
                      ? 'Request a review'
                      : 'Add a review'
                  }
                  mainButtonBgColor={colors.pink}
                  mainButtonBorderColor={colors.pink}
                  mainButtonTextColor={colors.white}
                  mainButtonStyle={styles.buttonStyle}
                  imageLink={images.diamond}
                  mainButtonOnPress={() => {
                    fromCompanyEditingProfile
                      ? navigation.navigate(Routes.PEOPLEREVIEWELIST)
                      : setAddReview(true);
                  }}
                />
                <View style={styles.innerRecommendationListView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <AppText body={'Professional Recommendations '} />
                      <AppText
                        body={`(0${productReviewData?.reviewList?.length})`}
                        style={{color: colors.grey}}
                      />
                    </View>
                    {fromCompanyEditingProfile && (
                      <View style={styles.viewAll}>
                        <AppText body={'All'} style={styles.viewAllText} />
                        <TouchableOpacity>
                          <Image
                            source={images.downArrow}
                            style={styles.iconStyle}
                            tintColor={colors.grey}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <View>
                    <FlatList
                      style={{paddingBottom: 10}}
                      data={productReviewData?.reviewList}
                      nestedScrollEnabled={true}
                      renderItem={({item}) => {
                        return (
                          <View>
                            <ServiceCard
                              reviewCard={true}
                              title={item?.name}
                              description={item?.description}
                              serviceImage={item?.profiePic}
                              starsCount={item?.starsCount}
                              style={{width: widthPixel(390)}}
                              reviewDateTime={item?.reviewDateTime}
                              fromCompanyEditingProfile={
                                fromCompanyEditingProfile
                              }
                            />
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </AppBackground>
      {addReview && (
        <AddReviewModal setAddReview={setAddReview} productModal={true} />
      )}
    </>
  );
};

export default CompanyProductReviewPreview;
