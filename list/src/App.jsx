//* libary
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//* pags
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'
import DetalyInfo from './assets/pages/detalyInfo'

//* components
import Header from './assets/components/Header'

//* hook
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchData} from './assets/redux/operation/operation'

function App() {
   const page = useSelector((state) => state.pageSlice.page)

   const isLoading = useSelector((state) => state.pageSlice.isLoading)

   const allItems = useSelector((state) => state.pageSlice.filterItems)

   const dispatch = useDispatch()
   // const [page, setPage] = useState(1)
   // const [allItems, setallItems] = useState([])
   // const [isLoading, setIsLoading] = useState(true)
   // const [usersItems, setUsersItems] = useState([])

   // const [searchValue, setSearchValue] = useState('')
   const [categoryId, setCategoryId] = useState('All')

   const all = categoryId && categoryId !== 'All' ? `status=${categoryId}` : ''
   const favorite = categoryId === 'Favorite' ? 'favorite=true' : ''

   useEffect(() => {
      if (page) {
         dispatch(fetchData({page, favorite, all}))
      }
   }, [categoryId, page, favorite, all])

   const carts = [
      {name: 'All'},
      {name: 'Favorite'},
      {name: 'Work'},
      {name: 'Family'},
      {name: 'Private'},
      {name: 'Friends'},
   ]
   // const handleAddContact = (addContact) => {
   //    setUsersItems((prevUser) => [...prevUser, addContact])
   //    console.log(usersItems)
   // }

   //* пошук
   // const onChangeSearch = (event) => {
   //    setSearchValue(event.target.value)
   // }

   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route
                  path='/'
                  element={
                     <Contact
                        carts={carts}
                        categoryId={categoryId}
                        setCategoryId={setCategoryId}
                        isLoading={isLoading}
                        allItems={allItems}
                     />
                  }
               />
               <Route path='/add-contact' element={<AddContact />} />
               <Route path='/detalyInfo' element={<DetalyInfo />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
