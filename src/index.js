import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { getError } from "./store/errors";
import configureStore from "./store/store";
import {
  titleChanged,
  taskDeleted,
  completeTask,
  loadTasks,
  getTasks,
  getTasksLoadingStatus,
  createTask,
} from "./store/task";
const store = configureStore();

const App = (params) => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  const error = useSelector(getError());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const changeTitle = (taskId) => {
    dispatch(titleChanged(taskId));
  };
  const deleteTask = (taskId) => {
    dispatch(taskDeleted(taskId));
  };
  const addNewTask = () => {
    dispatch(createTask({ userId: 1, title: "New Task", completed: false }));
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <h1>APp</h1>
      <button onClick={addNewTask}>Добавить задачу</button>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => dispatch(completeTask(el.id))}>
              complete
            </button>
            <button onClick={() => changeTitle(el.id)}>change Title</button>
            <button onClick={() => deleteTask(el.id)}>delete task</button>

            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
