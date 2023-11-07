
import Counter from "./components/Counter/Counter";
import Users from "./components/Users/Users";

function App() {
  return <div className="App">
    <div className="w-2/5 flex flex-col items-center m-5 h-full shadow-md shadow-neutral-300">
      <Counter></Counter>
      <Users></Users>
    </div>

  </div>;
}

export default App;
