import {Alert, ScrollView, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import ProfileCoverComponent from '../../../components/ProfileCoverComponent';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import BusinessDetails from '../../../components/BusinessDetails';
import EventsComponents from '../../../components/EventsComponents';
import {Routes} from '../../../navigation/Routes';
import {
  eventsData,
  experienceData,
  followedCompaniList,
  groupsMemberShipData,
  userBottomModalDataForConnections,
  userBottomModalDataToRemoveConnections,
} from '../../../utils/data/JsonData';
import ProfessionalRecommendationComponent from '../../../components/ProfessionalRecommendationComponent';
import CertificatesList from '../../../components/CertificatesList';
import RecommendedCompaniesComponent from '../../../components/RecommendedCompaniesComponent';
import ComapnyProvidedServicesList from '../../../components/ComapnyProvidedServicesList';
import {AccomplishmentData} from '../ProfileSetUp/PremiumData/View_Accomplishments';
import UserActivityStatus from '../../../components/UserActivityStatus';
import CompanyPageCard from '../../../components/ComapnyPageComponent/CompanyPageCard';
import BottomSheetForUser from '../../../components/BottomSheetComponent/BottomSheetForUser';
import {useDispatch, useSelector} from 'react-redux';
import {
  setOpenBlockUserPostAccount,
  setOpenBottomSheetToRemoveUser,
  setOpenMessageModal,
  setOpenUserBottomSheet,
} from '../../../app/slices/postSlice';
import MessageModal from '../../../components/Modals/MessageModal';
import DeleteModal from '../../../components/Modals/DeleteModal/DeleteModal';

const UserProfile = ({}) => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;
  const removeTabOnReturnOnHome = paramsData?.removeTabOnReturnOnHome;

  const {
    openFullScreenView,
    fullScreenPostData,
    openCompanyBottomSheet,
    openCompanySponsoredBottomSheet,
    openUserBottomSheet,
    bottomSheetForUserRemoval,
    openMessageModal,
    blockUserPostAccount,
  } = useSelector(state => state?.postSlice);
  const dispatch = useDispatch();

  const [follow, setFollow] = useState(false);
  const [showProductList, setShowProductList] = useState(true);
  const [openSheetForConnections, setOpenSheetForConnections] = useState(false);
  // const [userHasConnectViaMessage,setUserHas]

  useLayoutEffect(() => {
    // console.log(
    //   'removeTabOnReturnOnHome',
    // removeTabOnReturn == removeTabOnReturnOnHome
    //   ? removeTabOnReturn
    //   : !removeTabOnReturnOnHome,
    // );
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn ?? removeTabOnReturnOnHome ?? false
        ? ''
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <View style={styles.topView}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <ProfileCoverComponent
          coverbackgroundImage={images.postImage6}
          profileImage={images.profile1}
          IsUserProfile={true}
          showThreeDots={true}
          profileName={'Jocelyn Rosser'}
          profileFollowers={13243}
          profileLocation={'New York'}
          profileMutualConnections={'123'}
          profileSubtitle={'Software developer'}
          leftonPress={() => {
            navigation.goBack();
          }}
          RightonPress={() => {
            dispatch(setOpenBottomSheetToRemoveUser(true));
          }}
          leftButtonText={'connect'}
          leftButtonBgColor={colors.pink}
          leftButtonBorderColor={colors.pink}
          leftButtonTextColor={colors.white}
          rightButtonText={'share Profile'}
          rightButtonBgColor={colors.white}
          rightButtonBorderColor={colors.pink}
          rightButtonTextColor={colors.pink}
          leftButtonOnPress={() => {
            dispatch(setOpenUserBottomSheet(true));
          }}
          description={
            'Tellus nunc morbi habitasse ultricies non id vestibulum adipiscing. Nam ipsum proin arcu eleifend netus in. Volutpat enim tristique porttitor sem sit. Venenatis faucibus at nec facilisis nunc sollicitudin. Morbi.'
          }
        />
        <BusinessDetails
          heading={'Email & Contact Number'}
          showAllAvailable={false}
          detailsHeading1={'Email'}
          detailsSubheading1={'jocelyn.rosser@example.com'}
          detailsImage1={images.email}
          detailsHeading2={'Contact'}
          detailsSubheading2={'(704) 555-0127'}
          detailsImage2={images.email}
          showAllDetails={() => setShowBusinessModal(true)}
        />
        <CompanyPageCard
          comapnyProfileOnPress={() => {
            navigation.navigate(Routes.COMPANYPROFILE, {
              removeTabOnReturn:
                removeTabOnReturn == removeTabOnReturnOnHome
                  ? removeTabOnReturn
                  : !removeTabOnReturnOnHome,
            });
          }}
        />
        <View style={{marginTop: heightPixel(10)}}>
          <EventsComponents
            heading={'Events Joined'}
            viewAllDetailsIsAvaiable={false}
            eventDescription={
              'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra.'
            }
            eventPhoto={images.eventPhoto}
            peopleAttending={123}
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
            eventTime={'Thursday, 22 February - 05:30pm'}
            organizerName={'organizerName'}
            companyOnPress={() => Alert.alert('Clickable')}
            viewAllDetailsButton={() =>
              navigation.navigate(Routes.COMPANYEVENTLISTINGPAGE)
            }
            detailedPage={true}
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
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <ProfessionalRecommendationComponent
            heading={'Groups & Memberships'}
            groupsMemberShipData={groupsMemberShipData}
            showProductList={false}
            viewAllButtonPress={() =>
              navigation.navigate(Routes.GROUPMEMBERSHIPSLIST)
            }
            showGroupsDetails={true}
          />
        </View>
        <View style={{marginTop: heightPixel(15)}}>
          <UserActivityStatus
            heading={'Activity Status'}
            postsData={{}}
            removeTabOnReturn={true}
            // viewAllButtonPress={() => navigation.navigate(Routes.USERPOSTPAGE)}
          />
        </View>

        <View style={{marginTop: heightPixel(10)}}>
          <RecommendedCompaniesComponent
            heading={'Comapnies He Followed'}
            comapnisData={followedCompaniList}
          />
        </View>
        <View style={{marginTop: heightPixel(15)}}>
          <CertificatesList
            experienceData={true}
            CertificatesListData={experienceData}
            heading={'Experience'}
          />
        </View>
        <ComapnyProvidedServicesList
          IsUserProfile={true}
          ComapnyProvidedServicesListData={AccomplishmentData}
          heading={'Accomplishments'}
          minimizngTheCardLengthFromCompanyEditingProfile={true}
        />
      </ScrollView>
      {openUserBottomSheet && (
        <BottomSheetForUser
          bottomData={userBottomModalDataForConnections}
          removeTabOnReturn={true}
        />
      )}
      {bottomSheetForUserRemoval && (
        <BottomSheetForUser
          bottomData={userBottomModalDataToRemoveConnections}
          removeTabOnReturn={true}
        />
      )}
      {openMessageModal && (
        <MessageModal
          rightButtonOnPress={() => dispatch(setOpenMessageModal(false))}
          leftButtonOnPress={() => dispatch(setOpenMessageModal(false))}
        />
      )}
      {blockUserPostAccount && (
        <DeleteModal
          leftButtonOnPress={() => {
            dispatch(setOpenBlockUserPostAccount(false));
          }}
          rightButtonOnPress={() => {
            dispatch(setOpenBlockUserPostAccount(false));
          }}
        />
      )}
    </View>
  );
};

export default UserProfile;
