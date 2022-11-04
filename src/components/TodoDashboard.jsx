import React from "react";
import { Link } from "react-router-dom";
import { nameGenerator, removingTasks,addingTime } from "./TaskArray/Adder";
import Settings from "./assets/settings.svg";
import { useSelector, useDispatch } from "react-redux";
import "./TodoDashboard.scss";
const TodoDashboard = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.Adder);
  const countName = useSelector((store) => store.Adder);
  const generatorName = () => {
    store.todo.array.map((item) => {
      return dispatch(nameGenerator({ detectName: item.name }));
    });
  };
  const removeArray = () => {
    dispatch(removingTasks({ remove: [] }));
  };
  const GeneratorTime = (event) => {
    dispatch(addingTime({time: event.target.dataset.type}))
  }
  console.log(store)
  return (
    <div className="todo-dashboard">
      <div className="todo-dashboard-header">
        <div>circle</div>
        <p className="todo-dashboard-title">Note</p>
        <button type="button" className="todo-settings">
          <img src={Settings} alt="settings" />
        </button>
      </div>
      <div className="todo-dashboard-main">
        <div className="todo-date">
          <buttton onClick = {(event) => GeneratorTime(event)}
            className="todo-date-btn"
            data-type={`0${date.getDay() - 1}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`}
          >
            TODAY
          </buttton>
          <buttton onClick = {(event) => GeneratorTime(event)}
            className="todo-date-btn"
            data-type={`0${date.getDay()}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`}
          >
            TOMORROW
          </buttton>
          <buttton onClick = {(event) => GeneratorTime(event)}
            className="todo-date-btn"
            data-type={`0${date.getDay() + 1}.${
              date.getMonth() + 1
            }.${date.getFullYear()}`}
          >
            SATURDAY
          </buttton>
        </div>
        <div className="todo-running-page">
          <button type="button" className="run-btn">
            RUN
          </button>
          <p className="task-title">{countName.todo.detectName}</p>
          <p className="task-backlogs">BACKLOGS</p>
        </div>
        <div className="todo-tasks">
          {store.todo.array && store.todo.array.length >= 1 && store.todo.array.map((element) => {
            return (
              <ul key={element.id}>
                <li className="todo-tasks-item" onClick={() => generatorName()}>
                  <div className="box-container">
                    <div
                      className="line-color"
                      style={{
                        backgroundColor: `${element.priorityColor}`,
                      }}
                    ></div>
                    <p className="todo-tasks-item-title">{element.name}</p>
                  </div>
                  <div className="energy-costs">
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                        fill={element.energyCost.energyActive1 ? "#78ACD5" : "white"}
                      />
                    </svg>
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                        fill={
                          element.energyCost.energyActive2 ? "#78ACD5" : "white"
                        }
                      />
                    </svg>
                    <svg
                      width="11"
                      height="16"
                      viewBox="0 0 11 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                        fill={
                          element.energyCost.energyActive3 ? "#78ACD5" : "white"
                        }
                      />
                    </svg>
                  </div>
                </li>
              </ul>
            );
          })}
          <p className="complatedTasks">completed tasks</p>
          <ul>
            <li className="complated-task-item">
              <div className="box-container">
                <div className="line-color"></div>
                <p className="todo-tasks-item-title">Homework</p>
              </div>
              <div className="energy-costs">
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill="white"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="removing-elements-room">
          <button className="removing-btn" onClick={() => removeArray()}>
            Сlean up the room
          </button>
          <button className="design-btn">todo design</button>
        </div>
        <div className="box">
          <Link to={"/settings"} className="adding-items-page">
            New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
