import Form from './components/Form.js'
import React from "react"

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  
  // function chooseMode(){
  //   setDarkMode(prevMode => !prevMode)
  // }

  return (
    <div>
      <Form 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
