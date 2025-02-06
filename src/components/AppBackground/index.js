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
import {colors} from '../../assets';

const AppBackground = ({
  children,
  style,
  onStartShouldSetResponder,
  statusBarColor,
}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle={statusBarColor}
        backgroundColor={'transparent'}
      />
      {Platform.OS === 'ios' ? (
        <View
          style={[
            style,
            {flex: 1, alignItems: 'center', backgroundColor: colors.darkBlack},
          ]}
          onStartShouldSetResponder={onStartShouldSetResponder}>
          <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </View>
      ) : (
        <SafeAreaView
          style={[style, styles.container]}
          onStartShouldSetResponder={onStartShouldSetResponder}>
          {children}
        </SafeAreaView>
      )}
    </>
  );
};

export default AppBackground;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 23 : 0,
    // alignItems:"center",
    // zIndex: 999
  },
});
