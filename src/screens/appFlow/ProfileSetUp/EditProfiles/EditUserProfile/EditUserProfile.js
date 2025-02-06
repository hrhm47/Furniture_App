import {Alert, ScrollView, StatusBar, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/Routes';
import ProfileCoverComponent from '../../../../../components/ProfileCoverComponent';
import {colors, heightPixel, images} from '../../../../../assets';
import {useDispatch} from 'react-redux';
import {styles} from './styles';
import PremiumYearsViewsCardComponent from '../../../../../components/PremiumYearsViewsCardComponent/PremiumYearsViewsCardComponent';
import BusinessDetails from '../../../../../components/BusinessDetails';
import UserActivityStatus from '../../../../../components/UserActivityStatus';
import CompanyPageCard from '../../../../../components/ComapnyPageComponent/CompanyPageCard';
import EditProfileEventComponent from '../../../../../components/EventsComponents/EditProfileEventComponent';
import RecommendedCompaniesComponent from '../../../../../components/RecommendedCompaniesComponent';
import {
  certificationsData,
  experienceData,
  followedCompaniList,
  groupsMemberShipData,
} from '../../../../../utils/data/JsonData';
import CertificatesList from '../../../../../components/CertificatesList';
import ComapnyProvidedServicesList from '../../../../../components/ComapnyProvidedServicesList';
import {AccomplishmentData} from '../../PremiumData/View_Accomplishments';
import ProfessionalRecommendationComponent from '../../../../../components/ProfessionalRecommendationComponent';

const EditUserProfile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [createCompanyStatus, setCreateCompanyStatus] = useState(true);
  const [joinGroups, setJoinGroups] = useState(false);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);

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
          coverbackgroundImage={images.postImage6}
          profileImage={images.profile1}
          IsUserProfile={true}
          profileName={'Jocelyn Rosser'}
          profileFollowers={13243}
          profileLocation={'New York'}
          profileMutualConnections={'123'}
          profileSubtitle={'Software developer'}
          leftonPress={() => {
            navigation.goBack();
          }}
          showThreeDots={false}
          RightonPress={() => {
            // console.log('heo');
            // dispatch(setOpenBottomSheetToRemoveUser(true));
          }}
          leftButtonText={''}
          rightButtonText={'share Profile'}
          rightButtonBgColor={colors.white}
          rightButtonBorderColor={colors.pink}
          rightButtonTextColor={colors.pink}
          rightButtonOnPress={() => {
            console.log('heo');
          }}
          description={
            'Tellus nunc morbi habitasse ultricies non id vestibulum adipiscing. Nam ipsum proin arcu eleifend netus in. Volutpat enim tristique porttitor sem sit. Venenatis faucibus at nec facilisis nunc sollicitudin. Morbi.'
          }
          editUserPofileDetailsButton={() => {
            navigation.navigate(Routes.EDITUSERINFORMATION);
          }}
        />

        <PremiumYearsViewsCardComponent
          headingName={'Years in Industry'}
          rightMostText={'Since Feb 2016'}
        />
        <PremiumYearsViewsCardComponent
          headingName={'Profile Views'}
          rightMostText={'233'}
          rightMostOnPress={() => {
            navigation.navigate(Routes.PEOPLEATTENDEELIST, {
              headingName: 'Who viewed your profile',
              showWhoViewYourProfileList: true,
            });
          }}
        />

        <View style={{marginTop: heightPixel(10)}}>
          <BusinessDetails
            heading={'Email & Contact Number'}
            showAllAvailable={false}
            detailsImage1={images.email}
            detailsHeading1={'Email'}
            detailsSubheading1={'peter.thornton@example.com'}
            detailsImage2={images.email}
            detailsHeading2={'Contact'}
            detailsSubheading2={'+17 | 1234567890'}
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <UserActivityStatus
            heading={'Activity Status'}
            postButtonAvailable={true}
            postButtonOnPress={() => {
              navigation.navigate(Routes.ADDPOSTS);
            }}
            // viewAllButtonPress={() => }
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <CompanyPageCard
            CreateComapnyCardFromProfile={createCompanyStatus}
            followButtonText="View"
            followButton={() => {
              navigation.navigate(Routes.EDITCOMPANYPROFILE);
            }}
            editCompanyPageOnPress={() => {
              navigation.navigate(Routes.EDITCOMPANYPROFILE);
            }}
            CreateCompanyOnPress={() => {
              setCreateCompanyStatus(!createCompanyStatus);
              navigation.navigate(Routes.EDITCOMPANYINFORMATION, {
                creatingCompanyPage: true,
              });
            }}
            companyProfileonPressAavailable={true}
            // comapnyProfileOnPress={() => {
            //   navigation.navigate(Routes.EDITCOMPANYPROFILE);
            // }}
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <EditProfileEventComponent
            heading={'Events'}
            viewAllDetailsIsAvaiable={true}
            eventDescription={
              'Etiam senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra senectus neque molestie vel libero nulla sagittis. Condimentum pellentesque et viverra.'
            }
            eventPhoto={images.eventPhoto}
            peopleAttending={123}
            peopleAttendingOnPress={() => {
              navigation.navigate(Routes.EVENTPEOPLELIST, {
                headingName: 'Attendess',
                createGroupButton: false,
                removeTabOnReturn: true,
              });
            }}
            eventTime={'Thursday, 22 February - 05:30pm'}
            organizerName={'organizerName'}
            companyOnPress={() => Alert.alert('Clickable')}
            viewAllDetailsButton={() => {
              navigation.navigate(Routes.CALENDEREVENTS, {
                doNotShotBottomTabBar: true,
                removeTabOnReturn: true,
              });
            }}
            detailedPage={true}
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          {/* <PremiumYearsViewsCardComponent
            headingName={'Groups & Memberships'}
            addButton={true}
          /> */}
          <ProfessionalRecommendationComponent
            heading={'Groups & Memberships'}
            fromEditingProfile={true}
            showGroupsDetails={joinGroups}
            groupsMemberShipData={groupsMemberShipData}
            showProductList={false}
            addButton={() => {
              setJoinGroups(!joinGroups);
              navigation.navigate(Routes.ADDGROUPMEMBERSHIPS);
            }}
            viewAllButtonPress={() => {
              navigation.navigate(Routes.GROUPMEMBERSHIPSLIST, {
                userComingFromProfileEditing: true,
              });
            }}
          />
        </View>
        <View style={{marginTop: heightPixel(8)}}>
          <RecommendedCompaniesComponent
            heading={'Comapnies I Followed'}
            comapnisData={followedCompaniList}
            TrueViewAllCompaniesFromProfile={true}
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <CertificatesList
            fromEditingProfile={true}
            experienceData={true}
            CertificatesListData={experienceData}
            heading={'Experience'}
            addButtonOnPress={() => {
              // Alert.alert("wef")
              navigation.navigate(Routes.VIEW_CERTIFICATES, {
                experienceCard: true,
              });
            }}
          />
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <CertificatesList
            fromEditingProfile={true}
            experienceData={false}
            CertificatesListData={certificationsData}
            heading={'Certifications'}
            addButtonOnPress={() => {
              navigation.navigate(Routes.VIEW_CERTIFICATES);
            }}
          />
        </View>
        <ComapnyProvidedServicesList
          fromEditingProfile={true}
          IsUserProfile={true}
          ComapnyProvidedServicesListData={AccomplishmentData}
          heading={'Accomplishments'}
          minimizngTheCardLengthFromCompanyEditingProfile={true}
          addButtonOnPress={() => {
            navigation.navigate(Routes.VIEW_ACCOMPLISHMENTS);
          }}
        />
      </ScrollView>
    </View>
  );
};

export default EditUserProfile;
