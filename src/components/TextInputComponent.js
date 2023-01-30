//all required Dependancies
import React from 'react';
import {TextInput, Image, View} from 'react-native';

//TextInput Component To get The Users Input
const TextInputComponent = (props, icon) => {
  return (
    <View>
      <TextInput
        style={props.style}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChangeText={props.onChangeText}
        icon={props.icon}
        secureTextEntry={props.type ? true : false}
        keyboardType={props.keyboardType}
      />
      <Image source={icon} style={{width: 10, height: 10}} />
    </View>
  );
};
export default TextInputComponent;
