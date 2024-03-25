import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

ListItem.propTypes = {
  todoContent: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};

export default function ListItem({ id, todoContent, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2px 0px 2px 16px",
          bgcolor: "#ebebeb",
          color: "black",
          borderRadius: "8px",
          fontSize: "18px",
        }}
        elevation={2}
      >
        <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {todoContent}
        </p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px 16px 2px 16px",
            bgcolor: "#ebebeb",
            color: "black",
            gap: "4px",
          }}
        >
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <DeleteIcon sx={{ cursor: "pointer" }} onClick={handleDelete} />
        </Box>
      </Paper>
    </Box>
  );
}
