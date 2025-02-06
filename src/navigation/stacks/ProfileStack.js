import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../Routes';
import CreateProfile from '../../screens/appFlow/ProfileSetUp/CreateProfile';
import Edit_Accomplishments from '../../screens/appFlow/ProfileSetUp/PremiumData/Edit_Accomplishments';
import Add_Certificates from '../../screens/appFlow/ProfileSetUp/PremiumData/Add_Certificates';
import Edit_Email_Phone from '../../screens/appFlow/ProfileSetUp/PremiumData/Edit_Email_Phone';
import YearsInIndustry from '../../screens/appFlow/ProfileSetUp/PremiumData/YearsInInudstry';
import View_Accomplishments from '../../screens/appFlow/ProfileSetUp/PremiumData/View_Accomplishments';
import View_Certificates from '../../screens/appFlow/ProfileSetUp/PremiumData/View_Certificates';
import Subscription from '../../screens/appFlow/Subscription/Subscription';

const Profile = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Profile.Navigator
      initialRouteName={Routes.CREATEPROFILE}
      screenOptions={{
        headerShown: false,
        gestureEnabled:false,
      
      }}>
      <Profile.Screen name={Routes.CREATEPROFILE} component={CreateProfile} />
      <Profile.Screen
        name={Routes.EDIT_ACCOMPLISHMENTS}
        component={Edit_Accomplishments}
      />
      <Profile.Screen
        name={Routes.ADD_CERTIFICATES}
        component={Add_Certificates}
      />
      <Profile.Screen
        name={Routes.EDIT_EMAIL_PHONE}
        component={Edit_Email_Phone}
      />
      <Profile.Screen
        name={Routes.YEARSININDUSTRY}
        component={YearsInIndustry}
      />
      <Profile.Screen
        name={Routes.VIEW_ACCOMPLISHMENTS}
        component={View_Accomplishments}
      />
      <Profile.Screen
        name={Routes.VIEW_CERTIFICATES}
        component={View_Certificates}
      />
      <Profile.Screen
        name={Routes.SUBSCRIPTION}
        component={Subscription}
      />
    </Profile.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
