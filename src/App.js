import React, { useState } from "react";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoal/NewGoal";

const App = () => {
  // first constant holds latest state snapshot, second one hold update function
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course main Topic" },
    { id: "cg3", text: "Help other students in the course Q&A" },
  ]);

  //call back function to pass information from secondary to primary component
  const AddNewGoalHandler = (newGoal) => {
    //state update is up to React, may be slow if there are alot of updates going one
    //can use this way if it uses a new data piece that does not depend on previous state
    //setCourseGoals(courseGoals.concat(newGoal));

    //function calls gaurantee the states are updated in correct order, state update depends on previous state so we must use this way.
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={AddNewGoalHandler} />
      {/* pass information from primary to secondary component */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
