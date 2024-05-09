import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Spinner = () => {
  return (
    <div>
      <div className="spinner">
        <CircleLoader color="#123abc" size={150} />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
