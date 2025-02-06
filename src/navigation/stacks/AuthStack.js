import React from 'react';
import {Routes} from '../Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authScreens} from '../exportScreens';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    // <NavigationContainer>
    <Auth.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Auth.Screen name={Routes.SPLASH} component={authScreens.Splash} />
      <Auth.Screen
        name={Routes.JOIN_OPTION}
        component={authScreens.JoinScreen}
      />
      <Auth.Screen
        name={Routes.JOINVIAEMAIL}
        component={authScreens.JoinViaEmail}
      />
      <Auth.Screen
        name={Routes.JOINVIAPhone}
        component={authScreens.JoinViaPhone}
      />
      <Auth.Screen name={Routes.VERIFY_OTP} component={authScreens.VerifyOtp} />
      <Auth.Screen
        name={Routes.STATUS_SCREEN}
        component={authScreens.StatusScreen}
      />
      <Auth.Screen name={Routes.SIGNIN} component={authScreens.SignIn} />
      <Auth.Screen
        name={Routes.SIGNINBYEMAIL}
        component={authScreens.SignInByEmail}
      />
      <Auth.Screen
        name={Routes.SIGNINBYPHONE}
        component={authScreens.SignInByPhone}
      />
      <Auth.Screen
        name={Routes.FORGETPASSWORD}
        component={authScreens.ForgetPassword}
      />
      <Auth.Screen
        name={Routes.NEWPASSWORD}
        component={authScreens.NewPassword}
      />
      <Auth.Screen
        name={Routes.ONBOARDING1}
        component={authScreens.OnBoarding1}
      />
      <Auth.Screen
        name={Routes.ONBOARDING2}
        component={authScreens.OnBoarding2}
      />
      <Auth.Screen
        name={Routes.ONBOARDING3}
        component={authScreens.OnBoarding3}
      />
      <Auth.Screen
        name={Routes.ONBOARDING4}
        component={authScreens.OnBoarding4}
      />
      <Auth.Screen
        name={Routes.VERIFYOtpFORGETPASSWORD}
        component={authScreens.VerifyOtpForgetPassword}
      />
    </Auth.Navigator>
    // </NavigationContainer>
  );
};

export default AuthStack;
