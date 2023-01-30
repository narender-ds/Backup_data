//All Required Dependencies
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler } from "react-native";

//BackHandler Function To Handle Hardware Back Button Of Device
const BackHandlers=()=>{
const navigation=useNavigation();
useEffect(() => {
  BackHandler.addEventListener("hardwareBackPress", backAction);

  return () =>
    BackHandler.removeEventListener("hardwareBackPress", backAction);
}, []);

//BackAction To Take Back The Recent Screen
const backAction = () => {
    navigation.goBack();
  return true;
};
}
export default BackHandlers;