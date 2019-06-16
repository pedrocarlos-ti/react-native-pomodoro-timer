import React, { Fragment } from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';

const TimeInput = props => (
  <View style={styles.container}>
    {!props.start ? (
      <Fragment>
        <View style={styles.containerInput}>
          <Text style={styles.mode}>Work time |</Text>
          <Text>minutes</Text>
          <TextInput
            placeholder="15"
            style={styles.inputText}
            maxLength={2}
            selectionColor="#36413e"
            onChangeText={props.handleWorkMinuts}
          />
          <Text>seconds</Text>
          <TextInput
            placeholder="30"
            style={styles.inputText}
            maxLength={2}
            selectionColor="#36413e"
            onChangeText={props.handleWorkSeconds}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.mode}>Break time |</Text>
          <Text>minutes</Text>
          <TextInput
            placeholder="15"
            style={styles.inputText}
            maxLength={2}
            selectionColor="#36413e"
          />
          <Text>seconds</Text>
          <TextInput
            placeholder="30"
            style={styles.inputText}
            maxLength={2}
            selectionColor="#36413e"
          />
        </View>
      </Fragment>
    ) : (
      <View />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffed',
    marginTop: 10,
    height: 35,
    width: '90%',
    borderRadius: 3
  },

  button: {
    width: 100,
    height: 25,
    backgroundColor: '#ffed',
    borderRadius: 3,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputText: {
    backgroundColor: '#ffed',
    width: 30,
    height: 25,
    borderRadius: 3
  },

  mode: {
    fontWeight: 'bold'
  }
});

export default TimeInput;
