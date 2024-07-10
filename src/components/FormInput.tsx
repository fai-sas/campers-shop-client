import { Input } from 'antd'
import { Controller } from 'react-hook-form'

type TInputProps = {
  type: string
  name: string
  label?: string
}

// const FormInput = ({ type, name, label }: TInputProps) => {
//   return (
//     <div style={{ marginBottom: '20px' }}>
//       {label ? label : null}
//       <Controller
//         name={name}
//         render={({ field }) => <Input {...field} type={type} id={name} />}
//       />
//     </div>
//   )
// }

const FormInput = ({ type, name, label }: TInputProps) => {
  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        )}
      />
    </div>
  )
}

export default FormInput
