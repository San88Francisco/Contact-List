import {Link} from 'react-router-dom'

const User = ({id, favorite, avatarLink, firstName, lastName, status, phone, inst, email, onClickColor}) => {
   return (
      <div className='user-contact' key={id}>
         <div>
            <i
               className='fa-solid fa-star'
               onClick={() => onClickColor(id, favorite)}
               style={{color: favorite ? 'yellow' : 'silver'}}
            ></i>
            <img src={avatarLink} alt='' />
            <div>
               <Link to='/detalyInfo'>
                  <i className='fa-solid fa-pencil'></i>
               </Link>
               <i className='fa-solid fa-trash-can'></i>
            </div>
         </div>
         <div>
            <h2>
               {firstName} {lastName}
            </h2>
            <h3>{status}</h3>
         </div>
         <div>
            <a href={`tel:${phone}`}>
               <i className='fa-solid fa-phone'></i>
            </a>
            <a href={`https://www.instagram.com/${inst}`}>
               <i className='fa-brands fa-instagram'></i>
            </a>
            <a href={`mailto:${email}`}>
               <i className='fa-solid fa-envelope'></i>
            </a>
         </div>
      </div>
   )
}

export default User