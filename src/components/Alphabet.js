import React from "react";

const Alphabet = ({letter}) => {
    return (
        <div className={`letter ${letter}`}>
            {letter}
        </div>
    );
};

export default Alphabet;