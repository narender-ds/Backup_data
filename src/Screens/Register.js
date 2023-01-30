//all required Dependancies

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import BackHandlers from '../components/BackHandler';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

//Register function starts from here
const Register = () => {
  //required States
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [Regerror, setRegError] = useState(false);
  const [PhoneRegerror, setPhoneRegError] = useState(false);
  const [allError, setAllError] = useState(false);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setInput({...input, [name]: value});
    console.log(input);
  };
  //validations function For All Input tags
  const Validate = () => {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let phoneReg = /^[0]?[789]\d{9}$/;
    if (
      name.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      password.length == 0 ||
      confirm_password.length == 0
    ) {
      setAllError(true);
    } else if (emailReg.test(email) === false) {
      setRegError(true);
    } else if (phoneReg.test(phone) === false) {
      setPhoneRegError(true);
    } else if (password != confirm_password) {
      setPasswordError(true);
    }
    // after validations requirement fulfills the else part will run
    else {
      Alert.alert('Register', 'Successfully Registered', [
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
    <ScrollView style={styles.container}>
      <View>
        <Image source={require('../image/login.png')} style={styles.img} />
        <Text style={styles.txt}>Create New Account</Text>
        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Name'}
          name="name"
          value={input.name || ''}
          // onChangeText={name => setName(name)}
          onChangeText={value => handleChange(`name`, value)}
          icon={require('../image/mail.png')}
        />
        {allError && name.length <= 0 ? (
          <Text style={styles.error}>Please Enter Name</Text>
        ) : (
          ''
        )}

        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Email'}
          name="email"
          value={input.email || ''}
          // onChangeText={email => {
          //   setEmail(email);
          //   setRegError(false);
          //   setError(false);
          // }}
          onChangeText={value => handleChange(`email`, value)}
        />
        {/* {allError && email.length <= 0 ? (
          <Text style={styles.error}>Please Enter Email</Text>
        ) : (
          ''
        )}

        {Regerror || (error && email.length <= 0) ? (
          <Text style={styles.error}>Please Enter Valid Email</Text>
        ) : (
          ''
        )} */}

        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Phone'}
          name="phone"
          value={input.phone || ''}
          // onChangeText={phone => {
          //   setPhone(phone);
          //   setPhoneRegError(false);
          //   setError(false);
          // }}
          onChangeText={value => handleChange(`phone`, value)}
          keyboardType={'numeric'}
          icon={require('../image/mail.png')}
        />
        {/* {allError && phone.length <= 0 ? (
          <Text style={styles.error}>Please Enter Phone Number</Text>
        ) : (
          ''
        )}
        {PhoneRegerror || (error && phone.length <= 0) ? (
          <Text style={styles.error}>Please Enter Valid Mobile Number</Text>
        ) : (
          ''
        )} */}
        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Password'}
          name="password"
          value={input.password || ''}
          // onChangeText={password => setPassword(password)}
          onChangeText={value => handleChange(`password`, value)}
          type={'password'}
        />
        {/* {allError && password.length <= 0 ? (
          <Text style={styles.error}>Please Enter Password</Text>
        ) : (
          ''
        )} */}

        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Confirm Password'}
          name="confirm_password"
          value={input.confirm_password || ''}
          // onChangeText={confirm_password => {
          //   setConfirm_Password(confirm_password);
          //   setPasswordError(false);
          // }}
          onChangeText={value => handleChange(`confirm_password`, value)}
          type={'password'}
        />
        {/* {allError && confirm_password.length <= 0 ? (
          <Text style={styles.error}>Please Enter Confirm-Password</Text>
        ) : (
          ''
        )}

        {passwordError ? (
          <Text style={styles.error}>Confirm-Password Must Be Same</Text>
        ) : (
          ''
        )} */}

        <BackHandlers />
        <ButtonComponent
          style={styles.btn}
          onPress={Validate}
          Title={'Register'}
        />
        <Text
          style={styles.linkBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          Already Have An Account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

//stylesheets property for styling the Register Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEfAE6',
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  txt: {
    marginTop: 30,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
  },
  btn: {
    width: '80%',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderWidth: 1.5,
    fontSize: 50,
  },
  txtInpu: {
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    marginTop: 25,
    flexDirection: 'row',
    borderColor: '#212cd6',
  },
  error: {
    marginTop: 5,
    marginLeft: 50,
    color: 'red',
  },
  linkBtn: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
  },
});
