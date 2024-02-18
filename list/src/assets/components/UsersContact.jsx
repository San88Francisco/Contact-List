import User from './User'

const UsersContact = ({usersItems, onClickColorFavorite, onClickDeleteUser, searchValue}) => {
   return (
      <>
         {usersItems
            .filter((obj) => {
               const fullName = (obj.firstName + obj.lastName + obj.email + obj.gender + obj.status).toLowerCase()
               return fullName.includes(searchValue.toLowerCase())
            })
            .map((contact) => (
               <User
                  onClickDeleteUser={onClickDeleteUser}
                  onClickColorFavorite={onClickColorFavorite}
                  usersItems={usersItems}
                  key={contact.id}
                  {...contact}
               />
            ))}
      </>
   )
}

export default UsersContact
