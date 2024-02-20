import UsersContact from '../components/UsersContact'

const Contact = ({
   usersItems,
   onClickColorFavorite,
   onClickDeleteUser,
   searchValue,
   onChangeSearch,
   cats,
   categoryId,
   setCategoryId,
   page,
   setPage,
}) => {
   return (
      <>
         <div className='contact-list'>
            <h1>Contact</h1>
            <div className='aside-contact'>
               <ul>
                  <span>filters:</span>
                  {cats.map((obj) => (
                     <li
                        onClick={() => setCategoryId(obj.name)}
                        id={categoryId === obj.name ? 'active-block' : ''}
                        key={obj.name}
                     >
                        {obj.name}
                     </li>
                  ))}
               </ul>
               <ul>
                  {[...Array(5)].map((_, index) => (
                     <li onClick={() => setPage(index + 1)} id={page === index + 1 ? 'active-block' : ''}>
                        {index + 1}
                     </li>
                  ))}
               </ul>
            </div>
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
