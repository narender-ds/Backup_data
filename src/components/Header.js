//all required Dependancies
import {HStack, safeAreaTop, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const Header = props => {
  return (
    <HStack style={styles.Container}>
      <Text style={styles.txt}>{props.Text}</Text>
    </HStack>
  );
};
export default Header;
//stylesheet Property For Header and its Text
const styles = StyleSheet.create({
  Container: {
    space: 3,
    width: '100%',
    height: '10%',
    paddingLeft: 6,
    backgroundColor: '#48B600',
    paddingRight: 4,
    alignItems: 'center',
    safeAreaTop,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
