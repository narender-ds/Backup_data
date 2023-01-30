//all required Dependancies
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';
import {useNavigation} from '@react-navigation/native';

//Login function starts from here
const Login = () => {
  //required States
  const [Regerror, setRegError] = useState(false);
  const navigation = useNavigation();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const handleChange = (name, value) => {
    setInput({...input, [name]: value});
    console.log(input);
  };
  const handleError = () => {
    if (
      !input.email ||
      !input.email.trim() ||
      !input.password ||
      !input.password.trim()
    ) {
      setError({email: 'Email is Required', password: 'Password is Required'});
    } // after validations requirement fulfills this part of (if condition) will run
    if (input.email !== '' && input.password !== '') {
      Alert.alert('Login', 'Successfully Login', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Home')},
      ]);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#03052b'} />
      <View>
        <Image source={require('../image/login.png')} style={styles.img} />
        <Text style={styles.txt}>Login</Text>

        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Email'}
          name="email"
          value={input.email || ''}
          onChangeText={value => {
            handleChange(`email`, value);
            setError(input.email);
          }}
        />
        {error.email && <Text style={styles.error}>{error.email}</Text>}

        <TextInputComponent
          style={styles.txtInpu}
          placeholder={'Enter Password'}
          name="password"
          value={input.password || ''}
          onChangeText={value => {
            handleChange(`password`, value);
            setError(input.password);
          }}
          type={'password'}
        />
        {error.password && <Text style={styles.error}>{error.password}</Text>}
        <Text
          style={styles.forgetbtn}
          onPress={() => {
            navigation.navigate('ForgetScreen');
          }}>
          Forget Password?
        </Text>
        <ButtonComponent
          style={styles.btn}
          onPress={() => handleError()}
          Title={'Login'}
        />
        <Text
          style={styles.linkbtn}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          Create New Account?
        </Text>
      </View>
    </ScrollView>
  );
};
//stylesheets property for styling the login Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEfAE6',
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginTop: 40,
    alignSelf: 'center',
  },
  txt: {
    marginTop: 30,
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 20,
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
  linkbtn: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 20,
  },
  forgetbtn: {
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 40,
    marginTop: 20,
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
  error: {
    marginTop: 5,
    marginLeft: 50,
    color: 'red',
  },
});
export default Login;
