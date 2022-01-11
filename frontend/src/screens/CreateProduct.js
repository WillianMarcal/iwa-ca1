import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import {createProduct} from '../actions/productActions'
import {useHistory, useNavigate} from 'react-router-dom'


function CreateProduct() {

    const[name, setName]= useState('')
    const[image, setImage]= useState('')
    const [description, setDescription]= useState('')
    const [category, setCategory]= useState('')
    const [price, setPrice]= useState('')
    const [countInStock, setCountInStock]= useState('')
    const [rating, setRatings]= useState(0)
    const [numReviews, setNumReviews]= useState(0)
    const [brand, setBrand]= useState('')
    const dispatch= useDispatch()
    const history= useHistory()

    const onSubmitNewProduct=(e)=>{
        e.preventDefault()
         const product={
            name,
            price,
            description,
            brand,
            category,
            rating,
            numReviews,
            image,
            countInStock
         }

         dispatch(createProduct(product))

         history.push('/')
         
    }
  return (
    <div className="CreateProduct">
      <Form onSubmit={onSubmitNewProduct} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name"
          onChange={(e)=> setName(e.target.value)} value={name}
          />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter product description"
          onChange={(e)=> setDescription(e.target.value)} value={description}
          />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter product price"
          onChange={(e)=> setPrice(e.target.value)} value={price}
          />  
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>In Stock</Form.Label>
          <Form.Control type="text" placeholder="Enter product quantity left"
          onChange={(e)=> setCountInStock(e.target.value)} value={countInStock}
          />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Enter product brand"
          onChange={(e)=> setBrand(e.target.value)} value={brand}
          />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter product category"
          onChange={(e)=> setCategory(e.target.value)} value={category}
          />  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" placeholder="Enter product Image URL"
          onChange={(e)=> setImage(e.target.value)} value={image}
          />  
        </Form.Group>

       

        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateProduct;
