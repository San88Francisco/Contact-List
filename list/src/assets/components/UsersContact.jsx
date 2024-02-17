import User from './User'

const UsersContact = ({usersItems, onClickColor}) => {
   return (
      <>
         {usersItems.map((contact) => (
            <User onClickColor={onClickColor} usersItems={usersItems} key={contact.id} {...contact} />
         ))}
      </>
   )
}

export default UsersContact
