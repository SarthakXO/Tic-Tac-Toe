import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  renderSquares = (i) => {
    return (
      <>
        <Square
          value={this.props.squares[i]}
          handleClick={() => this.props.clickAction(i)}
        />
        
      </>
    );
  };

  render() {
    return (
      <>
        <div className="border-row">
          {this.renderSquares(0)}

          {this.renderSquares(1)}
          {this.renderSquares(2)}
        </div>
        <div className="borer-row">
          {this.renderSquares(3)}
          {this.renderSquares(4)}
          {this.renderSquares(5)}
        </div>
        <div className="border-row">
          {this.renderSquares(6)}
          {this.renderSquares(7)}
          {this.renderSquares(8)}
        </div>
        
      </>
    );
  }
}
