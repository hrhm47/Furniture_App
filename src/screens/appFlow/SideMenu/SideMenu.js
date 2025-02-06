import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {sideMenuData} from '../../../utils/data/JsonData';
import {colors, heightPixel, images} from '../../../assets';
import AppText from '../../../components/AppText';

import GetPlan from '../../../components/GetPlan';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Routes, StackNames} from '../../../navigation/Routes';
import GLobalBackground from '../../../components/GLobalbackground';

const SideMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topView}>
      <View
        style={{
          // paddingTop: heightPixel(30),
          backgroundColor: colors.white,
          flex: 1,
        }}>
        <ImageBackground
          source={images.sideBackground}
          resizeMode="stretch"
          style={styles.backgroundImg}>
          <View style={styles.profileView}>
            <View style={styles.imgView}>
              <Image
                source={images.userSideProfile}
                resizeMode="contain"
                style={styles.imgStyle}
              />
            </View>
            <View style={styles.textView}>
              <AppText body={'Willie Tanner'} style={styles.nameStyle} />
              <AppText body={'Position Here'} style={styles.positionStyle} />
              <TouchableOpacity
                style={styles.ProfileButton}
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                  setTimeout(() => {
                    navigation.navigate(Routes.EDITUSERPROFILE);
                  }, 100);
                }}>
                <AppText body={'View Profile'} style={styles.btnText} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {/* flat view for side buttons */}
        <View>
          <FlatList
            data={sideMenuData}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.flatButtonView}
                  onPress={() => {
                    if (item.route !== '') {
                      navigation.dispatch(DrawerActions.toggleDrawer());
                      setTimeout(() => {
                        navigation.navigate(item.route);
                      }, 100);
                    }
                  }}>
                  <Image source={item.icon} style={{width: 24, height: 24}} />
                  <AppText body={item.name} />
                </TouchableOpacity>
              );
            }}
          />
          {/* get plan card */}
          <GetPlan
            style={styles.GetPlanView}
            title={'PREMIUM PLAN'}
            description={
              'Upgrade for additional features & unlocks advanced tools.'
            }
            onPress={() => navigation.navigate(Routes.SUBSCRIPTION)}
          />
        </View>
      </View>
    </View>
  );
};

export default SideMenu;
