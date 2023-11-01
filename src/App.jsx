import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import KristianRoute from "./Routes/KristianRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/KristianRoute"
            element={<KristianRoute />}
          />
        </Route>
      </Routes>
      <div>
        <h1>Hello Project</h1>
        <h3>Hello Project</h3>
      </div>
    </div>
  );
}

export default App;
