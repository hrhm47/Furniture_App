import {Image, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {colors, images} from '../../assets';
import AppText from '../AppText';
import {useDispatch} from 'react-redux';
import {setOpenCompanySponsoredBottomSheet} from '../../app/slices/postSlice';
import {useReducedMotion} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const BottomSheetForSponsoredPost = ({removeTabOnReturn = false}) => {
  const BottomSheetForSponsoredPostRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const reducedMotion = useReducedMotion();
  // variables
  const snapPoints = useMemo(() => ['40%', '55%', '65%'], []);
  const handleClosePress = useCallback(() => {
    BottomSheetForSponsoredPostRef?.current?.close();
    dispatch(setOpenCompanySponsoredBottomSheet(false));
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
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
      ref={BottomSheetForSponsoredPostRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      onClose={handleClosePress}
      backgroundStyle={'position'}
      backdropComponent={renderBackdrop}
      animateOnMount={!reducedMotion}
      //   onChange={handleSheetChange}
    >
      <BottomSheetScrollView>
        <TouchableOpacity style={styles.itemStyle} onPress={() => {}}>
          <View style={styles.bottomMiddleView}>
            <Image
              source={images.share}
              style={styles.imgStyle}
              tintColor={colors.black}
            />
            <AppText body={'Share'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemStyle}
          onPress={() => {
            handleClosePress();
            navigation.navigate(Routes.REPORT, {
              removeTabOnReturn: removeTabOnReturn,
            });
          }}>
          <View style={styles.bottomMiddleView}>
            <Image
              source={images.report}
              style={styles.imgStyle}
              tintColor={colors.black}
            />
            <AppText body={'Report Ad'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemStyle} onPress={() => {}}>
          <View style={styles.bottomMiddleView}>
            <Image
              source={images.hideAd}
              style={styles.imgStyle}
              tintColor={colors.black}
            />
            <AppText body={'Hide Ad'} />
          </View>
        </TouchableOpacity>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetForSponsoredPost;
// export sheetRef
