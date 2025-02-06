import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  FlatList,
  TextInput,
  Image,
  SafeAreaView,
} from 'react-native';
import {parsePhoneNumberFromString, isPossibleNumber} from 'libphonenumber-js';

import {styles} from './styles';
import {countries} from '../../utils/data/countries';
import AppText from '../AppText';
import {colors, images} from '../../assets';
import {NumbersValidations} from '../../utils/validations';

const CustomPhoneNumberInput = ({phoneNumber, setPhoneNumber}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [validnumber, setValidNumber] = useState(false);

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  const handlePhoneNumberChange = number => {
    if (NumbersValidations?.test(number)) {
      if (selectedCountry) {
        const parsedNumber = parsePhoneNumberFromString(
          number,
          selectedCountry.code,
        );
        if (parsedNumber && parsedNumber.isValid()) {
          setPhoneNumber(parsedNumber.formatNational());
        } else {
          setPhoneNumber(number);
        }
      } else {
        setPhoneNumber(number);
      }
      handleVerification(number);
    }
  };

  const renderCountryItem = ({item}) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}>
      <Text style={styles.countryText}>{` ${item.name} ${item.flag}`}</Text>
    </TouchableOpacity>
  );

  const filteredCountries = countries.filter(
    country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery),
  );

  const isValidNumber = number => {
    const formattedPhoneNumber = '+' + selectedCountry.code + number;
    return isPossibleNumber(formattedPhoneNumber)?.valueOf();
  };

  const handleVerification = number => {
    if (isValidNumber(number)) {
      // const formattedPhoneNumber = '+' + selectedCountry.code + number;
      setValidNumber(true);
      // setPhoneNumber(formattedPhoneNumber);
    } else {
      setValidNumber(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.countrySelector}
          onPress={() => setModalVisible(true)}>
          <AppText
            style={{color: colors.black}}
            body={
              selectedCountry ? `${selectedCountry.flag} ` : 'Select Country'
            }
          />
        </TouchableOpacity>
        <AppText
          style={styles.codeStyle}
          body={selectedCountry?.code && ` +${selectedCountry?.code}`}
        />
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
          placeholderTextColor={colors.imageGrey}
        />
        {validnumber && (
          <Image
            source={images.tick}
            style={styles.imgStyle}
            resizeMode="cover"
            tintColor={colors.linkedinBlueColor}
          />
        )}
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        statusBarTranslucent={true}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image source={images.back} style={styles.imgStyle} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>
          <FlatList
            data={filteredCountries}
            renderItem={renderCountryItem}
            keyExtractor={item => item.code + Math.random().toString()}
            showsVerticalScrollIndicator={false}
            // style={styles.countryList}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default CustomPhoneNumberInput;
