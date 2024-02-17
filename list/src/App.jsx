import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './assets/pages/home'
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'

import Header from './assets/components/Header'

import useDataItems from './assets/data/data'

function App() {
   const [usersItems, setUsersItems] = useDataItems()

   const handleAddContact = (addContact) => {
      setUsersItems((prevUser) => [...prevUser, addContact])
      console.log(usersItems)
   }

   const [colorVal] = useState(usersItems)
   const onClickColor = (id, favorite) => {
      if (id) {
         const updatedItems = usersItems.map((item) => {
            if (item.id === id) {
               return {...item, favorite: !favorite}
            }
            return item
         })
         setUsersItems(updatedItems)
         console.log('✌️updatedItems --->', updatedItems)
      }
   }

   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route
                  path='/contact-list'
                  element={<Contact usersItems={usersItems} colorVal={colorVal} onClickColor={onClickColor} />}
               />
               <Route path='/add-contact' element={<AddContact setUsersItems={handleAddContact} />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
