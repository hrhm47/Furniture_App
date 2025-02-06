import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes, StackNames} from '../Routes';
import {messagesScreens} from '../exportScreens';
import {TopTab} from './TopTab';

const Messages = createNativeStackNavigator();

const MessagesStack = () => {
  return (
    <Messages.Navigator
      initialRouteName={Routes.MESSAGES}
      screenOptions={{
        headerShown: false,
        // gestureEnabled:true
      }}>
      <Messages.Screen
        name={Routes.MESSAGES}
        component={messagesScreens.Messages}
      />
      <Messages.Screen
        name={Routes.OPENCHAT}
        component={messagesScreens.OpenChat}
      />
      <Messages.Screen
        name={Routes.PEOPLEATTENDEELIST}
        component={messagesScreens.PeopleAttendessList}
      />
      <Messages.Screen name={StackNames.TOPTABINCHAT} component={TopTab} />
      <Messages.Screen
        name={Routes.REQUESTCHAT}
        component={messagesScreens.RequestChat}
      />
      <Messages.Screen
        name={Routes.INVITATIONLIST}
        component={messagesScreens.InvitationList}
      />
      <Messages.Screen
        name={Routes.USERPROFILE}
        component={messagesScreens.UserProfile}
      />
      <Messages.Screen
        name={Routes.GROUPMEMBERSHIPSLIST}
        component={messagesScreens.GroupMemberShipsList}
      />
      <Messages.Screen
        name={Routes.USERPOSTPAGE}
        component={messagesScreens.UserPostPage}
      />
      <Messages.Screen
        name={Routes.REPORT}
        component={messagesScreens.Report}
      />
      <Messages.Screen
        name={Routes.COMPANYPROFILE}
        component={messagesScreens.CompanyProfile}
      />
      <Messages.Screen
        name={Routes.COMPANYPOSTPAGE}
        component={messagesScreens.ComapnyPostPage}
      />
      <Messages.Screen
        name={Routes.COMPANYPRODUCTREVIEWPAGE}
        component={messagesScreens.ComapnyProductReviewsPage}
      />
      <Messages.Screen
        name={Routes.COMPANYPRODUCTREVIEWPREVIEW}
        component={messagesScreens.CompanyProductReviewPreview}
      />
      <Messages.Screen
        name={Routes.COMPANYSERVICEREVIEWPREVIEW}
        component={messagesScreens.CompanyServiceReviewPreview}
      />
      <Messages.Screen
        name={Routes.COMPANYPRODUCTLISTING}
        component={messagesScreens.ComapnyProductsListing}
      />
      <Messages.Screen
        name={Routes.COMPANYEVENTLISTINGPAGE}
        component={messagesScreens.CompanyEventListingPage}
      />
      <Messages.Screen
        name={Routes.EVENTDETAILEDPAGE}
        component={messagesScreens.EventDetails}
      />
      <Messages.Screen
        name={Routes.VIEWPOST}
        component={messagesScreens.ViewPost}
      />
      <Messages.Screen
        name={Routes.EVENTPEOPLELIST}
        component={messagesScreens.EventPeopleList}
      />
    </Messages.Navigator>
  );
};

export default MessagesStack;
