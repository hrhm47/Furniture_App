import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes, StackNames} from '../Routes';
import DiscoverStack from './DiscoverStack';
import NetworkStack from './NetworkStack';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../assets';
import {Image, View} from 'react-native';
import DirectoryStack from './DirectoryStack';
import AddPostsStack from './AddPostsStack';
import MessagesStack from './MessagesStack';
import {hp} from '../../assets/constants';

const bottomTabsData = [
  {
    key: 'iusw',
    routeName: StackNames.DISCOVERSTACK,
    component: DiscoverStack,
    icon: images.globalSearch,
  },
  {
    key: '098vv',
    routeName: StackNames.NETWORKSTACK,
    component: NetworkStack,
    icon: images.share,
  },
  {
    key: '4ctvhn',
    routeName: StackNames.ADDPOSTSYSTACK,
    component: AddPostsStack,
    icon: images.addPosts,
  },
  {
    key: 'qeqwe',
    routeName: StackNames.DIRECTORYSTACK,
    component: DirectoryStack,
    icon: images.directory,
  },
  {
    key: '87v9yv',
    routeName: StackNames.MESSAGESYSTACK,
    component: MessagesStack,
    icon: images.chatIcon,
  },
];

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: colors.grey,
      }}>
      {bottomTabsData?.map(item => {
        return (
          <Tab.Screen
            key={item?.key}
            options={{
              tabBarInactiveTintColor: colors.grey,
              tabBarActiveTintColor: colors.pink,
              tabBarHideOnKeyboard: true,
              tabBarStyle: {
                // height: heightPixel(50),
                // paddingBottom: heightPixel(10),
              },
              tabBarLabelStyle: {
                fontFamily: fontFamily.MONTSERRAT_REGULAR,
                fontSize: hp(1.6),
              },
              tabBarIcon: ({color, size, focused}) => {
                return (
                  <>
                    {focused && (
                      <View
                        style={{
                          borderTopWidth: 1,
                          borderTopColor: colors.pink,
                          height: heightPixel(3),
                          backgroundColor: colors.pink,
                          width: widthPixel(45),
                          marginBottom: heightPixel(10),
                        }}
                      />
                    )}
                    <Image
                      source={item?.icon}
                      style={{width: widthPixel(20), height: widthPixel(20)}}
                      tintColor={color}
                    />
                  </>
                );
              },
            }}
            name={item?.routeName}
            component={item?.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
