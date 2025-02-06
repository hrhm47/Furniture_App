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
import {
  setOpenChatModal,
  setOpenCompanyBottomSheet,
  setOpenMessageModal,
  setSelectContactToSendCompanyProfile,
} from '../../app/slices/postSlice';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';
import {useReducedMotion} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const BottomSheetForCompany = ({removeTabOnReturn = false}) => {
  const BottomSheetForCompanyRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // variables
  const snapPoints = useMemo(() => ['40%', '55%', '65%'], []);
  const handleClosePress = useCallback(() => {
    BottomSheetForCompanyRef?.current?.close();
    dispatch(setOpenCompanyBottomSheet(false));
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

  const [blockThisPost, setblockThisPost] = useState(false);

  return (
    <>
      <BottomSheet
        style={styles.BottomTopView}
        ref={BottomSheetForCompanyRef}
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
                source={images.Follow}
                style={styles.imgStyle}
                // tintColor={colors.black}
              />
              {/* <AppText body={"Don't recommned"} /> */}
              <AppText body={'Follow'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => {
              handleClosePress();
              dispatch(setSelectContactToSendCompanyProfile(true));
              navigation.navigate(Routes.MESSAGES, {
                removeTabOnReturn: removeTabOnReturn,
              });
            }}>
            <View style={styles.bottomMiddleView}>
              <Image
                // source={images?.Follow}
                source={images?.sendSave}
                style={styles.imgStyle}
                // tintColor={colors.black}
              />
              {/* <AppText body={'Follow'} /> */}
              <AppText body={'Send Via message'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemStyle} onPress={() => {}}>
            <View style={styles.bottomMiddleView}>
              <Image
                source={images.saveFilled}
                style={styles.imgStyle}
                tintColor={colors.black}
              />
              <AppText body={'Save'} />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.itemStyle} onPress={() => {}}>
            <View style={styles.bottomMiddleView}>
              <Image
                // source={images.sendSave}
                source={images.sendSave}
                style={styles.imgStyle}
                // tintColor={colors.black}
              />
              <AppText body={'Send profile via message'} />
              <AppText body={'Send profile via message'} />
            </View>
          </TouchableOpacity> */}
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
              setblockThisPost(true);
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
              <AppText body={'Report'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => {
              setblockThisPost(true);
            }}>
            <View style={styles.bottomMiddleView}>
              <Image
                source={images.block}
                style={styles.imgStyle}
                tintColor={colors.black}
              />
              <AppText body={'Block'} />
            </View>
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheet>

      {blockThisPost && <DeleteModal />}
    </>
  );
};

export default BottomSheetForCompany;
// export sheetRef
