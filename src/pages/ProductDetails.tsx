import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '../redux/features/product/productApi'
import { Button } from 'antd'

const ProductDetails = () => {
  const { productId } = useParams()
  const { data, isLoading, isError } = useGetSingleProductQuery(productId)
  const product = data?.data

  return (
    <main>
      <section className='grid grid-cols-1 md:grid-cols-2'>
        {/* image */}
        <article>
          <img src={product?.image} alt={product?.name} />
        </article>
        {/* details */}
        <article>
          <h3>{product?.category}</h3>
          <h2>{product?.name}</h2>
          <h3>{product?.ratings}</h3>
          <h3>{product?.description}</h3>
          <p>${product?.price}</p>
          <h3>{product?.stock}</h3>
          <Button htmlType='submit'>Add To Cart</Button>
        </article>
      </section>
    </main>
  )
}

export default ProductDetails
