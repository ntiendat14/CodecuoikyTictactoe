import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Square extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.square, {width: this.props.size, height: this.props.size}]}
        onPress={this.props.onClick}>
        <Text style={styles.text}>{this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#999",
  },
  
  text: {
    fontSize: 30,
    fontWeight: '900'
  },
});
