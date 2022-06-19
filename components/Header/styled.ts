import { styled } from "@mui/material/styles";

export const LogoWrapper = styled("div")((props) => ({
  flexGrow: 1,
  textAlign: "left",
  [props.theme.breakpoints.up("md")]: {
    textAlign: "center",
    paddingLeft: 130
  }
}));

export const LogoImageWrapper = styled("a")(() => ({
  cursor: 'pointer',
}));
