import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../Routes';
import {profileEditingScreens} from '../exportScreens';

const EditProfile = createNativeStackNavigator();

const ProfileEditStack = () => {
  return (
    <EditProfile.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <EditProfile.Screen
        name={Routes.EDITUSERPROFILE}
        component={profileEditingScreens.EditUserProfile}
      />
    </EditProfile.Navigator>
  );
};

export default ProfileEditStack;
