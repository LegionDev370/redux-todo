import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import TodoAddPage from "./components/TodoAddPage";
import TodoDashboard from "./components/TodoDashboard";
const TodoApp = () => {
  return(
    <Router>
      <Routes>
        <Route path = {'/'} element = {<TodoDashboard/>}/>
        <Route path={'/settings'} element = {<TodoAddPage/>}/>
      </Routes>
    </Router>
  );
};

export default TodoApp;
