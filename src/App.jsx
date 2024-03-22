import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newproduct from "./pages/newproduct/Newproduct";
import Home from "./pages/home/Home";
import './index.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Newproduct />} />
          <Route path="/add/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
