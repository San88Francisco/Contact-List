import {Link} from 'react-router-dom'

const Header = ({searchValue, onChangeSearch}) => {
   console.log('✌️searchValue --->', searchValue)
   return (
      <header className='navbar navbar-expand-lg'>
         <div className='container-fluid'>
            <Link to='/' className='navbar-brand' href='#'>
               <h1 className='logo'>Contact list</h1>
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
                     <Link to='/' className='nav-link active text-light' aria-current='page' href='#'>
                        Home
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to='/contact-list' className='nav-link text-light' href='#'>
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
