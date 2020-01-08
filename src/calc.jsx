import React from "react";

class Calc extends React.Component {
  constructor() {
    super();
    this.state = { num: [], sign: [] };
    this.handleClicknum = this.handleClicknum.bind(this);
    this.handleClicksign = this.handleClicksign.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }
  handleClicknum(num) {
    let array = [this.state.num, num];
    console.log(array);
    this.setState = { num: array };
  }
  handleClicksign(str) {}
  Calculate(str) {}
  render() {
    console.log(this.state.num);
    console.log(this.state.sign);
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
      </div>
    );
  }
}

export default Calc;
