import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleItem from "./components/items/SingleItem";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/singleItem" component={SingleItem} />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
