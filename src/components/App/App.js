import { Fragment, useState } from "react";
import Main from "../Main/Main";

import "./App.scss";

const App = () => {
  const [data, setData] = useState([
    { id: 0, name: "Solimo Coffee Beans 2 kg", price: "10.73", sold: 10 },
    { id: 1, name: "Presto Coffee Beans 1 kg", price: "15.99", sold: 15 },
    { id: 2, name: "AROMISTICO Coffee 1 kg", price: "6.99", sold: 12 },
    { id: 3, name: "Coffee 1 kg", price: "6.99", sold: 1 },
    { id: 4, name: "A1 kg", price: "6.99", sold: 2 },
  ]);

  return (
    <Fragment>
      <Main data={data}></Main>
    </Fragment>
  );
};

export default App;
