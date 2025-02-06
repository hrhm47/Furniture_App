import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import ProfileCoverComponent from '../../../components/ProfileCoverComponent';
import AppBackground from '../../../components/AppBackground';
import OverViewComponent from '../../../components/overViewComponent';
import ViewAllEmployess from '../../../components/ViewAllEmployess';
import BusinessDetails from '../../../components/BusinessDetails';
import {colors, heightPixel, images} from '../../../assets';
import InPagePostsComponent from '../../../components/InPagePostsComponent';
import ProfessionalRecommendationComponent from '../../../components/ProfessionalRecommendationComponent';
import CompanyProductHorizontalList from '../../../components/ComapnyProductHorizontalList';
import ComapnyProvidedServicesList from '../../../components/ComapnyProvidedServicesList';
import CertificatesList from '../../../components/CertificatesList';
import EventsComponents from '../../../components/EventsComponents';
import RecommendedCompaniesComponent from '../../../components/RecommendedCompaniesComponent';
import {
  dummyPagePost,
  eventsData,
  followedCompaniList,
  professionalRecommendatiaonlist,
  serviecslist,
  userBottomModalData,
} from '../../../utils/data/JsonData';
import {useNavigation, useRoute} from '@react-navigation/native';
import BussinessModal from '../../../components/Modals/BussinessModal';
import {opacity} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import {Routes} from '../../../navigation/Routes';
import {CertificatesData} from '../ProfileSetUp/PremiumData/View_Certificates';
import {setOpenCompanyBottomSheet} from '../../../app/slices/postSlice';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheetForCompany from '../../../components/BottomSheetComponent/BottomSheetForCompany';

const CompanyProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showProductList, setShowProductList] = useState(true);
  const [attendEvent, setAttendEvent] = useState(false);
  const [follow, setFollow] = useState(false);
  const {openCompanyBottomSheet} = useSelector(state => state?.postSlice);

  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;
  const removeTabOnReturnOnHome = paramsData?.removeTabOnReturnOnHome;

  // console.log('userBottomModalData',userBottomModalData)

  useLayoutEffect(() => {
    console.log('removeTabOnReturnOnHome', removeTabOnReturn);
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn ?? removeTabOnReturnOnHome ?? false
        ? navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'none',
            },
          })
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <View
      style={[
        styles.topView,
        showBusinessModal && {backgroundColor: colors.grey, flex: 1},
      ]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <ProfileCoverComponent
          coverbackgroundImage={images.postImage5}
          profileImage={images.profile2}
          profileName={'Chiniot Furniture'}
          profileFollowers={'1988'}
          profileLocation={'Los Angles'}
          profileMutualConnections={'11'}
          profileSubtitle={'Sofa Maker'}
          leftonPress={() => {
            navigation.goBack();
          }}
          simpleCompanyViewingProfile={true}
          showThreeDots={true}
          title={follow ? 'UnFollow' : 'Follow'}
          buttonColor={follow ? colors.white : colors.pink}
          borderColor={follow ? colors.pink : colors.white}
          textColor={follow ? colors.pink : colors.white}
          mainButtonOnPress={() => setFollow(!follow)}
          overViewTitle={true}
          RightonPress={() => dispatch(setOpenCompanyBottomSheet(true))}
          description={
            'Enim lectus tincidunt quam id augue. Ornare enim ante quam urna habitant egestas dictumst. Non magna cursus vitae natoque sit maecenas. Lorem amet accumsan quisque egestas et vestibulum venenatis.'
          }
        />
        <View style={{marginTop: heightPixel(10)}}>
          <ViewAllEmployess
            WorkingEmployessCount={20}
            viewAll={() => {
              navigation.navigate(Routes.PEOPLEATTENDEELIST, {
                headingName: 'Employess',
              });
            }}
          />
        </View>
        <View style={{marginTop: heightPixel(5)}}>
          <BusinessDetails
            heading={'Business Details'}
            detailsHeading1={'Shop Link'}
            detailsSubheading1={'http://www.urbandots.com'}
            detailsImage1={images.global}
            detailsHeading2={'Social Page Link'}
            detailsSubheading2={'www.instagram.com/@urbandots'}
            detailsImage2={images.linkFilled}
            showAllDetails={() => setShowBusinessModal(true)}
          />
        </View>
        <InPagePostsComponent
          heading={'Page Posts'}
          pagePostData={dummyPagePost}
          viewAllButtonPress={() => {
            navigation.navigate(Routes.COMPANYPOSTPAGE, {
              removeTabOnReturn:
                removeTabOnReturn == removeTabOnReturnOnHome
                  ? removeTabOnReturn
                  : !removeTabOnReturnOnHome,
            });
          }}
        />
        <ProfessionalRecommendationComponent
          heading={'Professional Recommendations'}
          professionalRecommendatiaonData={professionalRecommendatiaonlist}
          servicesData={serviecslist}
          leftButtonOnPress={() => {
            setShowProductList(true);
          }}
          RigtButtonOnPress={() => {
            setShowProductList(false);
          }}
          showProductList={showProductList}
          showGroupsDetails={true}
        />
        <CompanyProductHorizontalList
          CompanyProductHorizontalListData={{}}
          fromCompanyEditingProfile={false}
        />
        <ComapnyProvidedServicesList
          ComapnyProvidedServicesListData={serviecslist}
          heading={'Provided Services'}
          minimizngTheCardLengthFromCompanyEditingProfile={true}
        />
        <EventsComponents
          heading={'Upcoming Events'}
          viewAllDetailsIsAvaiable={true}
          viewAllDetailsButton={() =>
            navigation.navigate(Routes.COMPANYEVENTLISTINGPAGE)
          }
          eventDescription={
            'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra.'
          }
          eventPhoto={images.eventPhoto}
          peopleAttending={76}
          eventTime={'Thursday, 12 June - 05:30pm'}
          organizerName={'Dallas Company'}
          companyOnPress={() => Alert.alert('Clickable')}
          detailedPage={true}
          title={attendEvent ? 'Attending' : 'Attend'}
          buttonColor={attendEvent ? 'transparent' : colors.black}
          textColor={attendEvent ? colors.black : colors.white}
          AttendOnPress={() => {
            setAttendEvent(!attendEvent);
          }}
          borderColor={colors.black}
          peopleAttendingOnPress={() => {
            navigation.navigate(Routes.EVENTPEOPLELIST, {
              headingName: 'Attendess',
              createGroupButton: false,
              removeTabOnReturn:
                removeTabOnReturn == removeTabOnReturnOnHome
                  ? removeTabOnReturn
                  : !removeTabOnReturnOnHome,
            });
          }}
          eventDetailOnPress={() => {
            navigation.navigate(Routes.EVENTDETAILEDPAGE, {
              eventsParamsData: eventsData[0]?.eventData[0],
              myEvents: false,
              removeTabOnReturn:
                removeTabOnReturn == removeTabOnReturnOnHome
                  ? removeTabOnReturn
                  : !removeTabOnReturnOnHome,
            });
          }}
        />
        <CertificatesList
          CertificatesListData={CertificatesData}
          heading={'Certifications'}
        />
        <View style={{marginTop: heightPixel(10)}}>
          <RecommendedCompaniesComponent
            heading={'Recommended Companies'}
            comapnisData={followedCompaniList}
          />
        </View>
      </ScrollView>
      {showBusinessModal && (
        <BussinessModal
          heading={'Business Details'}
          showEditButton={false}
          setShowBusinessModal={setShowBusinessModal}
        />
      )}
      {openCompanyBottomSheet && (
        <BottomSheetForCompany
          removeTabOnReturn={
            removeTabOnReturn == removeTabOnReturnOnHome
              ? removeTabOnReturn
              : !removeTabOnReturnOnHome
          }
        />
      )}
    </View>
  );
};

export default CompanyProfile;
