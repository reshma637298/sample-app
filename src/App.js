import "./App.css";
import Vote from "./Components/Vote";
import CounterClass from "./Components/CounterClass";
import CounterFn from "./Components/CounterFn";
import Counterref from "./Components/Counterref";
import ParentComponent from "./Components/Callbacks/ParentComponent";
import CounterReducer from "./Components/CounterReducer";
import ParentContext from "./Components/Contexts/ParentContext";

function App() {
  return (
    <div className="App">
      {/* <CounterClass/> */}
      {/* <Vote age={20} name={"tester"}/> */}
      {/* <CounterFn /> */}

      {/* <ParentComponent/> */}
      {/* <Counterref/> */}
      {/* <CounterReducer/> */}
      <ParentContext/>
    </div>
  );
}

export default App;
