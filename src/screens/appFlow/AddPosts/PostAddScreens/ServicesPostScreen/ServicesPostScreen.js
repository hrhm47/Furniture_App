import {Image, Keyboard, Platform, StatusBar, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import HeaderButton from '../../../../../components/HeaderButton';
import {colors, heightPixel, images, widthPixel} from '../../../../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {styles} from './styles';
import AppText from '../../../../../components/AppText';
import CustomDropDown from '../../../../../components/CustomDropDown/CustomDropDown';
import MainButton from '../../../../../components/MainButton';
import {StackNames} from '../../../../../navigation/Routes';

const dropDownArray = [
  {
    key: '12asdd',
    name: 'Interior Design Consultation',
    serviceImage: images.services1,
    description:
      'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
  },
  {
    key: '876cvyb',
    name: 'Customization and Personalization',
    serviceImage: images.services2,
    description:
      'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
  },
  {
    key: '908v7by',
    name: 'Retail Sales',
    serviceImage: images.services3,
    description:
      'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
  },
  {
    key: '098vb',
    name: 'Online Shopping',
    serviceImage: images.services4,
    description:
      'Offer consultation services to customers. Provide design recommendations, space planning advice, and suggesting furniture arrangements to enhance the aesthetic appeal.',
  },
];

const ServicesPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');
  const [openDropDownModal, setOpenDropDownModal] = useState(false);

  const [selectedServices, setSelectedServices] = useState([]);

  useFocusEffect(
    useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );

  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Add service Post'}
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={!openDropDownModal}
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
          <View style={{}}>
            <AppText
              body={'Select Services'}
              style={{marginBottom: heightPixel(15)}}
            />
            <View>
              <CustomDropDown
                dropDownArray={dropDownArray}
                selectedServices={selectedServices}
                setSelectedServices={setSelectedServices}
                setOpenDropDownModal={setOpenDropDownModal}
                openDropDownModal={openDropDownModal}
                lastHeadingTitle={
                  selectedServices?.length >= 1
                    ? selectedServices[selectedServices.length - 1]?.name
                    : 'select...'
                }
              />
            </View>
            {!openDropDownModal && (
              <View
                onStartShouldSetResponder={() => setOpenDropDownModal(false)}>
                {selectedServices?.map(item => {
                  return (
                    <View style={styles.accomView}>
                      <View style={styles.sideImageView}>
                        <View style={styles.imgbackground}>
                          <Image
                            source={item?.serviceImage}
                            style={styles.imgStyle}
                            tintColor={colors.cyanDark}
                          />
                        </View>
                      </View>
                      <View style={styles.mainMiddleView}>
                        <View style={[styles.titleView]}>
                          <AppText body={item?.name} numberOfLines={2} />
                        </View>
                        <AppText
                          body={item?.description}
                          style={styles.description}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
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
    </AppBackground>
  );
};

export default ServicesPostScreen;
