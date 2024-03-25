import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

AddItemBox.propTypes = {
  handleAdd: PropTypes.func,
};

export default function AddItemBox({ handleAdd }) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  const onAdd = () => {
    if (newTask.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setNewTask("");
    handleAdd(newTask);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px",
        marginBottom: "32px",
        width: "80%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: "1",
          justifyContent: "space-between",
          padding: "0px",
          color: "black",
          borderRadius: "32px",
          bgcolor: "#ebebeb",
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
            outline: "none",
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
      {error && (
        <p style={{ color: "red", paddingLeft: "10PX" }}>
          New Task Cannot Be Empty
        </p>
      )}
    </Box>
  );
}
