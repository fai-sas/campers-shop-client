import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category}`} className='block mx-auto mb-4'>
      <div className='max-w-sm overflow-hidden rounded shadow-lg'>
        <img
          className='w-full h-auto'
          src='https://acmartbd.com/wp-content/uploads/2018/05/Samsung_Inverter_Air_Conditioner.jpg'
          alt={category}
        />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{category}</div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
