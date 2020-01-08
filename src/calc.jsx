import React from "react";

class Calc extends React.Component {
  constructor() {
    super();
    this.state = { array: [], result: null };
    this.handleClick = this.handleClick.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }
  handleClick(str) {
    let ary = this.state.array;
    ary.push(str);
    this.setState({ array: ary });
  }

  Calculate() {
    let num = [];
    let temp = 0;
    let sign = [];

    let count = 0;
    for (let i = 0; i < this.state.array.length; i++) {
      if (typeof this.state.array[i] === "string") {
        sign.push(this.state.array[i]);
        num.push(temp);
        count = 0;
        temp = 0;
      } else {
        temp = temp + this.state.array[i] * Math.pow(10, count);
        count++;
      }
    }
    num.push(temp);
    console.log(this.state.array);
    console.log(num);
    console.log(sign);
    let result = num[0];
    for (let i = 0; i < sign.length; i++) {
      if (sign[i] === "+") {
        result = result + num[i + 1];
      } else if (sign[i] === "-") {
        result = result - num[i + 1];
      } else if (sign[i] === "*") {
        result = result * num[i + 1];
      } else if (sign[i] === "/") {
        result = result / num[i + 1];
      } else if (sign[i] === "%") {
        result = result % num[i + 1];
      }
    }
    this.setState({ result: result });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(0)} className="button">
          0
        </button>
        <button onClick={() => this.handleClick(1)} className="button">
          1
        </button>
        <button onClick={() => this.handleClick(2)} className="button">
          2
        </button>
        <button onClick={() => this.handleClick(3)} className="button">
          3
        </button>
        <br />
        <button onClick={() => this.handleClick(4)} className="button">
          4
        </button>
        <button onClick={() => this.handleClick(5)} className="button">
          5
        </button>
        <button onClick={() => this.handleClick(6)} className="button">
          6
        </button>
        <button onClick={() => this.handleClick(7)} className="button">
          7
        </button>
        <br />
        <button onClick={() => this.handleClick(8)} className="button">
          8
        </button>
        <button onClick={() => this.handleClick(9)} className="button">
          9
        </button>
        <button onClick={() => this.handleClick("+")} className="button">
          +
        </button>
        <button onClick={() => this.handleClick("-")} className="button">
          -
        </button>
        <br />
        <button onClick={() => this.handleClick("*")} className="button">
          *
        </button>
        <button onClick={() => this.handleClick("/")} className="button">
          /
        </button>
        <button onClick={() => this.handleClick("%")} className="button">
          %
        </button>
        <button onClick={() => this.Calculate("=")} className="button">
          =
        </button>
        <br />
        <h1 className="display">{this.state.result}</h1>
      </div>
    );
  }
}

export default Calc;
