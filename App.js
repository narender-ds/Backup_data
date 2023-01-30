//All Required Dependencies
import React, {useEffect} from 'react';
import AppNavigator from './src/AppNavigator';
import {NativeBaseProvider} from 'native-base';
import {Alert, BackHandler} from 'react-native';

// All Screens are Handles Here Through AppNavigator
const App = () => {
  //UseEffect Hook Use To Exit The App With BackPress
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Exit App?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
