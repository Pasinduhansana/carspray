import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App_footer from "./Components/Footer";
import Specialists from "./Components/Specialists";
import AboutUS from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Specialists />
                <AboutUS />
                <App_footer />
              </>
            }
          />
          <Route
            path="/carspray/"
            element={
              <>
                <Specialists />
                <AboutUS />
                <App_footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
