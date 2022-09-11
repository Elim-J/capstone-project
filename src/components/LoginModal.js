import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../css/LoginModal.css';


const LoginModal = ({show, setShow}) => {  
    const handleClose = () => setShow(false);
  
    return (
        <Modal
            id="loginModal"
            show={show} 
            onHide={handleClose}>
            <Modal.Header className="border-0" closeButton />
            <Modal.Title className="text-center">Sign In</Modal.Title>
            <Form>
                <Modal.Body className="border-0">
                    <Form.Group className="mb-3" controlId="email-address">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="Enter password"
                            required
                            />
                    </Form.Group>
                    <div className="mt-4 mb-3 text-center">
                        <Button type="submit" varient="primary" className="rounded-pill w-75" id="login-btn">
                            Sign In
                        </Button>
                    </div>                        
                </Modal.Body>
            
                <div className="mb-3 d-flex justify-content-around">
                    <a href="#">Create Account</a>
                    <a href="#">Forgot Password?</a>
                </div>
                <Modal.Footer className="border-0">
                    Footer
                </Modal.Footer>
            </Form>
        </Modal>
    );
  }
  
export default LoginModal;

// const LoginModal = ({isVisible, setVisibility}) => {
//     return (
//         <div className="loginModalWrapper">
//             <Modal>

//             </Modal>
//         </div>
//     );
// };

// export default LoginModal;


// return (
//     <div className="loginModalBackground">
//         <div className="loginModalWrapper">
//             <div className="loginModalCloseBtn">
//                 <button onClick={setVisibility}>X</button>
//             </div>
//             <div id="loginModalTitle">
//                 <h2><span>Login</span></h2>
//             </div>
//             <div>hello</div>
//         </div>
//     </div>
    
// );