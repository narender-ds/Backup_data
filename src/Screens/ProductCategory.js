//all required Dependancies
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  isTruncated,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
// ProductCategory Function
const ProductCategory = () => {
  //Array of Object To show the Products category
  const myProduct = [
    {
      name: "FootWear's",
    },
    {
      name: 'Home Decor ',
    },
    {
      name: "Men's Wear",
    },

    {
      name: 'Women Fashion',
    },
    {
      name: 'Beauty & Cosmatics',
    },
    {
      name: "Baby Toy's",
    },
    {
      name: 'Mobiles & Accesories',
    },
    {
      name: 'Gifts',
    },
  ];
  return (
    <ScrollView style={styles.Container}>
      <HStack style={styles.HStackStyle}>
        <Text style={styles.txtOfHeader}>ProductCategory</Text>
        <Image
          source={require('../image/search1.png')}
          resizeMode="contain"
          style={styles.img}
        />
      </HStack>

      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={5}>
        {myProduct.map(product => {
          return (
            <Pressable key={product.id} style={styles.BoxContainer}>
              <Box px={4} paddingTop={1}>
                <Heading>
                  <Text style={styles.productName}>{product.name}</Text>
                </Heading>
              </Box>
            </Pressable>
          );
        })}
      </Flex>
    </ScrollView>
  );
};

export default ProductCategory;
//styleSheet Property
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    showsVerticalScrollIndicator: false,
    backgroundColor: '#EEfAE6',
  },
  HStackStyle: {
    space: 3,
    width: '100%',
    height: '15%',
    px: 6,
    backgroundColor: '#48B600',
    py: 4,
    alignItems: 'center',
  },
  txtOfHeader: {fontWeight: 'bold', fontSize: 18},
  img: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: '50%',
  },
  BoxContainer: {
    marginTop: 30,
    width: '47%',
    backgroundColor: 'white',
    rounded: 'md',
    shadow: 2,
    paddingTop: 0.3,
    my: 3,
    paddingBottom: 20,
    overflow: 'hidden',
  },

  productName: {fontSize: 15, marginTop: 1, isTruncated, width: 'full'},
});
