import React from "react";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "skyblue",
        height: "100vh",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          p: "0px",
          m: "0px",
          width: "50%",
          borderRadius: "16px",
        }}
      >
        <h1>Hello</h1>
      </Box>
    </Box>
  );
}
