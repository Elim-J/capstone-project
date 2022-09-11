import React, {useState} from 'react';
import './css/App.css';
import LoginModal from './components/LoginModal';


// https://www.youtube.com/watch?v=d3aI1Dt0Z50 13:48

function App() {
  const [isLoginModalOpen, setLoginModal] = useState(false);

  return (
    <div className="appWrapper">
      <LoginModal show={isLoginModalOpen} setShow={setLoginModal}/>
      <button onClick={() => setLoginModal(true)}>
          Open login modal (put in navbar)
      </button>
      
      <div className='d-flex justify-content-between'>
        <h2>Hello test from the left</h2>
        <h2>Hello2 test from the right</h2>  
      </div>
        
        
    </div>
  );
};
export default App;
