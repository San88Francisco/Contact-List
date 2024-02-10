import {Link} from 'react-router-dom'

const UsersContact = ({usersItems}) => {
   return (
      <>
         {usersItems.map((contact) => (
            <div className='user-contact' key={contact.id}>
               <div>
                  <i className='fa-solid fa-star'></i>
                  <img src={contact.avatarLink} alt='' />
                  <Link to='/detalyInfo'>
                     <i className='fa-solid fa-pencil'></i>
                  </Link>
               </div>
               <div>
                  <h2>
                     {contact.firstName} {contact.lastName}
                  </h2>
                  <h3>{contact.status}</h3>
               </div>
               <div>
                  <a href={`tel:${contact.phone}`}>
                     <i className='fa-solid fa-phone'></i>
                  </a>
                  <a href={`https://www.instagram.com/${contact.inst}`}>
                     <i className='fa-brands fa-instagram'></i>
                  </a>
                  <a href={`mailto:${contact.email}`}>
                     <i className='fa-solid fa-envelope'></i>
                  </a>
               </div>
            </div>
         ))}
      </>
   )
}

export default UsersContact
