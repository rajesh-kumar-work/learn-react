import { React } from "react";
import Box from "@mui/material/Box";
import ListItem from "./components/ListItem";
import AddItemBox from "./components/AddItemBox";

export default function App() {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy project", completed: false },
  ];
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
        <AddItemBox></AddItemBox>
        {todos.map((todo) => (
          <ListItem key={todo.id} todoContent={todo.text}></ListItem>
        ))}
      </Box>
    </Box>
  );
}
