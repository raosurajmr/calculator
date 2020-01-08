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
      else if (this.state.sign[i] === "*") {
        result = result * this.state.num[i + 1];
      }
      else if (this.state.sign[i] === "/") {
        result = result / this.state.num[i + 1];
      }
      else if (this.state.sign[i] === "%") {
        result = result % this.state.num[i + 1];
      }
    }
    this.setState({ result: result });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClicknum(0)} className="button">
          0
        </button>
        <button onClick={() => this.handleClicknum(1)} className="button">
          1
        </button>
        <button onClick={() => this.handleClicknum(2)} className="button">
          2
        </button>
        <button onClick={() => this.handleClicknum(3)} className="button">
          3
        </button>
        <br />
        <button onClick={() => this.handleClicknum(4)} className="button">
          4
        </button>
        <button onClick={() => this.handleClicknum(5)} className="button">
          5
        </button>
        <button onClick={() => this.handleClicknum(6)} className="button">
          6
        </button>
        <button onClick={() => this.handleClicknum(7)} className="button">
          7
        </button>
        <br />
        <button onClick={() => this.handleClicknum(8)} className="button">
          8
        </button>
        <button onClick={() => this.handleClicknum(9)} className="button">
          9
        </button>
        <button onClick={() => this.handleClicksign("+")} className="button">
          +
        </button>
        <button onClick={() => this.handleClicksign("-")} className="button">
          -
        </button>
        <br />
        <button onClick={() => this.handleClicksign("*")} className="button">
          *
        </button>
        <button onClick={() => this.handleClicksign("/")} className="button">
          /
        </button>
        <button onClick={() => this.handleClicksign("%")} className="button">
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
