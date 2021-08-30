import React, { useState } from 'react'
import {Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar'
import Alert from './components/Alert';
import TextForm from './components/TextForm'
import About from './components/About';
import Footer from './components/Footer';

const App = () => {

  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  

  const toggleMode = () => {
    if(darkMode === 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = '#e68a00';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }  
  }


  return (
    <>
    
      <Navbar mode={darkMode} toggleMode={toggleMode}/>
      <Alert alrt={alert}/>

      <Switch>

        <Route exact path="/"> 
          <TextForm showAlrt={showAlert}/> 
        </Route>

        <Route path="/about"> 
          <About/> 
        </Route>
        
      </Switch>

      <Footer/>

    </>
  )
}

export default App;
