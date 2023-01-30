//All Required Dependencies

import {Box, Center, Image, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const EmptyCart = () => {
  return (
    <Box style={styles.Container}>
      <Center style={styles.Container2}>
        <Image source={require('../image/emptycart1.png')} style={styles.img} />

        <Text style={styles.txt}>Cart Is Empty</Text>
      </Center>
    </Box>
  );
};

export default EmptyCart;
//StyleSheet Properties
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Container2: {height: 90},
  img: {
    size: '50%',
    marginTop: '180%',
    height: 200,
    width: 200,
    rounded: 'full',
  },
  txt: {fontWeight: 'bold', marginTop: 5, fontSize: 15},
});
