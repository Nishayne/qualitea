import React,{useEffect, useState} from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import AddModal from '../components/AddModal'
import EditModal from '../components/EditModal'
import DeleteModal from '../components/DeleteModal'

export default function Home(){
  const navigate=useNavigate()
  const [prodId,setProdId]=useState('')
  const [delId,setDelId]=useState('')
  const [show,setShow]=useState(false)
  const [products,setProducts]=useState([])
  const [reload,setReload]=useState(false)
  const {Auth}=useSelector((state)=>state.auth)
  console.log("User",Auth)
  
  useEffect(()=>{
    if(!Auth){
      navigate('/login')
    }
  },[Auth])

  useEffect(()=>{
    if(Auth){
      GetProducts()
    }
  },[reload])

  const GetProducts=async()=>{
    try{
      const response=await axios.get(`http://localhost:8000/product/getProds/${Auth._id}`)
      const data=response.data
      setProducts(data.product)
      console.log("Products",data)
    }catch(error){
      console.log(error)
    }
  }
  const closeModal=() => {
    document.getElementById('addProdModal').close()
  }

  const handleEdit=(item) => {
    setProdId(item)
    document.getElementById('editProdModal').showModal()
  }
  const closeEditModal=() => {
    document.getElementById('editProdModal').close()
  }
  const handleDel=async(id)=>{
    setDelId(id)
    setShow(true)
  }
  const handleDelApi=async()=>{
    setShow(true)
    try{
      const response=await axios.delete(`http://localhost:8000/product/delete/${delId}`)
      const data=response.data
      console.log('delete',data)
      if(response.status==200){
          toast.success(data.message)
          setShow(false)
          setReload((prev)=>!prev)
        }
        console.log(data)

    }
    catch(error){
      console.log(error)
    }
  }
  return(
    <>
    <Navbar/>
    <AddModal closeModal={closeModal} setReload={setReload}/>
    <EditModal item={prodId} closeModal={closeEditModal} setReload={setReload}/>
    <DeleteModal setShow={setShow} show={show} handleDel={handleDelApi} />
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold text-gray-800'>
            Welcome to Qualitea
        </h1>
        <p className='text-gray-800'>Explore the different options below</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {products.length===0 ?(
      <h1 className='text-2xl text-gray-800 text-center'>No Products Available</h1>
    ):("")}
    
    {products.map((item)=>{
        return <Card items={item} handleEdit={()=>handleEdit(item)} 
        handleDel={()=>handleDel(item._id)}/>
    })}
    </div>
    </div>
    </>
  )
}
