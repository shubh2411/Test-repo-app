import "./App.css";
import Display from "./components/Display";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <h1>Welcome User!!</h1>
      <Search />
      <Display />
    </div>
  );
}

export default App;
