//all required Dependancies

import React, { useEffect } from 'react'
import {Box} from "native-base";
import Banner from './Banner';
import { Alert, BackHandler } from 'react-native';
import HomeSearchBar from '../components/HomeSearchBar';
import HomeScreenProduct from '../components/HomeScreenProducts';

//Home function starts from here
const Home=()=> {
  //useEffect Hook to Handle the HardwareBack Option in Device
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);
  
  //show an Alert Pop-Up when User press back Button 
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to Exit App?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  return (

<Box style={{flex:1,backgroundColor:"#ffff"}}>
<HomeSearchBar/>
<Banner/>
<HomeScreenProduct/>
</Box>

  );
};

export default Home;