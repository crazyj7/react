import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import {Button} from "@mui/material";
import {DialogActions} from "@mui/material";
// 		confirmValue={confirmValue}
//		setConfirmValue={setConfirmValue}

const ConfirmDialog = (props) => {
  const { title, children, open, setOpen, onConfirm, confirmValue } = props;
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setOpen(false)}
        >
          No
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setOpen(false);
            onConfirm(confirmValue);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog ;


