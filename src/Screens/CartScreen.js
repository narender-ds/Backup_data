//all required Dependancies
import {Box, Center} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import EmptyCart from '../components/EmptyCart';
import Header from '../components/Header';

//CartScreen function starts from here
const CartScreen = () => {
  return (
    <Box style={Styles.Container}>
      <Header Text={'Cart'} />
      <Center style={Styles.CenterStyle}>
        <EmptyCart />
      </Center>
    </Box>
  );
};

export default CartScreen;
//StyleSheet Properties
const Styles = StyleSheet.create({
  Container: {flex: 1, backgroundColor: '#EEfAE6'},
  CenterStyle: {height: '98%'},
});
