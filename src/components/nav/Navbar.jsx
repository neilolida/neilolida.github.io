import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='flex justify-around h-1/5 py-9'>
        <div className='left text-xl font-bold'>
            <Link to="/">N.</Link>
        </div>

        <div className='rigth'>
            <ul className='flex space-x-5'>
                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/work'>Work</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar