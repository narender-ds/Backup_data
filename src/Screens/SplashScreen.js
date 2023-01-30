//all required Dependancies

import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

//SplashScreen function starts from here to Show the SplashScreen First
const SplashScreen = () => {
  const navigation = useNavigation();

  //UseEffect hook used To Show The SplashScreen For 3 Seconds When App Open
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#03052b'} />
      <Image source={require('../image/SplashScreen.png')} style={styles.img} />
    </View>
  );
};
//StyleSheet Property
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03052b',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 115,
    backgroundColor: 'red',
    // resizeMode:'cover',
  },
});
export default SplashScreen;
