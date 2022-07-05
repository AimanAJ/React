import React from "react";
import { useState } from "react";

function StateHook() {

  const [name, steName] = useState("aiman");
  const [age, setage] = useState(20);

  const update = () => {
    if (name == "aiman") {
      steName("ahmad");
      setage(30);
    } else {
      steName("aiman");
      setage(20);
    }
    //console.log(name);
  };

  return (
    <div>
      <h1>My name is {name} , I'm : {age}</h1>
      <br></br>
      <button onClick={update}>Update</button>
    </div>
  );
}
export default StateHook;
