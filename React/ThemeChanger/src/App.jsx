import { createContext, useState } from 'react'
import './App.css'
import ChildA  from './Components/ChildA';
const ThemeContext= createContext();
function App() {
 const [theme,setTheme]=useState('light')
  return (
    <>
      
        <ThemeContext.Provider value={theme}> 
          <ChildA/>
        </ThemeContext.Provider>
      
    </>
  )
}

export default App
export {ThemeContext}