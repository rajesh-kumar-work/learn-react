import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

AddItemBox.propTypes = {
  handleAdd: PropTypes.func,
};

export default function AddItemBox({ handleAdd }) {
  const [newTask, setNewTask] = useState("");

  const onAdd = () => {
    setNewTask("");
    handleAdd(newTask);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px",
        marginBottom: "32px",
        color: "black",
        borderRadius: "32px",
        bgcolor: "#ebebeb",
        width: "80%",
      }}
    >
      <input
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        style={{
          flex: "1",
          backgroundColor: "#ebebeb",
          border: "none",
          borderRadius: "32px",
          fontSize: "20px",
          paddingLeft: "5px",
          color: "green",
          textDecoration: "none",
        }}
      ></input>
      <Button
        onClick={onAdd}
        sx={{
          bgcolor: "#32CD32",
          borderRadius: "50% ",
          fontSize: "50px",
          color: "black",
          height: "60px",
          width: "60px",
          fontFamily: "monospace",
        }}
        variant="contained"
      >
        +
      </Button>
    </Box>
  );
}
