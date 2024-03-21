import Paper from "@mui/material/Paper";
import React from "react";
import Box from "@mui/material/Box";

export default function ListItem() {
  return (
    <Paper
      sx={{
        padding: "8px",
        bgcolor: "crimson",
        color: "white",
        minWidth: "50%",
      }}
      elevation={2}
    >
      <h1>Hello</h1>
    </Paper>
  );
}
