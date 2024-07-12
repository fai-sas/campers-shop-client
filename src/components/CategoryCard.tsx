import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category}`} className='block mx-auto mb-4'>
      <div className='max-w-sm overflow-hidden rounded shadow-lg'>
        <img
          className='w-full h-auto'
          src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
