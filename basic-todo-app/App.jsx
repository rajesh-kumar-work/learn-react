import React from "react";
import Box from "@mui/material/Box";
import ListItem from "./components/ListItem";

export default function App() {
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
        }}
      >
        <h1>ToDo List</h1>

        <ListItem></ListItem>
      </Box>
    </Box>
  );
}
