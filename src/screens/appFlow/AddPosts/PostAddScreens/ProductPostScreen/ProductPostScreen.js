import {
  Image,
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import HeaderButton from '../../../../../components/HeaderButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {colors, heightPixel, images} from '../../../../../assets';
import AppText from '../../../../../components/AppText';
import RichInputField from '../../../../../components/InputField/RichInputField';
import SmallSizeButton from '../../../../../components/SmallSizeButton';
import MainButton from '../../../../../components/MainButton';
import ProductSelectionBottomSheet from '../../../../../components/BottomSheetComponent/ProductSelectionBottomSheet/ProductSelectionBottomSheet';
import {StackNames} from '../../../../../navigation/Routes';

const ProductPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');
  const [openModalForPhotos, setOpenModalForPhotos] = useState(false);
  const [openProductSelectionModal, setOpenProductSelectionModal] =
    useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );

  const removeSelectedProducts = keyToRemove => {
    setSelectedProducts(prev => prev.filter(item => item.key !== keyToRemove));
  };
  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Add product Post'}
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          contentContainerStyle={{paddingBottom: heightPixel(120)}}>
          <View style={{marginBottom: heightPixel(10)}}>
            <RichInputField
              placeHolder={'Add caption/thoughts...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTypedThoughts}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <AppText body={'Select Products '} />
            <AppText body={'(multiple allowed)'} style={{color: colors.grey}} />
          </View>
          <View style={styles.blackButtonView}>
            <SmallSizeButton
              buttonImageAvailable={true}
              buttonImage={images.add}
              ButtonStyle={styles.selectMoreProductButton}
              ButtonText={'Select Products'}
              ButtonPress={() => {
                setOpenProductSelectionModal(true);
              }}
            />
          </View>
          <View style={styles.mainProductView}>
            {selectedProducts?.map((item, index) => {
              return (
                <View style={styles.ImageView}>
                  <Image source={item?.uri} style={styles.imageStyle} />
                  <AppText
                    body={item?.productName}
                    style={styles.productNameStyle}
                    numberOfLines={2}
                  />
                  <TouchableOpacity
                    style={styles.crossIconView}
                    onPress={() => {
                      removeSelectedProducts(item?.key);
                    }}>
                    <Image
                      source={images.crossIcons}
                      style={styles.crosIconStyle}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={
              userTypedThoughts?.length > 0 ? colors.white : colors.grey
            }
            title={'Post'}
            buttonColor={
              userTypedThoughts?.length > 0 ? colors.black : colors.lightGrey
            }
            onPress={
              () =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: StackNames.DISCOVERSTACK,
                    },
                  ],
                })
              // [navigation.navigate(StackNames.DISCOVERSTACK)]
            }
          />
        </View>
      </View>
      {openProductSelectionModal && (
        <ProductSelectionBottomSheet
          setOpenProductSelectionModal={setOpenProductSelectionModal}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      )}
    </AppBackground>
  );
};

export default ProductPostScreen;
