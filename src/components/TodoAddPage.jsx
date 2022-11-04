import React from "react";
import { Link } from "react-router-dom";
import { v4 as GeneratorId } from "uuid";
import "./TodoAppPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { TodoItemAdder, energyCost, setColor } from "./TaskArray/Adder";
import { useState } from "react";
const TodoAddPage = () => {
  const [active, setActive] = useState({
    energyActive1: false,
    energyActive2: false,
    energyActive3: false,
  });
  const [data, setData] = useState({
    name: "",
    complated: false,
    id: GeneratorId(),
    color: null,
    activeColor: null,
  });
  const dispatch = useDispatch();
  const todoItem = useSelector((store) => store.Adder);
  const handlerSubmit = (event) => {
    event.preventDefault();
  };
  const handlerClick = () => {
    dispatch(
      TodoItemAdder({
        name: data.name,
        id: data.id,
        complated: data.complated,
      })
    );
    dispatch(energyCost({ energy: active }));
    dispatch(setColor({ detectingColor: data.color }));
  };
  console.log(todoItem);
  return (
    <div className="todo-dashboard">
      <div className="todo-add-header">
        <Link to={"/"} className="todo-add-home"></Link>
        <p className="todo-add-title">New Note</p>
      </div>
      <div className="todo-add-main">
        <form onSubmit={(event) => handlerSubmit(event)}>
          <div className="input-data">
            <div className="name">
              <p className="name-title">Name</p>
              <input
                type="text"
                className="input-name"
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
                placeholder="write here"
              />
            </div>
            <div className="priority">
              <p className="priority-title">Priority</p>
              <input
                className={`priority-color ${
                  data.activeColor === "1" ? "input-active" : ""
                }`}
                value={"#78ACD5"}
                type="color"
                data-id="1"
                onClick={(event) => {
                  setData({
                    ...data,
                    color: event.target.value,
                    activeColor: event.target.dataset.id,
                  });
                }}
              />
              <input
                className={`priority-color ${
                  data.activeColor === "2" ? "input-active" : ""
                }`}
                value={"#FCF302"}
                type="color"
                data-id="2"
                onClick={(event) => {
                  setData({
                    ...data,
                    color: event.target.value,
                    activeColor: event.target.dataset.id,
                  });
                }}
              />
              <input
                className={`priority-color ${
                  data.activeColor === "3" ? "input-active" : ""
                }`}
                value={"#FF2460"}
                type="color"
                data-id="3"
                onClick={(event) => {
                  setData({
                    ...data,
                    color: event.target.value,
                    activeColor: event.target.dataset.id,
                  });
                }}
              />
            </div>
            <div className="energy-costs">
              <p className="energy-costs-title">Energy costs</p>
              <div className="energy-cost-settings">
                <svg
                  onClick={(e) => setActive({ ...active, energyActive1: true })}
                  width="13"
                  height="17"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-id="1"
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill={active.energyActive1 ? "#78ACD5" : "white"}
                  />
                </svg>
                <svg
                  onClick={(e) => setActive({ ...active, energyActive2: true })}
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-id="2"
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill={active.energyActive2 ? "#78ACD5" : "white"}
                  />
                </svg>
                <svg
                  onClick={(e) => setActive({ ...active, energyActive3: true })}
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-id="3"
                    d="M9.6862 7.0933H7.49745V1.9933C7.49745 0.803301 6.85286 0.562468 6.06661 1.45497L5.49995 2.09955L0.70453 7.55372C0.0457803 8.29747 0.32203 8.90663 1.3137 8.90663H3.50245V14.0066C3.50245 15.1966 4.14703 15.4375 4.93328 14.545L5.49995 13.9004L10.2954 8.44622C10.9541 7.70247 10.6779 7.0933 9.6862 7.0933Z"
                    fill={active.energyActive3 ? "#78ACD5" : "white"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
        <div className="box">
          <Link
            to={"/"}
            className="adding-items-page"
            onClick={() => handlerClick()}
          >
            Add
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoAddPage;
