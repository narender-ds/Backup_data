//All Required Dependencies
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
//Button Components With Props And Styles
const ButtonComponent = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text style={Styles.BtnTxt}>{props.Title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
//StyleSheet Properties For Button Text
const Styles = StyleSheet.create({
  BtnTxt: {fontWeight: '800', color: '#ffff', fontSize: 18},
});
