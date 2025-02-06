import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../../assets';
import AppText from '../../AppText';
import {useDispatch} from 'react-redux';
import {ProductsSelectionData} from '../../../utils/data/JsonData';
import {useNavigation} from '@react-navigation/native';
import MainButton from '../../MainButton';
import {useReducedMotion} from 'react-native-reanimated';

const ProductSelectionBottomSheet = ({
  setOpenProductSelectionModal,
  selectedProducts,
  setSelectedProducts,
}) => {
  const navigation = useNavigation();

  const BottomSheetForUserRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const dispatch = useDispatch();
  const snapPoints = useMemo(() => ['92%'], []);
  const handleClosePress = useCallback(() => {
    BottomSheetForUserRef?.current?.close();
    setOpenProductSelectionModal(false);
  }, []);

  const addProductToList = userSelected => {
    try {
      const selectedProductsSet = new Set(
        selectedProducts.map(item => item.key),
      );
      const newSelectedProducts = new Set(selectedProductsSet);

      if (selectedProductsSet.has(userSelected.key)) {
        newSelectedProducts.delete(userSelected.key);
      } else {
        newSelectedProducts.add(userSelected.key);
      }

      const updatedSelectedProducts = Array.from(newSelectedProducts).map(key =>
        ProductsSelectionData.find(item => item.key === key),
      );

      setSelectedProducts(updatedSelectedProducts);
    } catch (error) {
      console.error('Error updating selected products:', error);
    }
  };

  return (
    <BottomSheet
      ref={BottomSheetForUserRef}
      index={0}
      snapPoints={snapPoints}
      enableOverDrag={true}
      handleIndicatorStyle={{backgroundColor: colors.lightGrey, width: 50}}
      onClose={handleClosePress}
      enablePanDownToClose={true}
      animateOnMount={!reducedMotion}>
      <View style={styles.BottomScrollView}>
        <BottomSheetScrollView>
          <View style={styles.mainProductView}>
            {ProductsSelectionData?.map((item, index) => {
              return (
                <View style={styles.ImageView} key={item?.key}>
                  <View>
                    <Image source={item?.uri} style={styles.imageStyle} />
                    <TouchableOpacity
                      style={styles.crossIconView}
                      onPress={() => {
                        addProductToList(item);
                      }}>
                      <Image
                        source={
                          selectedProducts?.includes(item)
                            ? images.selectConfirm
                            : images.selectIcon
                        }
                        style={styles.crosIconStyle}
                        tintColor={
                          selectedProducts?.includes(item)
                            ? colors.pink
                            : colors.imageGrey
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <AppText
                    body={item?.productName}
                    style={styles.productNameStyle}
                    numberOfLines={2}
                  />
                </View>
              );
            })}
          </View>
        </BottomSheetScrollView>
      </View>
      <View style={styles.bottomButton}>
        <MainButton
          textColor={colors.white}
          title={'Done'}
          buttonColor={colors.black}
          onPress={() => setOpenProductSelectionModal(false)}
        />
      </View>
    </BottomSheet>
  );
};

export default ProductSelectionBottomSheet;
