import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Controls = props => (
  <View style={styles.container}>
    {!props.start ? (
      <TouchableOpacity style={styles.button} onPress={props.startTime}>
        <Text style={styles.textButton}>Start</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.button} onPress={props.pauseTime}>
        <Text style={styles.textButton}>Pause</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3643',
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    fontSize: 26,
    fontStyle: 'italic',
    color: '#ffed'
  }
});

export default Controls;
