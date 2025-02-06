import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routes, StackNames} from '../Routes';
import SideMenu from '../../screens/appFlow/SideMenu/SideMenu';
import AuthStack from './AuthStack';
import BottomTab from './BottomTab';
import ProfileStack from './ProfileStack';
import HelpCenter from '../../screens/appFlow/HelpCenter/HelpCenter';
import Subscription from '../../screens/appFlow/Subscription/Subscription';
import Settings from '../../screens/appFlow/SideMenu/Settings/Settings';
import PrivacyPolicy from '../../screens/appFlow/SideMenu/Settings/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from '../../screens/appFlow/SideMenu/Settings/TermsAndConditions/TermsAndConditions';
import AccountPreferences from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/AccountPreferences';
import ResetPassword from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/ResetPassword/ResetPassword';
import ForgetPasswordSettings from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/ForgetPassword/ForgetPasswordSettings';
import VerifyOtpFromSettings from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/VerifyOtpFromSettings/VerifyOtpFromSettings';
import NewPasswordFromSetting from '../../screens/appFlow/SideMenu/Settings/AccountPreferences/NewPasswordFromSetting/NewPasswordFromSetting';
import Report from '../../screens/appFlow/Report/Report';
import CalenderStatusScreen from '../../screens/appFlow/Calender/StatusScreen/CalenderStatusScreen';
import CalenderMap from '../../screens/appFlow/Calender/CreateEvent/CalenderMap';
import CreateEvent from '../../screens/appFlow/Calender/CreateEvent/CreateEvent';
import EventPeopleList from '../../screens/appFlow/Calender/EventPeopleList/EventPeopleList';
import CalenderEvents from '../../screens/appFlow/Calender/CalenderEvents';

const Drawer = createDrawerNavigator();
const MainStack = createNativeStackNavigator();

const BottomTabWithDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStatusBarAnimation: 'fade',
        swipeEnabled: true,
      }}
      drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name={StackNames.BOTTOMTAB} component={BottomTab} />
    </Drawer.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name={StackNames.ATUHSTACK} component={AuthStack} />
          <MainStack.Screen
            name={StackNames.PROFILESTACK}
            component={ProfileStack}
          />
          <MainStack.Screen
            name={StackNames.BOTTOMTABWITHDRAWER}
            component={BottomTabWithDrawer}
          />
          <MainStack.Screen
            name={Routes.SUBSCRIPTION}
            component={Subscription}
          />
          {/* <MainStack.Screen name={Routes.SETTINGS} component={Settings} />
          <MainStack.Screen
            name={Routes.PRIVACYPOLICY}
            component={PrivacyPolicy}
          />
          <MainStack.Screen
            name={Routes.TERMSANDCONDITIONS}
            component={TermsAndConditions}
          />
          <MainStack.Screen
            name={Routes.ACCOUNTPREFERENCES}
            component={AccountPreferences}
          />
          <MainStack.Screen
            name={Routes.RESETPASSWORD}
            component={ResetPassword}
          />
          <MainStack.Screen
            name={Routes.FORGETPASSWORDFROMSETTINGS}
            component={ForgetPasswordSettings}
          />
          <MainStack.Screen
            name={Routes.VERIFYOTPFROMSETTINGS}
            component={VerifyOtpFromSettings}
          />
          <MainStack.Screen
            name={Routes.NEWPASSWORDFROMSETTING}
            component={NewPasswordFromSetting}
          />
          <MainStack.Screen name={Routes.HELPCENTER} component={HelpCenter} />

          <MainStack.Screen
            name={Routes.CALENDEREVENTS}
            component={CalenderEvents}
          />
          <MainStack.Screen
            name={Routes.EVENTPEOPLELIST}
            component={EventPeopleList}
          />
          <MainStack.Screen name={Routes.CREATEEVENT} component={CreateEvent} />
          <MainStack.Screen name={Routes.CALENDARMAP} component={CalenderMap} />
          <MainStack.Screen
            name={Routes.STATUS_SCREEN}
            component={CalenderStatusScreen}
          />
          <MainStack.Screen name={Routes.REPORT} component={Report} /> */}
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default DrawerStack;
