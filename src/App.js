import React,{Fragment} from "react";
import Header from "./components/Header/Header";
import Middle from "./components/Middle/Middle";
import Products from "./components/Products/Products";

function App() {
  return (
    <Fragment>
     <Header />
     <Middle />
     <Products />
      </Fragment>
  );
}

export default App;
