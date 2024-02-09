import {Field, ErrorMessage} from 'formik'

const InputReg = ({type, options, name}) => {
   return (
      <div className='container-field'>
         <label htmlFor={options}>{name}</label>
         <Field type={type} name={options} id={options} />
         <ErrorMessage name={options} component='p' className='text-danger' />
      </div>
   )
}

export default InputReg
