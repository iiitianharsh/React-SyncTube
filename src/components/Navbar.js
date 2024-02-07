import React from 'react'
import Sync from "../assets/Sync.png"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {

  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-between fixed z-10 items-center  bg-black opacity-100 w-[95vw] py-4 mx-auto '>
            <Link to="/">
               <img src={Sync} alt='Logo' className='ml-12'  width={160} height={32} loading="lazy" />   
 
           </Link>
          <nav>
               <ul className='flex gap-3 gap-x-6 text-richblack-100 '>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/contact" >Contact</Link>
                    </li>
                
                </ul>
          
          </nav>

          <div className='flex items-center gap-x-6  ' >
             { !isLoggedIn &&
               <Link to="/login">
                <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] border border-richblack-700   '>
                   Login
                </button>
               </Link>

             }
             { !isLoggedIn &&
               <Link to="/signup">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700   ' >
                   SignUp
                </button>
               </Link>
             }
             { isLoggedIn &&
               <Link to="/home">
                <button  
                className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] border border-richblack-700   '
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out ");
                } }>
                   LogOut
                </button>
               </Link>
 
             }
             { isLoggedIn &&
               <Link to="/dashboard">
                <button className='bg-richblack-800 text-white py-[8px] px-[12px] border border-richblack-700   ' >
                   Dashboard
                </button>
               </Link>

             }
          
          </div>
          


    </div>
  )
}
 
export default Navbar
