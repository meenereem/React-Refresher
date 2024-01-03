import React, { useState } from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const [userInput, setUserInput] = useState("");
  //let userInput = '';

  const AddGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userInput,
    };

    setUserInput("");

    props.onAddGoal(newGoal);
  };

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={AddGoalHandler}>
      <input type="text" value={userInput} onChange={userInputHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
