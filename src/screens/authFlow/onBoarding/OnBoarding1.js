import {
  Alert,
  FlatList,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import Header from '../../../components/Header';
import {styles} from './styles';
import AppText from '../../../components/AppText';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import Accordion from 'react-native-collapsible/Accordion';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../../components/InputField';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import {OnBoardingData} from '../../../utils/data/JsonData';
import Toast from 'react-native-toast-message';
import {fullNameRegex} from '../../../utils/validations';

const OnBoarding1 = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(true);
  const [progressData, setProgressData] = useState(0.1);

  const [selected, setSelected] = useState({
    category: '',
    options: [],
  });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeSections, setActiveSections] = useState([]);

  // =============================================== functions area starts =================================

  const checkOptionsIsSelected = () => {
    // console.log('selected ', selected?.options[0]?.length);
    try {
      let flag = true;
      // console.log('selected ', selectedCategory);
      if (!selectedCategory) {
        Toast.show({
          type: 'error',
          text1: 'Select your category',
        });
        flag = false;
      } else {
        if (selected.options?.length < 1) {
          Toast.show({
            type: 'error',
            text1: 'Specify your sub category',
          });
          flag = false;
        }
      }
      if (flag) {
        navigation.navigate(Routes.ONBOARDING2, {
          progressValue: selected.options?.length > 0 ? 0.3 : 0.1,
        });
      }
    } catch (error) {}
  };

  // ============================================= functions area ends =================================

  const onAccordionChange = sections => {
    OnBoardingData?.map(item => {
      item?.key == sections ? setSelectedCategory(item?.category) : null;
    });
    // setIsFocus(!isFocus);
    // console.log('OnBoardingData[sections]?.category', selectedCategory);
    setActiveSections(sections);
    setSelected({
      category: '',
      options: [],
    });
  };
  const data = [];
  const renderItem = (categoryIndex, optionIndex) => {
    return (
      <>
        {categoryIndex?.name == 'Other' ? (
          <InputField
            placeHolder={'Other'}
            style={[styles.items, {marginBottom: 20}]}
            secureTextEntry={null}
            onChangeText={e => {
              // const data =e;
              if (fullNameRegex.test(e)) {
                if (e !== '') {
                  setSelected({
                    category: selectedCategory,
                    options: [e],
                  });
                } else {
                  setSelected({
                    category: selectedCategory,
                    options: [],
                  });
                }
              } else {
                Toast.show({
                  type: 'error',
                  text1: "Write only character's only",
                });
              }
            }}
          />
        ) : (
          <TouchableOpacity
            style={styles.items}
            key={categoryIndex?.key}
            onPress={() => {
              data.push(categoryIndex?.name);
              if (selected?.options?.includes(categoryIndex?.name)) {
                setSelected({
                  category: selectedCategory,
                  options: selected?.options.filter(
                    item => item !== categoryIndex?.name,
                  ),
                });
              } else {
                setSelected({
                  category: selectedCategory,
                  options: [...selected.options, categoryIndex?.name],
                });
              }
            }}>
            <Image
              source={
                selected?.options?.includes(categoryIndex?.name)
                  ? images.selectConfirm
                  : images.selectIcon
              }
              style={styles.icon}
            />
            <Text style={styles.headerText}>{categoryIndex?.name}</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const renderContent = (section, index) => {
    return (
      <View style={styles.content} key={index}>
        {section?.options?.map(option => renderItem(option))}
      </View>
    );
  };

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <Header title={'BEDNET'} />
        <View style={styles.topView}>
          <KeyboardAwareScrollView
            nestedScrollEnabled={true}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            style={{flex: 1, marginBottom: heightPixel(120)}}
            contentContainerStyle={styles.keyboardAwareScrollView}>
            <AppText
              body={'What category of the industry do you represent? '}
              style={styles.heading}
            />
            <Accordion
              sectionContainerStyle={{flex: 1}}
              sections={OnBoardingData}
              activeSections={activeSections}
              // key={Math.random().toLocaleString()}
              keyExtractor={item => item.key}
              touchableComponent={TouchableOpacity}
              renderHeader={(category, isActive) => (
                <View style={styles.dropdown} key={category?.key}>
                  <Image
                    source={
                      selectedCategory === category.category
                        ? images.radioConfirm
                        : images.radioSelect
                    }
                    style={styles.icon}
                  />
                  <Text style={styles.headerText}>{category.category}</Text>
                </View>
              )}
              renderContent={renderContent}
              onChange={onAccordionChange}
            />
          </KeyboardAwareScrollView>
        </View>
      </AppBackground>
      <View style={styles.bottomBtn}>
        <Progress.Bar
          progress={selected.options?.length > 0 ? 0.3 : 0.1}
          width={widthPixel(380)}
          color={colors.pink}
          borderColor={colors.grey}
          borderWidth={0}
          style={{backgroundColor: colors.imageGrey}}
        />
        <TouchableOpacity
          onPress={() => {
            checkOptionsIsSelected();
          }}
          style={styles.rightbtn}>
          <AppText body={'Next'} style={styles.rightBtnText} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OnBoarding1;
