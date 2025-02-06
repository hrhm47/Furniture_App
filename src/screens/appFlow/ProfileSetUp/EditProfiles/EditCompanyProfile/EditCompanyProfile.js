import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import AppBackground from '../../../../../components/AppBackground';
import ProfileCoverComponent from '../../../../../components/ProfileCoverComponent';
import {colors, fontSize, heightPixel, images} from '../../../../../assets';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/Routes';
import ViewAllEmployess from '../../../../../components/ViewAllEmployess';
import {contactListData} from '../../../CompanyProfile/CompanyProfile';
import BusinessDetails from '../../../../../components/BusinessDetails';
import BussinessModal from '../../../../../components/Modals/BussinessModal';
import AppText from '../../../../../components/AppText';
import InPagePostsComponent from '../../../../../components/InPagePostsComponent';
import {
  dummyPagePost,
  eventsData,
  experienceData,
  followedCompaniList,
  professionalRecommendatiaonlist,
  serviecslist,
} from '../../../../../utils/data/JsonData';
import ProfessionalRecommendationComponent from '../../../../../components/ProfessionalRecommendationComponent';
import CompanyProductHorizontalList from '../../../../../components/ComapnyProductHorizontalList';
import ComapnyProvidedServicesList from '../../../../../components/ComapnyProvidedServicesList';
import EventsComponents from '../../../../../components/EventsComponents';
import RecommendedCompaniesComponent from '../../../../../components/RecommendedCompaniesComponent';
import CertificatesList from '../../../../../components/CertificatesList';
import SharePageModal from '../../../../../components/Modals/SharePageModal/SharePageModal';

const EditCompanyProfile = () => {
  const navigation = useNavigation();

  const paramsData = useRoute()?.params;

  const [showSharePageModal, setShowSharePageModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showProductList, setShowProductList] = useState(true);

  const [attendEvent, setAttendEvent] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // console.log(
      //   'paramsData?.showBusinessModalOnUpdate',
      //   paramsData?.showBusinessModalOnUpdate,
      // );
      paramsData?.showBusinessModalOnUpdate
        ? setTimeout(() => {
            setShowBusinessModal(true);
          }, 5)
        : null;
    }, []),
  );

  return (
    <View style={styles.topView}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <ProfileCoverComponent
          editProfile={true}
          isCompanyProfile={true}
          IsUserProfile={false}
          coverbackgroundImage={images.postImage6}
          profileImage={images.profile2}
          profileName={'Jocelyn Rosser'}
          profileFollowers={13243}
          profileLocation={'New York'}
          profileMutualConnections={'123'}
          profileSubtitle={'Software developer'}
          leftonPress={() => {
            navigation.goBack();
          }}
          showThreeDots={true}
          RightonPress={() => {
            setShowSharePageModal(true);
          }}
          overViewTitle={true}
          description={
            'Tellus nunc morbi habitasse ultricies non id vestibulum adipiscing. Nam ipsum proin arcu eleifend netus in. Volutpat enim tristique porttitor sem sit. Venenatis faucibus at nec facilisis nunc sollicitudin. Morbi.'
          }
          editUserPofileDetailsButton={() => {
            navigation.navigate(Routes.EDITCOMPANYINFORMATION);
          }}
          addCompanyOverViewOnPress={() => {
            navigation.navigate(Routes.EDITCOMPANYINFORMATION, {
              focusOnOverView: true,
            });
          }}
        />

        <ViewAllEmployess
          WorkingEmployessCount={20}
          viewAll={() => {
            navigation.navigate(Routes.PEOPLEATTENDEELIST, {
              headingName: 'Employess',
            });
          }}
        />

        <View style={styles.addPostView}>
          <View style={styles.addPostTitleView}>
            <AppText body={'Add post'} style={{fontSize: fontSize.HEADING3}} />
          </View>
          <View style={styles.addPostInner1View}>
            <Image source={images.profile5} style={styles.imageStyle} />
            <TouchableOpacity
              style={styles.addpostInnerView}
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate(Routes.ADDPOSTS, {
                  removeTabOnReturn: true,
                });
              }}>
              <View style={styles.cameraImageBorderView}>
                <Image source={images.cameraEmpty} style={styles.iconStyle} />
              </View>
              <AppText body={'Add post...'} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: heightPixel(5),
          }}>
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
            navigation.navigate(Routes.COMPANYPOSTPAGE);
          }}
        />

        <ProfessionalRecommendationComponent
          heading={'Professional Recommendation'}
          professionalRecommendatiaonData={professionalRecommendatiaonlist}
          servicesData={serviecslist}
          // viewAllButtonPress={() =>
          //   navigation.navigate(Routes.COMPANYPRODUCTREVIEWPAGE, {
          //     fromCompanyEditingProfile: true,
          //   })
          // }
          leftButtonOnPress={() => {
            setShowProductList(true);
          }}
          RigtButtonOnPress={() => {
            setShowProductList(false);
          }}
          showProductList={showProductList}
          showGroupsDetails={true}
          fromCompanyEditingProfile={true}
        />

        <CompanyProductHorizontalList
          fromCompanyEditingProfile={true}
          CompanyProductHorizontalListData={{}}
        />
        <ComapnyProvidedServicesList
          ComapnyProvidedServicesListData={serviecslist}
          heading={'Provided Services'}
          fromEditingProfile={true}
          minimizngTheCardLengthFromCompanyEditingProfile={true}
          addButtonOnPress={() => {
            navigation.navigate(Routes.COMPANYSERVICESLISTING, {
              fromCompanyEditingProfile: true,
            });
          }}
        />
        <View style={{marginTop: heightPixel(10)}}>
          <EventsComponents
            heading={'Upcoming Events'}
            viewAllDetailsIsAvaiable={true}
            viewAllDetailsButton={() =>
              navigation.navigate(Routes.COMPANYEVENTLISTINGPAGE, {
                removeTabOnReturn: true,
              })
            }
            eventDescription={
              'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra.'
            }
            eventPhoto={images.eventPhoto}
            peopleAttending={76}
            peopleAttendingOnPress={() => {
              navigation.navigate(Routes.EVENTPEOPLELIST, {
                headingName: 'Attendess',
                createGroupButton: false,
                removeTabOnReturn: true,
              });
            }}
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
            eventDetailOnPress={() => {
              navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                eventsParamsData: eventsData[0]?.eventData[0],
                myEvents: false,
                removeTabOnReturn: true,
              });
            }}
          />
        </View>
        <View style={{marginBottom: heightPixel(15)}}>
          <CertificatesList
            fromEditingProfile={true}
            experienceData={false}
            CertificatesListData={experienceData}
            heading={'Certifications'}
            addButtonOnPress={() => {
              navigation.navigate(Routes.VIEW_CERTIFICATES);
            }}
          />
        </View>

        <RecommendedCompaniesComponent
          heading={'Recommended Companies'}
          comapnisData={followedCompaniList}
          TrueViewAllCompaniesFromProfile={false}
        />
      </ScrollView>
      {showBusinessModal && (
        <BussinessModal
          setShowBusinessModal={setShowBusinessModal}
          heading={'Business Details'}
          showEditButton={true}
          editBussinessDetails={() => {
            setShowBusinessModal(false);
            navigation.navigate(Routes.EDITBUSSINESSDETAILS);
          }}
        />
      )}
      {showSharePageModal && (
        <SharePageModal
          sharePageButton={() => {
            setShowSharePageModal(false);
          }}
          DeletePageButton={() => {
            setShowSharePageModal(false);
          }}
        />
      )}
    </View>
  );
};

export default EditCompanyProfile;
