// auth stack all screens

import Splash from '../../screens/authFlow/Splash';
import JoinScreen from '../../screens/authFlow/Join/JoinScreen';
import JoinViaPhone from '../../screens/authFlow/Join/JoinViaPhone';
import VerifyOtp from '../../screens/authFlow/Join/VerifyOtp';
import StatusScreen from '../../screens/authFlow/Join/StatusScreen';
import SignInByEmail from '../../screens/authFlow/SignIn/SignInByEmail';
import SignIn from '../../screens/authFlow/SignIn/SignIn';
import SignInByPhone from '../../screens/authFlow/SignIn/SignInByPhone';
import ForgetPassword from '../../screens/authFlow/ForgetPassword/ForgetPassword';
import VerifyOtpForgetPassword from '../../screens/authFlow/ForgetPassword/VerifyOtpForgetPassword';
import NewPassword from '../../screens/authFlow/ForgetPassword/NewPassword';
import OnBoarding1 from '../../screens/authFlow/onBoarding/OnBoarding1';
import OnBoarding2 from '../../screens/authFlow/onBoarding/OnBoarding2';
import OnBoarding3 from '../../screens/authFlow/onBoarding/OnBoarding3';
import OnBoarding4 from '../../screens/authFlow/onBoarding/OnBoarding4';
import JoinViaEmail from '../../screens/authFlow/Join/JoinViaEmail';

export const authScreens = {
  Splash,
  JoinScreen,
  JoinViaEmail,
  JoinViaPhone,
  VerifyOtp,
  StatusScreen,
  SignInByEmail,
  SignInByPhone,
  SignIn,
  ForgetPassword,
  VerifyOtpForgetPassword,
  NewPassword,
  OnBoarding1,
  OnBoarding2,
  OnBoarding3,
  OnBoarding4,
};

// profile screens

// discover tab screens
import DiscoverScreen from '../../screens/appFlow/Discover/DiscoverScreen';
import SideMenu from '../../screens/appFlow/SideMenu/SideMenu';
import HelpCenter from '../../screens/appFlow/HelpCenter/HelpCenter';
import ViewPost from '../../components/ViewPost';

import CompanyProfile from '../../screens/appFlow/CompanyProfile/CompanyProfile';
import ComapnyPostPage from '../../screens/appFlow/CompanyProfile/CompnayPostPage/ComapnyPostPage';
import ComapnyProductReviewsPage from '../../screens/appFlow/CompanyProfile/CompanyProductReviewsPage/ComapnyProductReviewsPage';
import CompanyProductReviewPreview from '../../screens/appFlow/CompanyProfile/CompanyProductReviewPreview/CompanyProductReviewPreview';
import CompanyServiceReviewPreview from '../../screens/appFlow/CompanyProfile/CompanyServiceReviewPreview/CompanyServiceReviewPreview';
import ComapnyProductsListing from '../../screens/appFlow/CompanyProfile/CompanyProductListing/ComapnyProductsListing';
import CompanyEventListingPage from '../../screens/appFlow/CompanyProfile/CompanyEventListing/CompanyEventListingPage';

import PeopleAttendessList from '../../screens/appFlow/ContactLists/PeopleAttendessList';
import Notifications from '../../screens/appFlow/Notifications/Notifications';
import UserProfile from '../../screens/appFlow/UserProfile/UserProfile';
import GroupMemberShipsList from '../../screens/appFlow/UserProfile/GroupsMemberShipsList/GroupsMemberShipsList';
import UserPostPage from '../../screens/appFlow/UserProfile/UserPostPage/UserPostPage';

export const discover = {
  DiscoverScreen,
  SideMenu,
  IndividualChat,
  GroupChat,
  OpenChat,
  Messages,
  RequestChat,
  InvitationList,
  ViewPost,
  CompanyProfile,
  ComapnyPostPage,
  ComapnyProductReviewsPage,
  CompanyProductReviewPreview,
  CompanyServiceReviewPreview,
  ComapnyProductsListing,
  CompanyEventListingPage,
  EventDetails,
  PeopleAttendessList,
  HelpCenter,
  Notifications,
  UserProfile,
  GroupMemberShipsList,
  UserPostPage,
  // events
  CalenderEvents,
  EventPeopleList,
  CreateEvent,
  CalenderMap,
  CalenderStatusScreen,
  Report,
  EditUserProfile,
  EditUserInformation,
  Edit_Accomplishments,
  Add_Certificates,
  View_Accomplishments,
  View_Certificates,
  AddGroupsMembership,
  EditCompanyProfile,
  EditCompanyInformation,
  Edit_BusinessDetails,
  PeopleReviewList,
  AddEditProducts,
  CompanyServicesListing,
  AddEditServices,

  // settings screen
  Settings,
  PrivacyPolicy,
  TermsAndConditions,
  AccountPreferences,
  ResetPassword,
  ForgetPasswordSettings,
  VerifyOtpFromSettings,
  NewPasswordFromSetting,
  //

  AddPosts,
  MediaPostScreens,
  PollPostScreen,
  ProductPostScreen,
  EventPostScreen,
  DocumentPostScreen,
  ServicesPostScreen,
  CelebrationPostScreen,
  ArticlePostScreen,
};

