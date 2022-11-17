import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

const boxSX = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'whitesmoke',
    border: '0',
    boxShadow: 24,
    p: 4,
};


const InfoModal = ({open, setOpen}) => {
    return(
        <div className="info-modal-container">
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>       
                         
                    <Fade in={open}>
                        <Box sx={boxSX}>
                            <Typography id="transition-modal-title" variant="h6" component="h2" >
                                Sorting Tutorial 
                            </Typography>
                            {/* style={{color: "whitesmoke"}} */}
                            <Typography id="transition-modal-description" sx={{mt: 2}}> 
                                Welcome to our sorting visualizer. Click off this to exit this. Otherwise press next to see all the features! 
                            </Typography>
                            
                        </Box>
                    </Fade>

            </Modal>
        </div>
    );
};

export default InfoModal;