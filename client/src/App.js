import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <EditProduct path="/:productId/edit" />
      </Router>
    </div>
  );
}

export default App;
