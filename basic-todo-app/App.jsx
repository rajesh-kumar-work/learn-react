import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItem from "./components/ListItem";
import AddItemBox from "./components/AddItemBox";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Deploy project" },
  ]);

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleAdd = (task) => {
    const newTodo = {
      id: todos.length + 1,
      text: task,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <Box
      sx={{
        bgcolor: "skyblue",
        height: "100vh",
        width: "100vw",
        padding: "0px",
        margin: "0px",
        paddingLeft: "25%",
        paddingTop: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
          padding: "32px",
          m: "0px",
          width: "50%",
          borderRadius: "16px",
          gap: "16px",
        }}
      >
        <h1>ToDo List</h1>
        <AddItemBox handleAdd={handleAdd}></AddItemBox>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            todoContent={todo.text}
            onDelete={handleDelete}
          ></ListItem>
        ))}
      </Box>
    </Box>
  );
}
