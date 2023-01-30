//all required Dependancies

import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

//ForgetScreen function starts from here
const ForgetScreen = () => {
  //Required States To Store The Values  and Show the Validations
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  //validations function For All Input tags
  const Validate = () => {
    let Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email.length == 0) {
      setErrorEmail(true);
    } else if (Regex.test(email) == false) {
      setCheckValidEmail(true);
    }
    //All Validations Requirements Are Fullfilled By The user Then else Part Will Run
    else {
      Alert.alert('Forget Password', 'Successfully Reset', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../image/forgetPassword.jpeg')}
        style={styles.img}
      />

      <Text style={styles.txt}>Forget Password</Text>
      <TextInputComponent
        value={email}
        placeholder={'Enter Registered Email'}
        style={styles.txtInpu}
        onChangeText={email => {
          setEmail(email);
          setCheckValidEmail(false);
        }}
      />
      {errorEmail && email.length <= 0 ? (
        <Text style={styles.error}>Please Enter Email</Text>
      ) : (
        ''
      )}
      {checkValidEmail || (error && email.length <= 0) ? (
        <Text style={styles.error}>Please Enter Valid Email</Text>
      ) : (
        ''
      )}

      <ButtonComponent
        style={styles.btn}
        Title={'Send Verification'}
        onPress={Validate}
      />
    </View>
  );
};
export default ForgetScreen;
//StyleSheet Properties To style The Content
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: '700',
    marginTop: 15,
    fontSize: 20,
  },
  img: {
    width: '30%',
    height: '10%',
    borderRadius: 600,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  txtInpu: {
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 40,
    flexDirection: 'row',
    borderColor: '#212cd6',
  },
  btn: {
    width: '80%',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderWidth: 1.5,
  },
  error: {
    marginTop: 5,
    marginLeft: 50,
    color: 'red',
  },
});
