//all required Dependancies

import {
  Box,
  Heading,
  HStack,
  ScrollView,
  Spacer,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import BackHandlers from '../components/BackHandler';
import Header from '../components/Header';
import Review from '../components/Review';

//Register function starts from here

const ProductDetails = props => {
  //required States To Store the Value

  const [value, setValue] = useState('');
  return (
    <Box style={styles.Container}>
      <BackHandlers />
      <Header Text={'Product Details'} />
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={{
              uri:
                props.route &&
                props.route.params &&
                props.route.params.products.image,
            }}
            style={styles.img}
          />
        </TouchableOpacity>
        <Heading style={styles.txtHeading}>
          {props.route.params.products.name}
        </Heading>
        <HStack style={styles.HstackStyle}>
          <Heading style={styles.HeadingPrize}>
            {props.route.params.products.price}
          </Heading>

          <Spacer />
          <NumericInput
            value={value}
            onChange={(value)=>setValue(value)}
            totalHeight={30}
            totalWidth={140}
            iconSize={25}
            step={1}
            maxValue={10}
            minValue={0}
            borderColor={'#E1f0D7'}
            rounded
            textColor={'black'}
            iconStyle={{color: 'white'}}
            rightButtonBackgroundColor={'#48B600'}
            leftButtonBackgroundColor={'#48B600'}
          />
        </HStack>

        <Text style={styles.txtDesCription}>Description:-</Text>
        <Text style={styles.Description}>
          {props.route.params.products.description}
        </Text>
        <TouchableOpacity style={styles.ADDbtn}>
          <Text style={styles.btnText}>Add Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default ProductDetails;
//styleSheet Property For Styling The Screen Content
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#EEfAE6',
  },
  btn: {
    color: 'white',
    backgroundColor: '#48B600',
    width: '30%',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1.5,
  },
  ADDbtn: {
    color: 'white',
    backgroundColor: 'orange',
    width: '30%',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1.5,
  },
  img: {
    height: 200,
    width: Dimensions.get('window').width - 20,
    resizeMode: 'contain',
  },
  txtHeading: {
    fontWeight: 'bold',
    fontSize: 15,
    medium: 2,
    alignSelf: 'center',
    marginTop: 5,
  },
  HstackStyle: {space: 2, alignItems: 'center', my: 5},

  HeadingPrize: {FontWeight: 'bold', color: 'black', fontSize: 19},
  txtDesCription: {fontSize: 16, marginTop: 10, fontWeight: 'bold'},
  Description: {lineHeight: 20, fontSize: 15},
  btnText: {fontWeight: '400', color: '#000', fontSize: 18},
  //  NumericInpu:{totalHeight:"30",
  //  totalWidth:140,
  //  iconSize:25,
  //  step:1,
  //  maxValue:10,
  //  minValue:0,
  //  borderColor:'#E1f0D7',
  //  rounded,
  //  textColor:'black',
  // }
});
