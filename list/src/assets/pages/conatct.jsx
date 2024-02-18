import UsersContact from '../components/UsersContact'

const Contact = ({usersItems, onClickColorFavorite, onClickDeleteUser, searchValue, onChangeSearch}) => {
   return (
      <>
         <div className='contact-list'>
            <h1>Contact</h1>
            <div className='aside_contact-list'></div>
            <div className='container-contact'>
               <UsersContact
                  usersItems={usersItems}
                  searchValue={searchValue}
                  onChangeSearch={onChangeSearch}
                  onClickDeleteUser={onClickDeleteUser}
                  onClickColorFavorite={onClickColorFavorite}
               />
            </div>
         </div>
      </>
   )
}

export default Contact
