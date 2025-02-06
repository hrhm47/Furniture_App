import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, StackNames} from '../Routes';
import {discover} from '../exportScreens';
import ProfileEditStack from './ProfileEditStack';
import {TopTab} from './TopTab';

const Discover = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Discover.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Discover.Screen
        options={{presentation: 'transparentModal'}}
        name={Routes.DISCOVERSCREEN}
        component={discover.DiscoverScreen}
      />
      <Discover.Screen
        name={Routes.INDIVIDUALCHAT}
        component={discover.IndividualChat}
      />
      <Discover.Screen name={Routes.GROUPCHAT} component={discover.GroupChat} />
      {/* message stack */}
      <Discover.Screen name={Routes.MESSAGES} component={discover.Messages} />
      <Discover.Screen name={Routes.OPENCHAT} component={discover.OpenChat} />

      <Discover.Screen name={StackNames.TOPTABINCHAT} component={TopTab} />
      <Discover.Screen
        name={Routes.REQUESTCHAT}
        component={discover.RequestChat}
      />
      <Discover.Screen
        name={Routes.INVITATIONLIST}
        component={discover.InvitationList}
      />
      <Discover.Screen
        name={Routes.GROUPMEMBERSHIPSLIST}
        component={discover.GroupMemberShipsList}
      />
      <Discover.Screen
        name={Routes.USERPOSTPAGE}
        component={discover.UserPostPage}
      />
      {/* ============= */}

      <Discover.Screen name={Routes.VIEWPOST} component={discover.ViewPost} />
      <Discover.Screen
        name={Routes.COMPANYPROFILE}
        component={discover.CompanyProfile}
      />
      <Discover.Screen
        name={Routes.COMPANYPOSTPAGE}
        component={discover.ComapnyPostPage}
      />
      <Discover.Screen
        name={Routes.COMPANYPRODUCTREVIEWPAGE}
        component={discover.ComapnyProductReviewsPage}
      />
      <Discover.Screen
        name={Routes.COMPANYPRODUCTREVIEWPREVIEW}
        component={discover.CompanyProductReviewPreview}
      />
      <Discover.Screen
        name={Routes.COMPANYSERVICEREVIEWPREVIEW}
        component={discover.CompanyServiceReviewPreview}
      />
      <Discover.Screen
        name={Routes.COMPANYPRODUCTLISTING}
        component={discover.ComapnyProductsListing}
      />
      <Discover.Screen
        name={Routes.COMPANYEVENTLISTINGPAGE}
        component={discover.CompanyEventListingPage}
      />
      <Discover.Screen
        name={Routes.EVENTDETAILEDPAGE}
        component={discover.EventDetails}
      />
      <Discover.Screen
        name={Routes.PEOPLEATTENDEELIST}
        component={discover.PeopleAttendessList}
      />
      <Discover.Screen
        name={Routes.NOTIFICATIONS}
        component={discover.Notifications}
      />
      <Discover.Screen
        name={Routes.USERPROFILE}
        component={discover.UserProfile}
      />

      <Discover.Screen
        name={Routes.HELPCENTER}
        component={discover.HelpCenter}
      />
      <Discover.Screen
        name={Routes.CALENDEREVENTS}
        component={discover.CalenderEvents}
      />
      <Discover.Screen
        name={Routes.EVENTPEOPLELIST}
        component={discover.EventPeopleList}
      />
      <Discover.Screen
        name={Routes.CREATEEVENT}
        component={discover.CreateEvent}
      />
      <Discover.Screen
        name={Routes.CALENDARMAP}
        component={discover.CalenderMap}
      />
      <Discover.Screen
        name={Routes.STATUS_SCREEN}
        component={discover.CalenderStatusScreen}
      />
      <Discover.Screen name={Routes.REPORT} component={discover.Report} />
      {/* below screens will be added in every tab stack for better user experience */}
      <Discover.Screen
        name={Routes.EDITUSERPROFILE}
        component={discover.EditUserProfile}
      />
      <Discover.Screen
        name={Routes.EDITUSERINFORMATION}
        component={discover.EditUserInformation}
      />
      <Discover.Screen
        name={Routes.EDIT_ACCOMPLISHMENTS}
        component={discover.Edit_Accomplishments}
      />
      <Discover.Screen
        name={Routes.VIEW_ACCOMPLISHMENTS}
        component={discover.View_Accomplishments}
      />
      <Discover.Screen
        name={Routes.VIEW_CERTIFICATES}
        component={discover.View_Certificates}
      />
      <Discover.Screen
        name={Routes.ADD_CERTIFICATES}
        component={discover.Add_Certificates}
      />
      <Discover.Screen
        name={Routes.ADDGROUPMEMBERSHIPS}
        component={discover.AddGroupsMembership}
      />
      <Discover.Screen
        name={Routes.EDITCOMPANYPROFILE}
        component={discover.EditCompanyProfile}
      />
      <Discover.Screen
        name={Routes.EDITCOMPANYINFORMATION}
        component={discover.EditCompanyInformation}
      />
      <Discover.Screen
        name={Routes.EDITBUSSINESSDETAILS}
        component={discover.Edit_BusinessDetails}
      />
      <Discover.Screen
        name={Routes.PEOPLEREVIEWELIST}
        component={discover.PeopleReviewList}
      />
      <Discover.Screen
        name={Routes.ADDEDITCOMPANYPRODUCT}
        component={discover.AddEditProducts}
      />
      <Discover.Screen
        name={Routes.COMPANYSERVICESLISTING}
        component={discover.CompanyServicesListing}
      />
      <Discover.Screen
        name={Routes.ADDEDITSERVICES}
        component={discover.AddEditServices}
      />
      <Discover.Screen name={Routes.SETTINGS} component={discover.Settings} />
      <Discover.Screen
        name={Routes.PRIVACYPOLICY}
        component={discover.PrivacyPolicy}
      />
      <Discover.Screen
        name={Routes.TERMSANDCONDITIONS}
        component={discover.TermsAndConditions}
      />
      <Discover.Screen
        name={Routes.ACCOUNTPREFERENCES}
        component={discover.AccountPreferences}
      />
      <Discover.Screen
        name={Routes.RESETPASSWORD}
        component={discover.ResetPassword}
      />
      <Discover.Screen
        name={Routes.FORGETPASSWORDFROMSETTINGS}
        component={discover.ForgetPasswordSettings}
      />
      <Discover.Screen
        name={Routes.VERIFYOTPFROMSETTINGS}
        component={discover.VerifyOtpFromSettings}
      />
      <Discover.Screen
        name={Routes.NEWPASSWORDFROMSETTING}
        component={discover.NewPasswordFromSetting}
      />

      <Discover.Screen name={Routes.ADDPOSTS} component={discover.AddPosts} />
      <Discover.Screen
        name={Routes.MEDIAPOSTSCREEN}
        component={discover.MediaPostScreens}
      />
      <Discover.Screen
        name={Routes.DOCUMENTPOSTSCREEN}
        component={discover.DocumentPostScreen}
      />
      <Discover.Screen
        name={Routes.POLLPOSTSCREEN}
        component={discover.PollPostScreen}
      />
      <Discover.Screen
        name={Routes.PRODUCTPOSTSCREEN}
        component={discover.ProductPostScreen}
      />
      <Discover.Screen
        name={Routes.EVENTPOSTSCREEN}
        component={discover.EventPostScreen}
      />
      <Discover.Screen
        name={Routes.SERVICESPOSTSCREEN}
        component={discover.ServicesPostScreen}
      />
      <Discover.Screen
        name={Routes.CELEBRATIONPOSTSCREEN}
        component={discover.CelebrationPostScreen}
      />
      <Discover.Screen
        name={Routes.ARTICLEPOSTSCREEN}
        component={discover.ArticlePostScreen}
      />
      <Discover.Screen
        name={Routes.RFPPOSTSCREEN}
        component={discover.DocumentPostScreen}
      />
    </Discover.Navigator>
  );
};

export default DiscoverStack;
