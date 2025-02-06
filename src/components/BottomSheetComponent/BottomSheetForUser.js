import {Image, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import AppText from '../AppText';
import {useDispatch} from 'react-redux';
import {
  setOpenBlockUserPostAccount,
  setOpenBottomSheetToRemoveUser,
  setOpenMessageModal,
  setOpenUserBottomSheet,
} from '../../app/slices/postSlice';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {useReducedMotion} from 'react-native-reanimated';

const BottomSheetForUser = ({bottomData, removeTabOnReturn = false}) => {
  const reducedMotion = useReducedMotion();
  const BottomSheetForUserRef = useRef();

  const navigation = useNavigation();
  console.log('bottomData', bottomData);

  const dispatch = useDispatch();

  // variables
  const snapPoints = useMemo(() => ['40%', '55%', '75%'], []);
  const handleClosePress = useCallback(() => {
    BottomSheetForUserRef?.current?.close();
    dispatch(setOpenUserBottomSheet(false));
    dispatch(setOpenBottomSheetToRemoveUser(false));
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        // onPress={() => handleClosePress()}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        {...props}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      style={styles.BottomTopView}
      ref={BottomSheetForUserRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={() => handleClosePress()} // Remove this line
      backgroundStyle={'position'}
      animateOnMount={!reducedMotion}
      backdropComponent={renderBackdrop}>
      <BottomSheetFlatList
        data={bottomData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemStyle}
              onPress={() => {
                switch (item?.name) {
                  case 'Connect with message':
                    handleClosePress();
                    dispatch(setOpenMessageModal(true));
                    break;
                  case 'Block':
                    handleClosePress();
                    dispatch(setOpenBlockUserPostAccount(true));
                    break;
                  case 'Report':
                    handleClosePress();
                    navigation.navigate(Routes.REPORT, {
                      removeTabOnReturn: removeTabOnReturn,
                    });
                    break;
                  case 'Connect':
                    handleClosePress();
                  default:
                    break;
                }
              }}>
              <View style={styles.bottomMiddleView}>
                <Image source={item?.icon} style={styles.imgStyle} />
                <AppText body={item?.name} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </BottomSheet>
  );
};

export default BottomSheetForUser;
