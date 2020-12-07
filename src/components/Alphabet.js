import React from "react";

const Alphabet = ({ letter }) => {
  return <p className={`letter ${letter}`}>{letter}</p>;
};

export default Alphabet;
