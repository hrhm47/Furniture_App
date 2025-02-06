import Toast from 'react-native-toast-message';
import {fontSize} from '../../assets';

export const SpecialCharactersValidations =
  /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
export const AlphabetAndSpecialCharactersValidations =
  /^[A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;

export const NumbersValidations = /^\d*$/;

export const AlphaNumericValidations = /^[A-Za-z0-9 ]+$/;

export const AlphabetValidations = /^[A-Za-z][A-Za-z]*$/;

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*+=_!~])[a-zA-Z\d@#$%^&*+=_!~]{8,}$/;
export const invalidCharsRegex = /[(){}[\]|`¬¦]/;

export const fullNameRegex = /^[A-Za-z\s]+\.?$/;

export const validateEmail = email => {
  if (email?.length == 0) {
    Toast.show({
      type: 'error',
      text1: 'Enter email',
    });
    return false;
  } else if (emailRegex.test(email)) {
    return true;
  } else {
    Toast.show({
      type: 'error',
      text1: 'Invalid email',
    });
    return false;
  }
  // return emailRegex.test(email);
};

export const validatePassword = password => {
  password = password.trim();
  if (password?.length == 0) {
    Toast.show({
      type: 'error',
      text1: 'Enter password',
    });
    return false;
  } else if (password?.length < 8) {
    Toast.show({
      type: 'error',
      text1: 'Invalid password',
      text2: "Password must contains 8 letter's",
    });
    return false;
  } else if (
    !passwordRegex.test(password) ||
    invalidCharsRegex.test(password)
  ) {
    Toast.show({
      type: 'error',
      text1: 'Invalid password',
      text2: "Required capital letter's, numbers and special signs",
    });
    return false;
  }
  return true;
};

export const validatingMatchingPassword = (password, confirmPassword) => {
  // console.log('confirmPassword', confirmPassword);
  password = password.trim();
  confirmPassword = confirmPassword?.trim();
  if (confirmPassword == '') {
    Toast.show({
      type: 'error',
      text1: 'Confirm password is empty',
      // text2:""
    });
    return false;
  } else if (confirmPassword?.length < 8) {
    Toast.show({
      type: 'error',
      text1: 'Invalid confirm password',
      text1: "Confirm password must contains 8 letter's",
      // text2:""
    });
    return false;
  } else if (password !== confirmPassword) {
    Toast.show({
      type: 'error',
      text1: "Password's are not same",
    });
    return false;
  }

  return true;
};

export const validateFullName = fullName => {
  // fullName = fullName.trim();
  if (fullName == '') {
    Toast.show({
      type: 'error',
      text1: 'Enter company name',
    });
    return false;
  } else if (!fullNameRegex.test(fullName)) {
    Toast.show({
      type: 'error',
      text1: 'Enter alphabets only',
    });
    return false;
  } else {
    return true;
  }
};
