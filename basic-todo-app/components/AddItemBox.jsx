import { TextField, Button, Box } from "@mui/material";
import React from "react";

export default function AddItemBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px",
        marginBottom: "32px",
        color: "black",
        borderRadius: "32px",
        width: "80%",
      }}
    >
      <TextField
        sx={{ flex: "1", border: "none" }}
        id="filled-basic"
        label="New Todo ..."
        variant="filled"
      />
      <Button
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
