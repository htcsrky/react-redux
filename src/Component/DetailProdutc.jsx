import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const DetailProdutc = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState()

    useEffect(() => {
        const getSingleProduct = async () => {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProduct(data)
        }
        getSingleProduct()

    }, [id])

    console.log(id)

    return (
        <div>
            <div style={{ margin: '30px' }}>
                <h3>{singleProduct?.data?.title}</h3>
                <img src={singleProduct?.data?.image} alt="" style={{ width: '30px' }} />
            </div>
        </div>
    )
}

export default DetailProdutc
