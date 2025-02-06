import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';

const SquareButtons = ({
  bgColorBtn1,
  bgColorBtn2,
  bdColorBtn1,
  bdColorBtn2,
  ButtonTextColorBtn1,
  ButtonTextColorBtn2,
  leftButtonOnPress,
  RigtButtonOnPress,
  btn1Text='Products',
  btn2Text='Services',
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.ButtonView}>
        <Pressable
          onPress={leftButtonOnPress}
          style={styles.singleButtonStyle(bgColorBtn1, bdColorBtn1)}>
          <AppText
            body={btn1Text}
            style={styles.buttonText(ButtonTextColorBtn1)}
          />
        </Pressable>
        <Pressable
          onPress={RigtButtonOnPress}
          style={styles.singleButtonStyle(bgColorBtn2, bdColorBtn2)}>
          <AppText
            body={btn2Text}
            style={styles.buttonText(ButtonTextColorBtn2)}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SquareButtons;
