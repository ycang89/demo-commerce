import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import eventEmitter, { EVENTS } from "@/services/eventEmitter";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Index() {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<"success" | "error" | "info">(
    "info"
  );
  const emitter = eventEmitter.getInstance();

  const closeSnackbar = () => {
    setOpen(false);
    setMessage("");
    setSeverity("info");
  };

  const openSnackbar = (msg: string, type: "success" | "error" | "info") => {
    setOpen(true);
    setMessage(msg);
    setSeverity(type);
  };

  useEffect(() => {
    emitter.on(EVENTS.TOAST_SUCCESS, (msg: string) => {
      if (msg) {
        openSnackbar(msg, "success");
      } else {
        closeSnackbar();
      }
    });
    emitter.on(EVENTS.TOAST_ERROR, (msg: string) => {
      if (msg) {
        openSnackbar(msg, "error");
      } else {
        closeSnackbar();
      }
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }} data-cy="notification">
        {message}
      </Alert>
    </Snackbar>
  );
}
