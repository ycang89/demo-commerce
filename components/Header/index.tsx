import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CurrencySelector from "@/components/CurrencySelector";
import Link from "next/link";

export default function Index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <a style={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography variant="h6" component="div">
                DEMOSTORE
              </Typography>
            </a>
          </Link>
          <CurrencySelector />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
