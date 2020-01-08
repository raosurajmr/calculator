import React from "react";

class Calc extends React.Component {
  constructor() {
    super();
    this.state = { num: [], sign: [], result: null };
    this.handleClicknum = this.handleClicknum.bind(this);
    this.handleClicksign = this.handleClicksign.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }
  handleClicknum(num) {
    let array = this.state.num;
    array.push(num);
    this.setState({ num: array });
  }
  handleClicksign(sign) {
    let array = this.state.sign;
    array.push(sign);
    this.setState({ sign: array });
  }
  Calculate() {
    let result = this.state.num[0];
    for (let i = 0; i < this.state.sign.length; i++) {
      if (this.state.sign[i] === "+") {
        result = result + this.state.num[i + 1];
      } else if (this.state.sign[i] === "-") {
        result = result - this.state.num[i + 1];
      }
    }
    this.setState({ result: result });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClicknum(0)}>0</button>
        <button onClick={() => this.handleClicknum(1)}>1</button>
        <button onClick={() => this.handleClicknum(2)}>2</button>
        <button onClick={() => this.handleClicknum(3)}>3</button>
        <button onClick={() => this.handleClicknum(4)}>4</button>
        <button onClick={() => this.handleClicknum(5)}>5</button>
        <br />
        <button onClick={() => this.handleClicksign("+")}>+</button>
        <button onClick={() => this.handleClicksign("-")}>-</button>
        <button onClick={() => this.Calculate("=")}>=</button>
        <br />
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calc;
