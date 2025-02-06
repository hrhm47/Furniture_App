import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DrawerStack from './stacks/DrawerStack';

import { enableScreens } from 'react-native-screens';
enableScreens(false)
const MainNavigator = () => {
  
  return <>
    <DrawerStack/>
  </>;
};

export default MainNavigator;

const styles = StyleSheet.create({});
