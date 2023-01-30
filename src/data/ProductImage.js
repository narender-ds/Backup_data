//all required Dependancies
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import BackHandlers from '../components/BackHandler';
import Header from '../components/Header';

//Function To show Images In A Slide When User Hit The Image From HomeScreen
const ProductImage = () => {
  return (
    <View style={Styles.container}>
      <BackHandlers />
      <Header Text={'ProductImages'} />
      <Swiper style={Styles.wrapper} showsButtons loop={true}>
        <Image style={Styles.slide1} source={require('../image/shoes.jpeg')} />

        <Image style={Styles.slide2} source={require('../image/shoes1.jpeg')} />

        <Image style={Styles.slide3} source={require('../image/shoes2.jpeg')} />
      </Swiper>
    </View>
  );
};
export default ProductImage;
const Styles = StyleSheet.create({
  wrapper: {},
  container: {
    justifyContent: 'center',
    height: 200,
    backgroundColor: 'White',
    paddingTop: 20,
  },
  slide1: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide2: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide3: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  img: {height: 150, width: 150},
});
