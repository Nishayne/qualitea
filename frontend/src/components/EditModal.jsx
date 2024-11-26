import {React,useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {toast} from 'react-hot-toast'

export default function EditModal({item,closeModal,setReload}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const {Auth}=useSelector((state)=>state.auth)
    console.log(Auth)
    console.log('productId',item)

    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
        const response=await axios.put(`http://localhost:8000/product/update/${item._id}`,{title,desc:description,Image_url:imageUrl})
        const data=response.data
        if(response.status==200){
          toast.success(data.message)
          setReload((prev)=> !prev)
          closeModal()
        }
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
    return (
      <>
        <dialog id="editProdModal" className="modal">
          <div className="modal-box w-11/12 max-w-2xl rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">
             Edit Product
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Title</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter title"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Description</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="textarea textarea-bordered w-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter description"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Image URL</span>
                  </label>
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter image URL"
                    required
                  />
                </div>
              </div>
              <div className="modal-action mt-6">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </>
  )
}
