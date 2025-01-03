import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/Slices/AuthSlice.js'
import AddModal from './AddModal.jsx'

export default function Navbar() {
  const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleLogout = () => {
      dispatch(logout())
        navigate('/login')
    }
    const handleModal = () => {
      document.getElementById('addProdModal').showModal()
    }
  return (
    <>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Qualitea</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li onClick={handleModal}><a className="justify-between">Add Products</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}