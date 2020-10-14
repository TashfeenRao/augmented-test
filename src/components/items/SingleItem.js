import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/singleItem.css";

const SingleItem = ({ updateItem }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 1) {
      updateItem();
    }
  }, [count, updateItem]);

  return (
    <div>
      <Link to="/">Back</Link>
      <div className="singleItem__contianer">
        <h1>single item</h1>
        <button onClick={() => setCount(count + 1)}>add item</button>
      </div>
    </div>
  );
};

export default SingleItem;
