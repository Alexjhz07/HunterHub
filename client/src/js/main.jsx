import React from "react";
import ReactDOM from "react-dom";
import HackerHub from "./HackerHub.jsx";
const wrapper = document.getElementById("container");

ReactDOM.render(
        <div>
          <HackerHub url="http://192.252.235.8:4564"/>
          {/* <HackerHub url="http://127.0.0.1:4564" /> */}
        </div>
, wrapper);



