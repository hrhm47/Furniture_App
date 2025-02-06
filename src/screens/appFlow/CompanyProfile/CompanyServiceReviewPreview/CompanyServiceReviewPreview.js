import {
  Alert,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeaderButton from '../../../../components/HeaderButton';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../../assets';
import AppText from '../../../../components/AppText';
import Buttons from '../../../../components/Buttons';
import ServicesListCards from '../../../../components/ServicesListCards';
import AddReviewModal from '../../../../components/Modals/AddReviewModal';
import {Routes} from '../../../../navigation/Routes';
import AppBackground from '../../../../components/AppBackground';
import Toast from 'react-native-toast-message';

const CompanyServiceReviewPreview = () => {
  const paramsData = useRoute()?.params;
  const navigation = useNavigation();
  const serviceReviewData = paramsData?.serviceReviewData;
  const fromCompanyEditingProfile = paramsData?.fromCompanyEditingProfile;
  const comingFromServiceList = paramsData?.comingFromServiceList;
  console.log(
    'AddEditServices',
    comingFromServiceList,
    fromCompanyEditingProfile,
  );

  const [addReview, setAddReview] = useState(false);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <View style={styles.topView}>
          <HeaderButton
            title={
              comingFromServiceList || comingFromServiceList == undefined
                ? 'Services'
                : 'Product'
            }
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            isDivider={false}
          />
          <View style={{flex: 1}}>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              <View style={styles.serviesmainView}>
                <View style={styles.serviceborderView}>
                  <View style={styles.servicesInnerView}>
                    <View style={styles.serciveImgView}>
                      <Image
                        source={images.services1}
                        style={styles.serviceImgStyle}
                        tintColor={colors.cyanDark}
                      />
                    </View>
                    <View style={{rowGap: 10, alignItems: 'center'}}>
                      {fromCompanyEditingProfile ? (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              comingFromServiceList
                                ? navigation.navigate(Routes.ADDEDITSERVICES, {
                                    serviceDataIsEditiable: true, // here we will pass the data or we'll use redux to share data accross screens
                                  })
                                : null;
                            }}>
                            <Image
                              source={images.edit}
                              style={styles.editIconStyle}
                              tintColor={colors.grey}
                            />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Image
                              source={images.trash}
                              style={styles.iconStyle}
                              tintColor={colors.tomato}
                            />
                          </TouchableOpacity>
                        </>
                      ) : (
                        <TouchableOpacity
                          onPress={() =>
                            Toast.show({
                              type: 'success',
                              text1: 'Service Shared',
                            })
                          }>
                          <Image
                            source={images.shareLink}
                            style={styles.iconStyle}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  <View style={styles.servicesTextView}>
                    <AppText body={'Interior Design Consultation'} />
                    <AppText
                      body={
                        'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal. '
                      }
                      style={styles.description}
                    />
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
                      : setAddReview(!addReview);
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
                      <AppText
                        body={'Professional Recommendations '}
                        style={{
                          fontFamily: fontFamily.MONTSERRAT_MEDIUM,
                          fontSize: fontSize.BODY2_bold,
                        }}
                      />
                      <AppText
                        body={`(0${serviceReviewData?.reviewList?.length})`}
                        style={{
                          color: colors.grey,
                          fontFamily: fontFamily.MONTSERRAT_MEDIUM,
                          fontSize: fontSize.BODY2_bold,
                        }}
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
                      data={serviceReviewData?.reviewList}
                      nestedScrollEnabled={true}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      contentContainerStyle={{width: widthPixel(390)}}
                      style={{paddingBottom: 10}}
                      renderItem={({item}) => {
                        return (
                          <View>
                            <ServicesListCards
                              servicesReviewData={item}
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
        <AddReviewModal setAddReview={setAddReview} productModal={false} />
      )}
    </>
  );
};

export default CompanyServiceReviewPreview;
