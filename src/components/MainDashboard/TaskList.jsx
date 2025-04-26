import React from "react";

function TaskList() {
  return (
    <div className="p-3 w-100 h-100 TaskList">
      <h4>Tasks</h4>
      <div>
        <div className="py-3">
          <input type="checkbox" className="mx-3" />
          <span>Landing Page Design</span>
        </div>
        <div className="py-3">
          <input type="checkbox" className="mx-3" />
          <span>Landing Page Design</span>
        </div>
        <div className="py-3">
          <input type="checkbox" className="mx-3" />
          <span>Landing Page Design</span>
        </div>
        <div className="py-3">
          <input type="checkbox" className="mx-3" />
          <span>Landing Page Design</span>
        </div>
        <div className="py-3">
          <input type="checkbox" className="mx-3 " />
          <span>Landing Page Design</span>
        </div>
        <div className="py-3">
          <input type="checkbox" className="mx-3 " />
          <span>Landing Page Design</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
