import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListItem() {
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
          bgcolor: "#DCDCDC",
          color: "black",
          borderRadius: "8px",
          fontSize: "18px",
        }}
        elevation={2}
      >
        <p>This is the first to do rtasj</p>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px 0px 2px 16px",
            bgcolor: "#DCDCDC",
            color: "black",
          }}
        >
          <DeleteIcon />
          <Checkbox />
        </Box>
      </Paper>
    </Box>
  );
}
