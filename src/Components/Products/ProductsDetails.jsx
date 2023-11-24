import React from 'react'
import { useParams } from 'react-router-dom'
import DescriptionArray from './DescriptionArray'

const ProductsDetails = () => {

    const {productId} = useParams()
    const thisProduct = DescriptionArray.find(prod => prod.id === productId)
  return (
    <>
      <div>
        <h1>{thisProduct.productName}</h1>
        <p>Price ${thisProduct.productPrice}</p>
        <p>{thisProduct.description}</p>
      </div>
    </>
  )
}

export default ProductsDetails
