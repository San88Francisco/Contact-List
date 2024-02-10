//* Library
//форма
import {Formik, Form, Field, ErrorMessage} from 'formik'
//код
import {v4 as uuidv4} from 'uuid'
//валідація
import * as Yup from 'yup'

//* hooks
import {useNavigate} from 'react-router-dom'

//* components
import InputReg from '../components/InputReg'

const AddContact = ({setUsersItems}) => {
   const initialValues = {
      id: uuidv4(),
      firstName: '',
      lastName: '',
      phone: '',
      inst: '',
      email: '',
      avatarLink: '',
      gender: '',
      status: '',
      favorite: false,
   }

   const validationSchema = Yup.object().shape({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      lastName: Yup.string().required('Inst is required'),
      phone: Yup.number().required('Phone is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      avatarLink: Yup.string().url('Invalid url').required('Avatar Link is required'),
      gender: Yup.string().oneOf(['Men', 'Women'], 'Invalid gender').required('Gender is required'),
      status: Yup.string()
         .oneOf(['Work', 'Family', 'Private', 'Friends'], 'Invalid status')
         .required('Status is required'),
      favorite: Yup.boolean(),
   })

   const navigate = useNavigate()
   const handleSubmit = (values, {setSubmitting}) => {
      setSubmitting(true)
      setUsersItems(values)
      navigate('/contact-list')
   }

   return (
      <div className='add-contact'>
         <h1>add contact</h1>
         <div className='form-container'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
               {({isSubmitting}) => (
                  <Form>
                     <div className='double'>
                        <InputReg type='text' options='firstName' name='firstName' />
                        <InputReg type='text' options='lastName' name='lastName' />
                     </div>
                     <InputReg type='text' options='avatarLink' name='avatarLink' />
                     <InputReg type='text' options='phone' name='phone' />
                     <div className='double'>
                        <InputReg type='email' options='email' name='email' />
                        <InputReg type='text' options='inst' name='inst' />
                     </div>
                     <div className='container-field'>
                        <label htmlFor='gender'>Gender</label>
                        <Field as='select' name='gender'>
                           <option value=''>Choose gender</option>
                           <option value='Men'>Men</option>
                           <option value='Women'>Women</option>
                        </Field>
                        <ErrorMessage name='gender' component='p' className='text-danger' />
                     </div>
                     <div className='container-field'>
                        <label htmlFor='status'>Status</label>
                        <Field as='select' name='status'>
                           <option>Choose status</option>
                           <option value='Work'>Work</option>
                           <option value='Family'>Family</option>
                           <option value='Private'>Private</option>
                           <option value='Friends'>Friends</option>
                        </Field>
                        <ErrorMessage name='status' component='p' className='text-danger' />
                     </div>
                     <div className='checkbox-block'>
                        <InputReg type='checkbox' options='favorite' name='favorite' />
                     </div>{' '}
                     <button type='submit' className='btn btn-dark' disabled={isSubmitting}>
                        Create
                     </button>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   )
}

export default AddContact
