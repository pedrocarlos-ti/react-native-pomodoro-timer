import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.name}</Text>
    <Text
      style={{
        color: props.minuts === 0 ? '#ef5350' : '#36413e',
        fontSize: props.minuts === 0 ? 88 : 70
      }}
    >
      {props.minuts}:{props.seconds}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 55,
    color: '#36413e',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

Header.defaultProps = {
  name: 'Timeeeeer!',
  minuts: 0,
  seconds: 0
};
export default Header;
