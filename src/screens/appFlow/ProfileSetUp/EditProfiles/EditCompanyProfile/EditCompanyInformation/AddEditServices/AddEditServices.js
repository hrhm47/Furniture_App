import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBackground from '../../../../../../../components/AppBackground';
import HeaderButton from '../../../../../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './styles';
import {
  colors,
  heightPixel,
  images,
  widthPixel,
} from '../../../../../../../assets';
import AppText from '../../../../../../../components/AppText';
import RichInputField from '../../../../../../../components/InputField/RichInputField';
import SmallSizeButton from '../../../../../../../components/SmallSizeButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../../../../components/MainButton';
import {Routes} from '../../../../../../../navigation/Routes';

const data = [
  {label: '1 day before', value: '1'},
  {label: '3 day before', value: '3'},
  {label: '5 day before', value: '5'},
  {label: '7 day before', value: '7'},
];

const AddEditServices = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;

  const serviceDataIsEditiable = paramsData?.serviceDataIsEditiable;
  const serviceData = paramsData?.serviceData;

  const [value, setValue] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [addMoreServicesData, setAddMoreServicesData] = useState([1]);

  useEffect(() => {
    serviceData && setDescription(serviceData?.description),
      setCategory(serviceData?.title);
  }, []);

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={serviceDataIsEditiable ? 'Edit Services' : 'Add Services'}
        leftOnPress={() => {
          navigation.goBack();
        }}
      />

      <KeyboardAwareScrollView
        pinchGestureEnabled={false}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        style={styles.keyboardAwareScrollView}>
        {addMoreServicesData?.map(item => {
          return (
            <View
              style={{
                width: widthPixel(390),
                alignSelf: 'center',
                marginTop: heightPixel(20),
                marginBottom: heightPixel(15),
              }}>
              <AppText body={'Category'} style={styles.selectedTextStyle} />
              <Dropdown
                style={styles.dropDownStyle}
                data={data}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconColor={colors.grey}
                iconStyle={styles.DownIconStyle}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : 'Select item'}
                searchPlaceholder="Search..."
                value={category}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                activeColor={colors.offWhite}
                onChange={item => {
                  setCategory(item.value);
                  setIsFocus(false);
                }}
                renderItem={item => {
                  return (
                    <View style={styles.dropDownViewStyle}>
                      <AppText
                        body={item.label}
                        style={styles.selectedTextStyle}
                      />
                    </View>
                  );
                }}
              />

              <AppText body={'Sub-category'} style={styles.selectedTextStyle} />
              <Dropdown
                style={styles.dropDownStyle}
                data={data}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconColor={colors.grey}
                iconStyle={styles.DownIconStyle}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : 'Select item'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                activeColor={colors.offWhite}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderItem={item => {
                  return (
                    <View style={styles.dropDownViewStyle}>
                      <AppText
                        body={item.label}
                        style={styles.selectedTextStyle}
                      />
                    </View>
                  );
                }}
              />
              <AppText body={'Description'} style={styles.selectedTextStyle} />
              <TextInput
                textAlignVertical="top"
                placeholder="Company Overview"
                placeholderTextColor={colors.imageGrey}
                keyboardAppearance="default"
                scrollEnabled={true}
                multiline={true}
                style={styles.aboutInput}
                value={description}
                onChangeText={setDescription}
              />
            </View>
          );
        })}
        {!serviceDataIsEditiable && (
          <View style={styles.bottomBtn}>
            <SmallSizeButton
              ButtonText={'Add'}
              buttonImage={images.add}
              buttonImageAvailable={true}
              ButtonStyle={styles.buttonStyle}
              ButtonPress={() => {
                setAddMoreServicesData(prev => [...addMoreServicesData, 1]);
              }}
            />
          </View>
        )}
      </KeyboardAwareScrollView>
      <View style={styles.fullyBottomButton}>
        <MainButton
          title={serviceDataIsEditiable ? 'Update' : 'Add'}
          textColor={colors.white}
          buttonColor={colors.darkBlack}
          onPress={() => {
            serviceDataIsEditiable
              ? navigation.goBack()
              : navigation.navigate(Routes.COMPANYSERVICESLISTING);
          }}
        />
      </View>
    </AppBackground>
  );
};

export default AddEditServices;
