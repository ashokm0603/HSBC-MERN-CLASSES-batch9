import { Component } from "react";

class CounterApp extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState(() => {
              this.state.counter + 1;
            });
          }}
        >
          Increment ++
        </button>
        Number :{this.state.counter}
        <button onClick={()=>{
            this.setState(()=>{
                this.state.counter-1;
            })
        }}>Decrement --</button>
      </>
    );
  }
}

export default CounterApp;
