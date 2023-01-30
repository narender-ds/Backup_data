//all required Dependancies
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

//Banner Function use to Show the Slide Images In HomeScreen
const Banner = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons loop={true}>
        <View testID="Hello" style={styles.slide1}>
          <Image style={styles.img} source={require('../image/shoes.jpeg')} />
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <Image style={styles.img} source={require('../image/shoes1.jpeg')} />
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Image style={styles.img} source={require('../image/shoes2.jpeg')} />
        </View>
      </Swiper>
    </View>
  );
};
export default Banner;
//StyleSheet Properties To Make The Banner Stylish
const styles = StyleSheet.create({
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
  img: { height: 150, width: 150 },
});
