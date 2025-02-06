import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {colors, heightPixel} from '../../assets';
import {useHeaderHeight} from '@react-navigation/elements';
const GLobalBackground = ({
  children,
  image,
  style,
  onStartShouldSetResponder,
}) => {
  // const headerHeight = Platform.OS=='android' ? StatusBar.currentHeight():0
  return (
    <>
      {/* <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      /> */}
      {Platform.OS === 'ios' ? (
        <ImageBackground
          style={[style, {flex: 1}]}
          source={image}
          resizeMode="cover">
          <SafeAreaView
            style={styles.container}
            onStartShouldSetResponder={onStartShouldSetResponder}>
            <StatusBar
              barStyle={'dark-content'}
              translucent={true}
              backgroundColor={'transparent'}
            />
            {children}
          </SafeAreaView>
        </ImageBackground>
      ) : (
        <ImageBackground
          style={[{flex: 1}, style]}
          source={image}
          resizeMode="cover">
          <SafeAreaView
            style={styles.container}
            onStartShouldSetResponder={onStartShouldSetResponder}>
            <StatusBar
              barStyle={'dark-content'}
              translucent={true}
              backgroundColor={'transparent'}
            />
            {children}
          </SafeAreaView>
        </ImageBackground>
      )}
    </>
  );
};

export default GLobalBackground;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.darkBlack,
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? heightPixel(30) : 0,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
    // alignItems:"center",
    // zIndex: 999
  },
});
