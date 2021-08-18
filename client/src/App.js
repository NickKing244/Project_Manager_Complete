import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import EditProduct from "./components/EditProduct";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <EditProduct path="/:productId/edit" />
        <DisplayProduct path="/:productId" />
      </Router>
    </div>
  );
}

export default App;
