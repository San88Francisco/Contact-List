import User from './User'
import {useSelector} from 'react-redux'

const UsersContact = ({itemsPages, onClickColorFavorite, onClickDeleteUser, searchValue, onChangeSearch}) => {
   return (
      <>
         {itemsPages
            .filter((obj) => {
               const fullName = (obj.firstName + obj.lastName + obj.email + obj.gender + obj.status).toLowerCase()
               return fullName.includes(searchValue.toLowerCase())
            })
            .map((contact) => (
               <User
                  onClickDeleteUser={onClickDeleteUser}
                  onClickColorFavorite={onClickColorFavorite}
                  key={contact.id}
                  {...contact}
               />
            ))}
      </>
   )
}

export default UsersContact
