import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { store } from "@/services/redux/store";
import { Provider as ReduxProdvider } from "react-redux";
import Notification from "@/components/Notification";
import eventEmitter from "@/services/eventEmitter";
import { Provider as RollbarProvider } from "@rollbar/react";
import rollbarConfig from '@/configs/rollbar';

eventEmitter.getInstance();

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>DemoStore</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RollbarProvider config={rollbarConfig}>
        <ReduxProdvider store={store}>
          <ThemeProvider theme={theme}>
            <Notification />
            <Component {...pageProps} />
          </ThemeProvider>
        </ReduxProdvider>
      </RollbarProvider>
    </>
  );
}

export default MyApp;
