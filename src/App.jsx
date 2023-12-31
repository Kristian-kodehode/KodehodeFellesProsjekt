import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import KristianRoute from "./Routes/Kristian/KristianRoute";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
