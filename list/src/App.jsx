//* libary
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//* pags
import Home from './assets/pages/home'
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'

//* components
import Header from './assets/components/Header'

//* hook
import useDataItems from './assets/data/data'

function App() {
   const [usersItems, setUsersItems] = useDataItems()

   const [searchValue, setSearchValue] = useState('')

   useEffect(() => {
      fetch('https://65d1f0ac987977636bfbb181.mockapi.io/Contact?page=3&limit=3')
         .then((res) => res.json())
         .then((json) => {
            setUsersItems(json)
            console.log('✌️json.usersItems --->', json)
         })
         .catch((err) => {
            console.warn(err)
         })
   })

   const cats = [
      {name: 'All'},
      {name: 'Favorite'},
      {name: 'Work'},
      {name: 'Family'},
      {name: 'Private'},
      {name: 'Friends'},
   ]
   const handleAddContact = (addContact) => {
      setUsersItems((prevUser) => [...prevUser, addContact])
      console.log(usersItems)
   }

   //* зміна кольору
   const onClickColorFavorite = (id, favorite) => {
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

   //* видалення
   const onClickDeleteUser = (id) => {
      if (id) {
         const deleteUser = usersItems.filter((item) => item.id !== id)
         setUsersItems(deleteUser)
         console.log('✌️deleteUser --->', deleteUser)
         return
      }
      return {usersItems}
   }

   //*
   const onChangeSearch = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <>
         <Router>
            <Header searchValue={searchValue} onChangeSearch={onChangeSearch} />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route
                  path='/contact-list'
                  element={
                     <Contact
                        usersItems={usersItems}
                        searchValue={searchValue}
                        onChangeSearch={onChangeSearch}
                        onClickDeleteUser={onClickDeleteUser}
                        onClickColorFavorite={onClickColorFavorite}
                     />
                  }
               />
               <Route path='/add-contact' element={<AddContact setUsersItems={handleAddContact} />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
