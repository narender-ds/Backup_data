//all required Dependancies
import {useNavigation} from '@react-navigation/native';
import {
  Box,
  FlatList,
  Flex,
  Heading,
  Image,
  ScrollView,
  Text,
  isTruncated,
} from 'native-base';
import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import products from '../data/MainProducts';
import BackHandlers from './BackHandler';
import ButtonComponent from './ButtonComponent';

//Function To show Products At HomeScreen by Using Flatlist
const HomeScreenProduct = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={Styles.Container}>
      <Text
        style={Styles.txtShow}
        onPress={() => {
          navigation.navigate('ShowAllProducts');
        }}>
        Show All
      </Text>
      <BackHandlers />
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={5}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => {
            return (
              <Pressable key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProductImage');
                  }}>
                  <Image
                    source={{uri: item.image}}
                    alt={item.name}
                    width="full"
                    height={24}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <Box style={Styles.Box}>
                  <Heading style={Styles.HeadingPrice}>{item.price}</Heading>
                  <Heading style={Styles.HeadingName}>{item.name}</Heading>
                  <ButtonComponent
                    style={Styles.btn}
                    onPress={() => {
                      navigation.navigate('ProductDetails', {
                        products: item,
                      });
                    }}
                    Title={'View Details'}
                  />
                </Box>
              </Pressable>
            );
          }}
        />
      </Flex>
    </ScrollView>
  );
};

export default HomeScreenProduct;
//StyleSheet Properties of Content
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#EEfAE6',
    showsVerticalScrollIndicator: false,
  },
  txtShow: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: '80%',
    marginTop: '2%',
    marginBottom: '4%',
  },
  Box: {paddingLeft: 25, paddingTop: 20},
  HeadingPrice: {fontSize: 15, fontWeight: 'bold'},
  HeadingName: {fontSize: 15, marginTop: 1, isTruncated, width: 'auto'},
  btn: {
    backgroundColor: '#48B600',
    fontSize: '10',
    width: '100%',
    padding: 10,
  },
});
