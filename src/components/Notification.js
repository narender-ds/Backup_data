//all required Dependancies.
import {Box, Center, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Header from '../components/Header';
import BackHandlers from './BackHandler';

//Notification Funtion To show the notifications
const Notification = () => {
  return (
    <Box style={Styles.MainContainer}>
      <BackHandlers />
      <Header Text={'Notifications'} />
      <Center style={Styles.ContentBox}>
        <Text style={Styles.txt}>You Have No Notification Yet</Text>
      </Center>
    </Box>
  );
};

export default Notification;
const Styles = StyleSheet.create({
  MainContainer: {flex: 1},
  ContentBox: {height: '98%'},
  txt: {marginTop: 2},
});
