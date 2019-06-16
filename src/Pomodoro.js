import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Controls from './components/Controls';
import TimeInput from './components/TimeInput';

export default class Pomodoro extends Component {
  state = {
    time: 0,
    workMinuts: 0,
    workSeconds: 0,
    breakMinuts: 0,
    breakSeconds: 0,
    started: false
  };

  startTime = () => {
    if (!this.state.started) {
      this.interval = setInterval(this.updateTime, 1000);
      this.setState({ started: true });
    }
  };

  updateTime = () => {
    const { workSeconds, workMinuts } = this.state;

    if (workSeconds < 1) {
      this.setState({ workSeconds: 60, workMinuts: workMinuts - 1 });
    } else {
      this.setState({ workSeconds: workSeconds - 1 });
    }
  };

  pauseTime = () => {
    clearInterval(this.interval);
    this.setState({ started: false });
  };

  handleWorkMinuts = value => {
    this.setState({ workMinuts: value });
  };

  handleWorkSeconds = value => {
    this.setState({ workSeconds: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          minuts={this.state.workMinuts}
          seconds={this.state.workSeconds}
          name="Waaaaaaake!"
        />
        <TimeInput
          handleWorkMinuts={this.handleWorkMinuts}
          handleWorkSeconds={this.handleWorkSeconds}
          start={this.state.started}
        />
        <Controls
          startTime={this.startTime}
          pauseTime={this.pauseTime}
          start={this.state.started}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#586994',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
