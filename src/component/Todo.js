import React, { useState } from "react";
import todoLogo from "../image/check-mark.png";
import "../App.css";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [addTask, setAddTask] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  //add tasks
  const taskArray = () => {
    if (!inputText) {
      alert("Please fill the data");
    } else if (inputText && !toggleBtn) {
      setAddTask(
        addTask.map((ele) => {
          if (ele.id === isEditItem) {
            return { ...ele, task: inputText };
          }
          return ele;
        })
      );

      setToggleBtn(true);
      setInputText("");
      setIsEditItem(null);
    } else {
      const allInputTask = {
        id: new Date().getTime().toString(),
        task: inputText,
        complete: false,
      };

      setAddTask([...addTask, allInputTask]);
      setInputText("");
    }
    setToggleBtn(true);
  };

  //delete tasks
  const deleteTask = (index) => {
    setAddTask(
      addTask.filter((ele) => {
        return index !== ele.id;
      })
    );
  };

  //edit tasks
  const editTask = (index) => {
    const newEditTask = addTask.find((ele) => {
      return ele.id === index;
    });

    setToggleBtn(false);

    setInputText(newEditTask.task);

    setIsEditItem(index);
  };

  //crossed Task

  const crossedEvent = (tsk) => {
    setAddTask(
      addTask.map((item) => {
        if (item.id === tsk.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="row">
        <div className="container col-lg-8 col-sm-8 mt-5  text-center todo-body">
          <div>
            <img className="logo" src={todoLogo} alt="todo-logo" />
            <figcaption>Lynx</figcaption>
          </div>

          <div className="row">
            <div className="col-lg-8 col-sm-8 mx-auto ">
              <div className="input-group  my-5 input-group-lg">
                <input
                  type="text"
                  className="form-control px-4"
                  placeholder="Add task..."
                  value={inputText}
                  onChange={(event) => setInputText(event.target.value)}
                />

                {toggleBtn ? (
                  <button
                    onClick={taskArray}
                    className="btn btn-primary add-btn"
                    title="Add Item"
                  >
                    <i class="bi bi-plus add-i-btn">Add task</i>
                  </button>
                ) : (
                  <button
                    onClick={taskArray}
                    className="btn btn-success add-btn"
                    title="Update Item"
                  >
                    <i class="bi bi-check"></i>
                  </button>
                )}
              </div>

              <div className="mt-5  showItems">
                {addTask.map((ele) => {
                  return (
                    <div className="input-group my-3">
                      <button
                        className={
                          ele.complete ? "btn btn-dark" : "btn btn-light"
                        }
                      >
                        <span onClick={() => crossedEvent(ele)}>
                          <i
                            className={
                              ele.complete
                                ? "bi  bi-toggle-on"
                                : "bi  bi-toggle-off"
                            }
                          ></i>
                        </span>
                      </button>

                      <div className="form-control bg-transparent">
                        <h3
                          style={{
                            textDecoration: ele.complete
                              ? "line-through 3px"
                              : "none",
                          }}
                          className="inputTask"
                        >
                          {ele.task}
                        </h3>
                      </div>

                      <button className="input-group-text btn btn-outline-success edit-btn">
                        <i
                          onClick={() => editTask(ele.id)}
                          class="bi bi-pencil-square"
                        ></i>
                      </button>

                      <button className="input-group-text btn btn-danger del-btn">
                        <i
                          onClick={() => deleteTask(ele.id)}
                          className="bi bi-trash "
                          title="Delete Item"
                        ></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
