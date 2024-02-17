import UsersContact from '../components/UsersContact'

const Contact = ({usersItems, colorVal, onClickColor}) => {
   return (
      <>
         <div className='contact-list'>
            <h1>Contact</h1>
            <div className='container-contact'>
               <UsersContact onClickColor={onClickColor} usersItems={usersItems} />
            </div>
         </div>
      </>
   )
}

export default Contact
