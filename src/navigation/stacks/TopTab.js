import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from '../Routes';
import {messagesScreens} from '../exportScreens';
import {colors, fontFamily, fontSize} from '../../assets';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamily.MONTSERRAT_MEDIUM,
          fontSize: fontSize.BODY2_bold,
        },
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: colors.grey,
        tabBarIndicatorStyle: {
          backgroundColor: colors.pink,
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
        },
      }}>
      <Tab.Screen
        name={Routes.INDIVIDUALCHAT}
        component={messagesScreens.IndividualChat}
      />
      <Tab.Screen
        name={Routes.GROUPCHAT}
        component={messagesScreens.GroupChat}
      />
    </Tab.Navigator>
  );
};
