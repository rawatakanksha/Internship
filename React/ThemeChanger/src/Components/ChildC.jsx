import React, { useContext } from 'react'
import { ThemeContext } from '../App'
function ChildC() {
    const theme= useContext(ThemeContext)
  return (
    <div>
       Data:{theme}
    </div>
  )
}

export default ChildC