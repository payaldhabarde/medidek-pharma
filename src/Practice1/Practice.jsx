import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Practice = () => {

  const [productInput, setProductInput] = useState({
    productName:"",
    price:""
  })

  const [productsData, setProductsData] = useState([]);

  const [err, setError] = useState(false)

  const [loading, setLoading] = useState(false)

  const addProduct = (e)=>{
    e.preventDefault();
    if(!productInput.productName || !productInput.price){
      // alert("all field required")
     return setError(true);
    }

    // const response = axios.post('')

    // getAllProducts()
    console.log(productInput)

  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setProductInput({...productInput, [name]:value})
  }

  const getAllProducts = async() =>{
    // const response = axios.get('https://fakestoreapi.com/products').then(res=>res.json())
    // .then(json=>console.log(json))
    setLoading(true)
    try {
      const res = await axios.get('https://fakestoreapi.com/products')
      console.log(res)
      setProductsData(res.data)
    setLoading(false)


    } catch (error) {
    setLoading(false)
      console.log(error)
    }

    // console.log(response);
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <div>
      {/* <form onSubmit={addProduct}>
      <input style={{border:"1px solid blue", padding:"10px"}} type="text" name='productName' onChange={handleChange} />
      <input style={{border:"1px solid blue", padding:"10px"}} type="text" name='price' onChange={handleChange}/>
      {err && <p>Please enter all fields</p>}
      <button type='submit'>Add Product</button>
      </form> */}
{/* <button onClick={getAllProducts}>get products</button> */}

{ loading ? <h5>Loading...</h5> :

productsData.map((product, i)=>(
  <div key={i}>
    <img src={product.image} alt="img" style={{width:"100px", height:"100px"}} />
    <h4 >{product.title}</h4>
  </div>
  
)
      

   
  )}
   </div>
)}

export default Practice
