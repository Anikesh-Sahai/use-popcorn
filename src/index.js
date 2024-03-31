import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setmovieRating] = useState(0);
  return (
    <div>
      <StarRating size={60} color="blue" onSetRating={setmovieRating} />
      <p>this movie rated {movieRating} star</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// <>
//   <StarRating maxRating={10} size={50} />
//   <StarRating
//     maxRating={3}
//     messages={["okay", "good", "nice"]}
//     color="red"
//     size={15}
//   />
//   <Test />
// </>
