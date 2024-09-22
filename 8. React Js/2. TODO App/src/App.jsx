import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./component/todo-item/TodoItem";
import TodoDetails from "./component/todo-detail/TodoDetails";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchListofTodos = async () => {
    try {
      setLoading(true);
      const apiResponce = await fetch("https://dummyjson.com/todos");
      const result = await apiResponce.json();
      console.log(result);

      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg("");
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Some error occured");
    }
  };

  const fetchDetailsOfCurrentTodo = async (getCurrentTodoId) => {
    console.log(getCurrentTodoId);

    try {
      const apiResponce = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponce.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListofTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangulat" width={650} height={650} />;

  return (
    <>
      <div className={classes.mainWrapper}>
        <h1 className={classes.headerTitle}>
          Simple Todo App Using Material UI
        </h1>
        <div className={classes.todoListWrapper}>
          {todoList && todoList.length > 0
            ? todoList.map((todoItem) => (
                <TodoItem
                  fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                  todo={todoItem}
                />
              ))
            : null}
        </div>
        <TodoDetails
          openDialog={openDialog}
          todoDetails={todoDetails}
          setOpenDialog={setOpenDialog}
          setTodoDetails={setTodoDetails}
        />
      </div>
    </>
  );
}

export default App;
