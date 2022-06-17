import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CurrencySelector from "@/components/CurrencySelector";
import Link from "next/link";
import ImgLogo from "@/public/logo.png";
import Image from "next/image";
import { LogoWrapper, LogoImageWrapper } from "./styled";

export default function Index() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <LogoWrapper>
            <Link href="/">
              <LogoImageWrapper>
                <Image
                  src={ImgLogo}
                  alt="logo"
                  width="118px"
                  height="50"
                />
              </LogoImageWrapper>
            </Link>
          </LogoWrapper>
          <CurrencySelector />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
