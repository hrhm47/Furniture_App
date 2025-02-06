import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import HeaderButton from '../../../../../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colors, heightPixel, images} from '../../../../../../../assets';
import {styles} from './styles';
import AppText from '../../../../../../../components/AppText';
import LableInput from '../../../../../../../components/LabelInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../../../../components/MainButton';
import AppBackground from '../../../../../../../components/AppBackground';
import {uploadImage} from '../../../../../../../utils/methods/CameraFunctions';

const AddEditProducts = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const productData = paramsData?.productData;

  const [coverImage, setProfilePic] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productUrl, setProductUrl] = useState('');

  const CoverPhoto = () => {
    uploadImage(setProfilePic);
  };

  return (
    <AppBackground style={styles.topView}>
      <HeaderButton
        title={'Add Products'}
        leftOnPress={() => navigation.goBack()}
        leftBtnTextStyle={{color: colors.black}}
        leftIconColor={colors.black}
      />

      <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View style={styles.mainView}>
          <AppText body={'Add Image'} />
          {coverImage ? (
            <View style={{marginTop: heightPixel(10)}}>
              <Image
                source={coverImage ? {uri: coverImage} : images.postImage7}
                style={styles.imageStyle}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.crossIconView}
                onPress={() => {
                  setProfilePic('');
                }}>
                <Image
                  source={images.crossIcons}
                  style={styles.crosIconStyle}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.ImageView}>
              <TouchableOpacity
                onPress={() => {
                  CoverPhoto();
                }}>
                <Image
                  source={images.add}
                  style={styles.iconStyle}
                  tintColor={colors.imageGrey}
                />
              </TouchableOpacity>
            </View>
          )}

          <LableInput
            title={'Product Title'}
            PlaceHolder={'sofa name'}
            onChangeText={setProductTitle}
            value={productTitle}
            secureTextEntry={null}
          />
          <LableInput
            title={'Product URL (optional)'}
            PlaceHolder={'wwww.txSofa.com/foldingSofa'}
            onChangeText={setProductUrl}
            value={productUrl}
            secureTextEntry={null}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.bottomBtn}>
        <MainButton
          title={productData ? 'Update' : 'Add'}
          buttonColor={
            productData
              ? colors.black
              : productTitle
              ? colors.black
              : colors.lightGrey
          }
          textColor={
            productData
              ? colors.white
              : productTitle
              ? colors.white
              : colors.grey
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </AppBackground>
  );
};

export default AddEditProducts;
