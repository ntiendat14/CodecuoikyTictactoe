import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Board5x5 from './Board5x5'

export default class Game5x5 extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      endGame: false,
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares
    if (this.state.endGame || squares[i] != null) return;

    if (squares[i] || this.calculateWinner()) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  reset() {
    this.setState({
      squares: Array(9).fill(null),
      endGame: false,
      xIsNext: true
    });
  }

  calculateWinner() {
    const squares = this.state.squares;
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c, d] = winLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner();

    let status;
    let player;
   
    if (winner) {
      status = "Winner: ";
      player = winner
    } else {
      status = "Next player: ";
      player = this.state.xIsNext ? "X" : "O"
    }

    return (
      <View style={styles.game}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.textPlayer}>{player}</Text>
       </Text>
        <Board5x5 
          squares={this.state.squares}
          winLine={this.state.winLine}
          onClick={i => this.handleClick(i)}
        />
        <TouchableOpacity style={styles.alo} onPress={() => this.reset()}>
           <Text style={[styles.resetButton, styles.alo2]}>Reset Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  status: {
    fontSize: 16,
  },
  textPlayer:  {
    fontWeight: "bold",
    fontSize: 16,
  },
  resetButton: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20
  }
});

const style = StyleSheet.create({
  alo:{
      marginTop: 20,
  },
  alo2:{
    textAlign: "center",
    fontWeight: "bold"
  }
});

const winLines = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [20, 21, 22, 23],
  [21, 22, 23, 24],
  [0, 5, 10, 15],
  [5, 10, 15, 20],
  [1, 6, 11, 16],
  [6, 11, 16, 21],
  [2, 7, 12, 17],
  [7, 12, 17, 22],
  [3, 8, 13, 18],
  [8, 13, 18, 23],
  [4, 9, 14, 19],
  [9, 14, 19, 24],
  [3, 7, 11, 15],
  [4, 8, 12, 16],
  [8, 12, 16, 20],
  [9, 13, 17, 21],
  [1, 7, 13, 19],
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [5, 11, 17, 23]
];