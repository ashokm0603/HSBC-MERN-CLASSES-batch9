import { Component } from "react";
class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>

<p>
    {this.props.data}
</p>

        <button
          onClick={() => {
            this.setState((state) => {
              return { count: state.count + 1 };
            });
          }}
        >
          Increment ++
        </button>
        <span> Number : {this.state.count} </span>
        <button onClick={()=>{
            this.setState((state)=>{
                return {count:state.count-1}
            })
        }}>Decrement --</button>
      </div>
    );
  }
}

export default CounterApp;
