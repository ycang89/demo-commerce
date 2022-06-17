import * as React from "react";
import Header from "@/components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function Index({ children }) {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container sx={{ marginTop: 10, marginBottom: 10 }} maxWidth="md">{children}</Container>
    </>
  );
}
