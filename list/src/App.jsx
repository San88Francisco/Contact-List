import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './assets/pages/home'
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'

import Header from './assets/components/Header'

function App() {
   const [usersItems, setUsersItems] = useState([
      {
         id: 'b866d822-17be-4228-9b4c-0206d6fc5346',
         firstName: 'Anna',
         lastName: 'Zelenska',
         phone: '+48576385840',
         inst: 'verbytskiy_vv',
         email: 'zelenskaAnna@gmail.com',
         avatarLink: 'https://i.pinimg.com/originals/20/0e/2f/200e2f27ba370358ade57f9ae0c59acb.jpg',
         gender: 'women',
         status: 'friend',
         favorite: false,
      },
   ])
   const handleAddContact = (addContact) => {
      setUsersItems((prevUser) => [...prevUser, addContact])
      console.log(usersItems)
   }

   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/contact-list' element={<Contact usersItems={usersItems} />} />
               <Route path='/add-contact' element={<AddContact setUsersItems={handleAddContact} />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
