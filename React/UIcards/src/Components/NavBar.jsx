import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Dashbord from './Dashbord'
import About from './About'
function NavBar() {
  return (
    <div className='flex justify-between'>
        <ul className='my-2 flex  gap-4 justify-evenly items-center  h-16 max-w-[1240px] mx-auto px-4'>
            <li className='p-4
            '>
                <NavLink to="/"
                className={({isActive})=>`
                 hover:text-gray-400 ${isActive?"text-gray-600":"text-gray-950"}`
                }>Home</NavLink>
            </li>
            <li className='p-4'>
                <NavLink to="/about"
                className='hover:text-gray-400'
                >About</NavLink>
            </li>
            <li className='p-4'>
                <NavLink to="/dashboard"
                 className='hover:text-gray-400'
                >Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}


export default NavBar