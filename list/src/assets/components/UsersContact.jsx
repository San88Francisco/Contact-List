import User from './User'

const UsersContact = ({itemsPages, onClickColorFavorite, searchValue, onChangeSearch}) => {
   return (
      <>
         {itemsPages
            .filter((obj) => {
               const fullName = (obj.firstName + obj.lastName + obj.email + obj.gender + obj.status).toLowerCase()
               return fullName.includes(searchValue.toLowerCase())
            })
            .map((contact) => (
               <User key={contact.id} {...contact} />
            ))}
      </>
   )
}

export default UsersContact
