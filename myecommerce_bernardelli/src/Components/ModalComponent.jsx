import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

export default function ModalComponent({ content, onChange }) {
  const [showRegisterModal, setShowRegisterModal] = useState(true);
  const handleClose = () => {
    setShowRegisterModal(false);
    onChange(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #FFC008",
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showRegisterModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showRegisterModal}>
          <Box sx={style}>{content}</Box>
        </Fade>
      </Modal>
    </>
  );
}
