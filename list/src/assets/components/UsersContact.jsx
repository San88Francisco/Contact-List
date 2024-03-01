import User from './User'
import { useSelector } from 'react-redux'

const UsersContact = ({ itemsPages }) => {
   const searchValue = useSelector((state) => state.pageSlice.searchValue)

   return (
      <>
         {itemsPages.filter((obj) => {
            const fullName = (obj.firstName + obj.lastName + obj.email + obj.gender + obj.status).toLowerCase()
            const includesArray = fullName.includes(searchValue)
            return includesArray
         }).map((contact) => (
            <User key={contact.id} {...contact} />
         ))}
      </>
   )
}

export default UsersContact