import Networking from '../../screens/appFlow/Networking/Networking';
import InvitationList from '../../screens/appFlow/Networking/InvitationList/InvitationList';
import NetworkingList from '../../screens/appFlow/Networking/NetworkingList/NetworkingList';

export const networkingScreens = {
  Networking,
  Notifications,
  IndividualChat,
  GroupChat,
  OpenChat,
  Messages,
  SideMenu,
  ViewPost,
  HelpCenter,
  InvitationList,
  UserProfile,
  Messages,
  RequestChat,
  GroupMemberShipsList,
  UserPostPage,
  NetworkingList,
  CompanyProfile,
  ComapnyPostPage,
  ComapnyProductReviewsPage,
  CompanyProductReviewPreview,
  CompanyServiceReviewPreview,
  ComapnyProductsListing,
  CompanyEventListingPage,
  EventDetails,
  PeopleAttendessList,
  CalenderEvents,
  EventPeopleList,
  CreateEvent,
  CalenderMap,
  CalenderStatusScreen,
  Report,
  EditUserProfile,
  EditUserInformation,
  Edit_Accomplishments,
  Add_Certificates,
  View_Accomplishments,
  View_Certificates,
  AddGroupsMembership,
  EditCompanyProfile,
  EditCompanyInformation,
  Edit_BusinessDetails,
  PeopleReviewList,
  AddEditProducts,
  CompanyServicesListing,
  AddEditServices,
  Settings,
  PrivacyPolicy,
  TermsAndConditions,
  AccountPreferences,
  ResetPassword,
  ForgetPasswordSettings,
  VerifyOtpFromSettings,
  NewPasswordFromSetting,
  //
  AddPosts,
  MediaPostScreens,
  PollPostScreen,
  ProductPostScreen,
  EventPostScreen,
  DocumentPostScreen,
  ServicesPostScreen,
  CelebrationPostScreen,
  ArticlePostScreen,
};

import AddPosts from '../../screens/appFlow/AddPosts/AddPosts';
import MediaPostScreens from '../../screens/appFlow/AddPosts/PostAddScreens/MediaPostScreen/MediaPostScreen';
import PollPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/PollPostScreen/PollPostScreen';
import ProductPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/ProductPostScreen/ProductPostScreen';
import EventPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/EventPostScreen/EventPostScreen';
export const addpostsScreens = {
  AddPosts,
  MediaPostScreens,
  PollPostScreen,
  ProductPostScreen,
  EventPostScreen,
  DocumentPostScreen,
  ServicesPostScreen,
  CelebrationPostScreen,
  ArticlePostScreen,
};

import Directory from '../../screens/appFlow/Directory/Directory';
export const directoryScreens = {
  Directory,
  SideMenu,
  ViewPost,
  IndividualChat,
  GroupChat,
  OpenChat,
  Messages,
  PeopleAttendessList,
  RequestChat,
  InvitationList,
  GroupMemberShipsList,
  UserPostPage,
  Report,
  CompanyProfile,
  ComapnyPostPage,
  ComapnyProductReviewsPage,
  CompanyProductReviewPreview,
  CompanyServiceReviewPreview,
  ComapnyProductsListing,
  CompanyEventListingPage,
  HelpCenter,
  Notifications,
  UserProfile,
  GroupMemberShipsList,

  CalenderEvents,
  EventPeopleList,
  EventDetails,
  CreateEvent,
  CalenderMap,
  CalenderStatusScreen,
  Report,
  EditUserProfile,
  EditUserInformation,
  Edit_Accomplishments,
  Add_Certificates,
  View_Accomplishments,
  View_Certificates,
  AddGroupsMembership,
  EditCompanyProfile,
  EditCompanyInformation,
  Edit_BusinessDetails,
  PeopleReviewList,
  AddEditProducts,
  CompanyServicesListing,
  AddEditServices,
  Settings,
  PrivacyPolicy,
  TermsAndConditions,
  AccountPreferences,
  ResetPassword,
  ForgetPasswordSettings,
  VerifyOtpFromSettings,
  NewPasswordFromSetting,
  //
  AddPosts,
  MediaPostScreens,
  PollPostScreen,
  ProductPostScreen,
  EventPostScreen,
  DocumentPostScreen,
  ServicesPostScreen,
  CelebrationPostScreen,
  ArticlePostScreen,
};

