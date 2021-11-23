import React from "react";
import {Dialog,DialogTitle,DialogContent} from '@material-ui/core'



function Machinepopup(props) {

    const {title,children,openPopup,setOpenPopup} = props,

  return (
    <Dialog>
        <DialogTitle>
            Machine
        </DialogTitle>
        <DialogContent>
        </DialogContent>
    </Dialog>
  );
}

export default Machinepopup;