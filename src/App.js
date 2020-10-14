import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleItem from "./components/items/SingleItem";
import Main from "./components/Main";

function App() {
  const [item, setItem] = useState(0);

  const updateItem = () => setItem(item+1)
  return (
    <>
      <Header count={item} />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route
          path="/singleItem"
          component={() => <SingleItem updateItem={updateItem} />}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
