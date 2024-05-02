import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../redux/features/product/productSlice"
import { useNavigate } from "react-router-dom"

const ProductListRedux = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getProduct())
    }, [])

    console.log(products)

    return (
        <div>
            {
                products.map((c, i) => (
                    <div key={i}>
                        {c.title}
                        <div>
                            <img style={{ width: "80px" }} src={c.image} alt="" onClick={() => navigate(`/detail/${c.id}`)} />

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductListRedux
