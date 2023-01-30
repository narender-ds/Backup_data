//all required Dependancies
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  isTruncated,
} from 'native-base';
import Header from '../components/Header';
import ButtonComponent from '../components/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import BackHandlers from '../components/BackHandler';
import {StyleSheet} from 'react-native';

//ShowAllProducts function starts from here
const ShowAllProducts = () => {
  const navigation = useNavigation();
  //Array Of Object To Show Products
  const AllProducts = [
    {
      _id: 1,
      name: 'Nike Sports Shoes',
      image:
        'https://www.walkaroo.in/pub/media/catalog/product/cache/6dbcc4eeed34785cbd4d3edcf75b4ba8/w/s/ws9063-white_1__1.jpg',
      price: '$965.62',
      button: 'View Details',
    },
    {
      _id: 2,
      name: 'Boat HeadPhones ',
      image:
        'https://www.marklevinson.com/on/demandware.static/-/Sites-ML-US-NCOM-Library/default/dw3cc090a9/glp/pdp-v2/media/5909/black/gallery-hi-res/gallery-hero-1.png',
      price: '$105.62',
      button: 'View Details',
    },
    {
      _id: 3,
      name: 'Canon Cam 1080p HD',
      image:
        'https://in.canon/media/image/2021/09/11/06fc9d1e5daf492fa995c8168749d1de_R3-front.png',
      price: '$95.62',
      button: 'View Details',
    },
    {
      _id: 4,
      name: 'TVS KeyBoard ',
      image:
        'https://5.imimg.com/data5/TE/QW/MY-52354470/wireless-mechanical-gaming-keyboard-500x500.jpg',
      price: '$546.62',
      button: 'View Details',
    },
    {
      _id: 5,
      name: 'Sonata Smart Watch ',
      image:
        'https://www.sathya.in/media/77571/catalog/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_540x.png?size=600',
      price: '$1000.23',
      button: 'View Details',
    },
    {
      _id: 6,
      name: 'Sandisk Memory Card',
      image: 'https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg',
      price: '$236.02',
      button: 'View Details',
    },
    {
      _id: 7,
      name: 'Noise Smart Watch ',
      image:
        'https://www.corning.com/microsites/csm/gorillaglass/Samsung/CGG_Samsung_GalaxyWatchActive.jpg',
      price: '$144.62',
      button: 'View Details',
    },
    {
      _id: 8,
      name: 'tequline Ear Buds',
      image:
        'https://i0.wp.com/www.truke.in/wp-content/uploads/2022/02/truke-product-1.png?fit=600%2C600&ssl=1',
      price: '$214.23',
      button: 'View Details',
    },
    {
      _id: 1,
      name: 'Nike Sports Shoes',
      image:
        'https://www.walkaroo.in/pub/media/catalog/product/cache/6dbcc4eeed34785cbd4d3edcf75b4ba8/w/s/ws9063-white_1__1.jpg',
      price: '$965.62',
      button: 'View Details',
    },
    {
      _id: 2,
      name: 'Boat HeadPhones ',
      image:
        'https://www.marklevinson.com/on/demandware.static/-/Sites-ML-US-NCOM-Library/default/dw3cc090a9/glp/pdp-v2/media/5909/black/gallery-hi-res/gallery-hero-1.png',
      price: '$105.62',
      button: 'View Details',
    },
    {
      _id: 3,
      name: 'Canon Cam 1080p HD',
      image:
        'https://in.canon/media/image/2021/09/11/06fc9d1e5daf492fa995c8168749d1de_R3-front.png',
      price: '$95.62',
      button: 'View Details',
    },
    {
      _id: 4,
      name: 'TVS KeyBoard ',
      image:
        'https://5.imimg.com/data5/TE/QW/MY-52354470/wireless-mechanical-gaming-keyboard-500x500.jpg',
      price: '$546.62',
      button: 'View Details',
    },
    {
      _id: 5,
      name: 'Sonata Smart Watch ',
      image:
        'https://www.sathya.in/media/77571/catalog/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_540x.png?size=600',
      price: '$1000.23',
      button: 'View Details',
    },
    {
      _id: 6,
      name: 'Sandisk Memory Card',
      image: 'https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg',
      price: '$236.02',
      button: 'View Details',
    },
    {
      _id: 7,
      name: 'Noise Smart Watch ',
      image:
        'https://www.corning.com/microsites/csm/gorillaglass/Samsung/CGG_Samsung_GalaxyWatchActive.jpg',
      price: '$144.62',
      button: 'View Details',
    },
    {
      _id: 8,
      name: 'tequline Ear Buds',
      image:
        'https://i0.wp.com/www.truke.in/wp-content/uploads/2022/02/truke-product-1.png?fit=600%2C600&ssl=1',
      price: '$214.23',
      button: 'View Details',
    },
  ];
  return (
    <View>
      <BackHandlers />
      <Header Text={'All Product '} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
        <Flex
          direction="row"
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          px={5}>
          {AllProducts.map(product => {
            return (
              <Pressable key={product.id} style={styles.Pressable}>
                <Box>
                  <Image source={{uri: product.image}} style={styles.img} />

                  <Heading style={styles.HeadingPrice}>{product.price}</Heading>
                  <Heading>
                    <Text style={styles.txtName}>{product.name}</Text>
                  </Heading>
                  <ButtonComponent
                    style={styles.btn}
                    onPress={() => {
                      navigation.navigate('ProductDetails');
                    }}
                    Title={'View Details'}
                  />
                </Box>
              </Pressable>
            );
          })}
        </Flex>
      </ScrollView>
    </View>
  );
};

export default ShowAllProducts;
//StyleSheet Properties
const styles = StyleSheet.create({
  Container: {backgroundColor: '#EEfAE6'},
  Pressable: {
    marginTop: 30,
    width: '47%',
    backgroundColor: 'white',
    rounded: 'md',
    shadow: 2,
    paddingTop: 0.3,
    my: 3,
    paddingBottom: 2,
    overflow: 'hidden',
  },
  img: {height: 80, widht: 'auto', resizeMode: 'contain'},
  HeadingPrice: {
    fontSize: 15,
  },
  txtName: {
    fontSize: 15,
    marginTop: 1,
    isTruncated,
    width: 'full',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#48B600',
    fontSize: '10',
    width: 'auto',
    padding: 5,
    borderRadius: 10,
  },
});
