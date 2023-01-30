//all required Dependancies
import React from 'react';
import { HStack, Input, Box, safeAreaTop } from 'native-base';
import { Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//HomeSeacrchBar Function To Show the SearchBar and Header At HomeScreen
const HomeSearchBar = () => {
  const navigation = useNavigation();
  return (
    <HStack style={Styles.HeaderHStack}>
      <StatusBar style={Styles.StatusBar} />
      <Input
        placeholder={'Shopping Adda.in '}
        style={Styles.Inpu}
        variant="filled"
        type='search'
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}>
        <Image source={require('../image/notify1.png')} style={Styles.img} />
        <Box style={Styles.BoxStyle} rounded='full'>0</Box>
      </TouchableOpacity>
    </HStack>
  );
};

export default HomeSearchBar;
//StyleSheet Property For Style
const Styles = StyleSheet.create({
  HeaderHStack: {
    space: 3,
    width: '100%',
    height: '10%',
    backgroundColor: '#48B600',
    alignItems: 'center',
    paddingLeft: 45,
paddingRight:55,
    safeAreaTop,
  },
  StatusBar: { backgroundColor: '#03052b' },
  Inpu: {
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0,
    alignSelf: 'center',
    _focus: {
      backgroundColor: 'white',
    },
  },
  img: { width: 47, height: 47, borderRadius: 5 },
  BoxStyle: {
    paddingLeft: 1,
    height:20,
    width:10,
    position: 'absolute',
    top: -9.5,
    left: 19,
    backgroundColor: '#FF0000',
    _text: { color: 'white' },
    fontSize: '10px',
  },
});
