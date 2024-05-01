import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Main from "../Main/Main";
import About from "../About/About";

import "./App.scss";
import first from "../img/PromotionImg/first.jpg";
import second from "../img/PromotionImg/second.jpg";
import third from "../img/PromotionImg/third.jpg";

const App = () => {
  const [data] = useState([
    {
      id: 0,
      name: "Solimo Coffee Beans 2 kg",
      price: "10.73",
      sold: 10,
      src: third,
    },
    {
      id: 1,
      name: "Presto Coffee Beans 1 kg",
      price: "15.99",
      sold: 15,
      src: first,
    },
    {
      id: 2,
      name: "AROMISTICO Coffee 1 kg",
      price: "6.99",
      sold: 12,
      src: second,
    },
    { id: 3, name: "Coffee 1 kg", price: "6.99", sold: 1 },
    { id: 4, name: "A1 kg", price: "6.99", sold: 2 },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
