import {Field, ErrorMessage} from 'formik'

const InputStatus = ({label, name, options}) => {
   return (
      <div className='container-field'>
         <label htmlFor={name}>{label}</label>
         <Field as='select' name={label}>
            <option>Choose {label.toLowerCase()}</option>
            {options.map((option) => (
               <option key={option} value={option}>
                  {option}
               </option>
            ))}
         </Field>
         <ErrorMessage name={name} component='p' className='text-danger' />
      </div>
   )
}

export default InputStatus
