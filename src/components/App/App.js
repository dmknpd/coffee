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
      country: "Brazil",
      src: third,
    },
    {
      id: 1,
      name: "Presto Coffee Beans 1 kg",
      price: "15.99",
      sold: 15,
      country: "Kenya",
      src: first,
    },
    {
      id: 2,
      name: "AROMISTICO Coffee 1 kg",
      price: "6.99",
      sold: 12,
      country: "Columbia",
      src: second,
    },
    {
      id: 3,
      name: "Coffee 1 kg",
      price: "6.99",
      sold: 1,
      country: "Brazil",
      src: first,
    },
    {
      id: 4,
      name: "A 1 kg",
      price: "2.99",
      sold: 2,
      country: "Kenya",
      src: second,
    },
    {
      id: 5,
      name: "Aromiko 1 kg",
      price: "4.99",
      sold: 8,
      country: "Columbia",
      src: third,
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/about" element={<About data={data} />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
