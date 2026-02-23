import ClassBasedComponent from "./ClassBasedComponent";
import CounterApp from "./CounterApp";
import FunctionBasedComponent from './FunctionBasedComponent';

function App() {
  return (
    <>


    <ClassBasedComponent/>
    <CounterApp/>
      <p>HELLO</p>
      <h1>Hello This is App Component</h1>
      <h1>
        Addition in 10 +20 : {10+20}
      </h1>
      <FunctionBasedComponent/>
    </>
  );
}

export default App;
