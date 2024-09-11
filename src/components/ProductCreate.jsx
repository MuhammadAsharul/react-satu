/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'

export const ProductCreate = ({onCreateProduct}) => {
    const initialState = {
        nama: '',
        deskripsi: '',
        imageURL:''
    }
    const [formData, setFormData] = useState(initialState);
    const [showForm, setShowForm] = useState(false) 
    const {nama, deskripsi, imageURL} = formData
    const handleShow = ()=>{ 
        setShowForm(!showForm)
    }
const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(formData);
    onCreateProduct(formData)
    setFormData(initialState)
}

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
  return (
    <div className='product-create'>
        <div className="toggle-add">
            <button className='edit-input-submit add-toggle' onClick={handleShow}>{showForm? "Close Form" :"Add Product" }</button>
        </div>
        {showForm && <form className='form' onSubmit={handleSubmit}>
            <div className="form-add-title">Add Product</div>
            <div className="form-group">
                <input type="text" className='add-input-text' name='nama' placeholder='Nama Product' value={nama} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" className='add-input-text' name='deskripsi' placeholder='Deskripsi Product' value={deskripsi}  onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" className='add-input-text' name='imageURL' placeholder='Image Product' value={imageURL} onChange={handleChange} />
            </div>
            <input type="submit" className='edit-input-submit add' />
        </form>}
    </div>
  )
}
