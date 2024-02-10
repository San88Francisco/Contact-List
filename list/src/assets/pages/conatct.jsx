import UsersContact from '../components/UsersContact'

const Contact = ({usersItems}) => {
   return (
      <>
         <div className='contact-list'>
            <h1>Contact</h1>
            <div className='container-contact'>
               <UsersContact usersItems={usersItems} />
            </div>
         </div>
      </>
   )
}

export default Contact
