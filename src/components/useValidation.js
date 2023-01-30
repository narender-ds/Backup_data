import React, { useState } from 'react'

const useValidation=(email,password)=> {
const [error,setError]=useState(false);
const [Regerror, setRegError] = useState(false);
const validate = () => {
    //Email Regex
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email.length == 0 && password.length == 0) {
      setError(true);
    } else if (emailReg.test(email) === false) {
      setRegError(true);
    }
    // after validations requirement fulfills this part of (if condition) will run
    if (email !== '' && password !== '' && emailReg.test(email) === true) {
      Alert.alert('Login', 'Successfully Login', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Home')},
      ]);
    }
  return (
validate()
  );
};
};

export default useValidation