import Messages from '../../screens/appFlow/Messages/Messages';
import Subscription from '../../screens/appFlow/Subscription/Subscription';
import GroupChat from '../../screens/appFlow/Messages/GroupChat/GroupChat';
import IndividualChat from '../../screens/appFlow/Messages/IndividualChat/IndividualChat';
import OpenChat from '../../screens/appFlow/Messages/OpenChat/OpenChat';
import RequestChat from '../../screens/appFlow/Messages/RequestChat/RequestChat';
import CalenderEvents from '../../screens/appFlow/Calender/CalenderEvents';
import EventDetails from '../../screens/appFlow/EventDetails/EventDetails';
import EventPeopleList from '../../screens/appFlow/Calender/EventPeopleList/EventPeopleList';
import CreateEvent from '../../screens/appFlow/Calender/CreateEvent/CreateEvent';
import CalenderMap from '../../screens/appFlow/Calender/CreateEvent/CalenderMap';
import CalenderStatusScreen from '../../screens/appFlow/Calender/StatusScreen/CalenderStatusScreen';
import Report from '../../screens/appFlow/Report/Report';

export const messagesScreens = {
  Messages,
  GroupChat,
  IndividualChat,
  OpenChat,
  PeopleAttendessList,
  RequestChat,
  InvitationList,
  UserProfile,
  GroupMemberShipsList,
  UserPostPage,
  Report,
  ViewPost,
  CompanyProfile,
  ComapnyPostPage,
  ComapnyProductReviewsPage,
  CompanyProductReviewPreview,
  CompanyServiceReviewPreview,
  ComapnyProductsListing,
  CompanyEventListingPage,
  EventDetails,
  PeopleAttendessList,
  EventPeopleList,
};

// profile edition stacks
import EditUserProfile from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditUserProfile/EditUserProfile';
import EditUserInformation from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditUserProfile/EditUserInformation/EditUserInformation';
import Edit_Accomplishments from '../../screens/appFlow/ProfileSetUp/PremiumData/Edit_Accomplishments';
import Add_Certificates from '../../screens/appFlow/ProfileSetUp/PremiumData/Add_Certificates';
import View_Accomplishments from '../../screens/appFlow/ProfileSetUp/PremiumData/View_Accomplishments';
import View_Certificates from '../../screens/appFlow/ProfileSetUp/PremiumData/View_Certificates';
import AddGroupsMembership from '../../screens/appFlow/ProfileSetUp/PremiumData/AddGroupsMembership';
import EditCompanyProfile from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditCompanyProfile/EditCompanyProfile';
import EditCompanyInformation from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditCompanyProfile/EditCompanyInformation/EditCompanyInformation';
import Edit_BusinessDetails from '../../screens/appFlow/ProfileSetUp/PremiumData/Edit_BusinessDetails';
import PeopleReviewList from '../../screens/appFlow/ContactLists/PeopleReviewList';
import AddEditProducts from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditCompanyProfile/EditCompanyInformation/AddEditProducts/AddEditProducts';
import CompanyServicesListing from '../../screens/appFlow/CompanyProfile/CompanyServicesListing/CompanyServicesListing';
import AddEditServices from '../../screens/appFlow/ProfileSetUp/EditProfiles/EditCompanyProfile/EditCompanyInformation/AddEditServices/AddEditServices';
import DocumentPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/DocumentPostScreen/DocumentPostScreen';
import ServicesPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/ServicesPostScreen/ServicesPostScreen';
import CelebrationPostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/CelebrationPostScreen/CelebrationPostScreen';
import ArticlePostScreen from '../../screens/appFlow/AddPosts/PostAddScreens/ArticlePostScreen/ArticlePostScreen';
import Settings from '../../screens/appFlow/SideMenu/Settings/Settings';
import PrivacyPolicy from '../../screens/appFlow/SideMenu/Settings/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../../screens/appFlow/SideMenu/Settings/TermsAndConditions/TermsAndConditions';
import AccountPreferences from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/AccountPreferences';
import ResetPassword from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/ResetPassword/ResetPassword';
import ForgetPasswordSettings from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/ForgetPassword/ForgetPasswordSettings';
import VerifyOtpFromSettings from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/VerifyOtpFromSettings/VerifyOtpFromSettings';
import NewPasswordFromSetting from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/NewPasswordFromSetting/NewPasswordFromSetting';

export const profileEditingScreens = {
  EditUserProfile,
};
