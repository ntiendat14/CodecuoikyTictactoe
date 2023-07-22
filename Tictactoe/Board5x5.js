import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Square from './Square'

export default class Board5x5 extends Component {
  renderSquare(i, size) {
    const isInWinLine = !this.props.winLine ? false : this.props.winLine.indexOf(i) != -1;
    return (
      <Square 
        value={this.props.squares[i]} 
        size={size}
        isInWinLine={isInWinLine} onClick={() => this.props.onClick(i)}
      />
    );
  } 
  
  render() {
    const width = Dimensions.get('window').width;
    const bSize = 0.43*width;
    
    const boardArr = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];

    return (
      <View style={[styles.board, {width: bSize*5/3.019, height: bSize*1.66}]}>
        {boardArr.map(row =>
          <View style={styles.row}>
            {row.map(square => this.renderSquare(square, (bSize-2)/3))}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },

  board: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: 'right' 
  }
});
