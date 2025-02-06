import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/app/store/store';
import MainNavigator from './src/navigation/MainNavigator';
import {toastConfig} from './src/utils/ToastConfiguration/ToastConfiguration';
import {LogBox, StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
LogBox.ignoreAllLogs();
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
        <Toast
          topOffset={60}
          autoHide={true}
          position="top"
          visibilityTime={1500}
          config={toastConfig}
        />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
