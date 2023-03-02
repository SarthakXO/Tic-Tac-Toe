import React from "react";
import Board from "./Board";

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  reset = () => {
    this.setState({
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    });
  };

  handleClick = (i) => {
    const history2 = this.state.history;
    const current = history2[history2.length - 1];
    const squares2 = current.squares;

    const winner = this.calculateWinner(squares2);

    if (winner || squares2[i]) {
      const final = `Winner is ${winner}`;
      return final;
    }
    squares2[i] = this.state.xIsNext === true ? "X" : "O";

    this.setState({
      history: history2.concat({
        squares: squares2,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history2.length,
    });
  };

  calculateWinner = (squares) => {
    const possible = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const history2 = this.state.history;
    const current = history2[history2.length - 1];
    const squares2 = current.squares;

    for (let i = 0; i < possible.length; i++) {
      const [a, b, c] = possible[i];

      if (
        squares2[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares2[a];
      }
    }
  };

  

  render() {
    const history2 = this.state.history;

    const current = history2[this.state.stepNumber];

    const winner = this.calculateWinner(current.squares);
    
    

    return (
      <div className="game">
        <div className="game-board">
          <Board
            clickAction={(i) => this.handleClick(i)}
            squares={current.squares}

          />
          <button onClick={this.reset}>Reset</button>
          <br />
          <div>
            {winner===undefined?`${this.state.xIsNext?"Turn of X":"Turn of O"}`:" "}
            
          </div>
          <div>{winner === undefined ? " " : `The Winner is ${winner}`}</div>
        </div>
      </div>
    );
  }
}
