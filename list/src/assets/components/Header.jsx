import {Link} from 'react-router-dom'

const Header = ({searchValue, onChangeSearch}) => {
   return (
      <header className='navbar navbar-expand-lg'>
         <div className='container-fluid'>
            <Link to='/' className='navbar-brand' href='#'>
               <i className='fa-solid fa-address-book'></i>
            </Link>
            <button
               className='navbar-toggler'
               type='button'
               data-bs-toggle='collapse'
               data-bs-target='#navbarSupportedContent'
               aria-controls='navbarSupportedContent'
               aria-expanded='false'
               aria-label='Toggle navigation'
            >
               <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
               <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                     <Link to='/' className='nav-link text-light' href='#'>
                        Contact
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/add-contact' className='nav-link text-light' href='#'>
                        Add contact
                     </Link>
                  </li>
               </ul>
               <form className='d-flex' role='search'>
                  <input
                     value={searchValue}
                     onChange={onChangeSearch}
                     className='form-control me-2'
                     type='search'
                     placeholder='Search'
                     aria-label='Search'
                  />
               </form>
            </div>
         </div>
      </header>
   )
}

export default Header
