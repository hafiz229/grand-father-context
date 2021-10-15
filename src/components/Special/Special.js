import React, { useContext } from "react";
import { RingContext } from "../../App";

const Special = () => {
  // get the context
  const [ornaments, house] = useContext(RingContext);
  return (
    <div>
      <h2>Special </h2>
      <small>{ornaments}</small>
      <br />
      <small>House: {house}</small>
    </div>
  );
};

export default Special;
