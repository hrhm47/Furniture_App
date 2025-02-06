import {View, Pressable, Image, TextInput} from 'react-native';
import React, {useState} from 'react';

import DatePicker from 'react-native-date-picker';
import LableInput from '../LabelInput';
import {colors, images} from '../../assets';
import {styles} from './style';
import AppText from '../AppText';

const DateTime = ({
  label = '',
  mode = 'date',
  onSelect,
  selected = '',
  placeholder,
  placeholderTime,
  currentDate = new Date(),
  iconShow = false,
  year = false,
}) => {
  const [open, setOpen] = useState(false);
  //   const [selected, setSelected] = useState('');

  const formatAMPM = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  return (
    <View style={styles.topView}>
      <AppText body={label} style={styles.preferenceText} />
      <Pressable
        style={styles.inputView}
        onPress={() => {
          setOpen(true);
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.imageGrey}
          style={styles.textInput}
          value={
            selected && mode == 'time'
              ? formatAMPM(selected)
              : selected == ''
              ? ''
              : year
              ? new Date(selected).getFullYear().toString()
              : new Date(selected).toLocaleDateString()
          }
          editable={false}
          onPress={() => {
            setOpen(true);
          }}
        />
        {iconShow && (
          <Pressable
            disabled={!iconShow}
            onPress={() => {
              setOpen(true);
            }}>
            <Image
              source={images.eventcalendar}
              style={{width: 20, height: 20}}
              tintColor={colors.black}
            />
          </Pressable>
        )}
      </Pressable>

      <DatePicker
        modal
        mode={mode}
        open={open}
        date={new Date()}
        // minimumDate={currentDate}
        onConfirm={date => {
          setOpen(false);
          //   console.log('date ', date);
          onSelect(date);
          //   onSelect(date.getTime());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateTime;
