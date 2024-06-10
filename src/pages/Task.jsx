import "../assets/css/fontawesome.css";
import TaskPanel from "../components/TaskPanel";

const Task = () => {
  return (
    <>
      <div className="flex-col h-[90%] overflow-scroll no-scrollbar">
        <h2>Complete Tasks and Get Reward</h2>
        <div className="h-[80%] overflow-scroll no-scrollbar">
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
          <TaskPanel heading="Follow our community on X">250 000</TaskPanel>
        </div>
      </div>
    </>
  );
};

export default Task;
