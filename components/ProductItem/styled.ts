import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ProductItemBox = styled(Box)(() => ({
  cursor: "pointer",
  backgroundColor: "#f7f8f9",
  width: 260,
  padding: 20,
  borderRadius: 8,
  margin: "0 auto",
  textAlign: "center",
}));

export const ProductImageWrapper = styled("div")(() => ({
  position: "relative",
  minHeight: 200,
  marginBottom: 8,
}));

export const ProductItemName = styled(Typography)(() => ({
  minHeight: "40px",
  fontWeight: "bold",
}));
