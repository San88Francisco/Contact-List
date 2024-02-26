//* libary
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//* pags
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'

//* components
import Header from './assets/components/Header'

//* hook
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {fetchData} from './assets/redux/operation/operation'

function App() {
   const pageTest = useSelector((state) => state.pageSlice.page)

   const isLoading = useSelector((state) => state.pageSlice.isLoading)

   const allItems = useSelector((state) => state.pageSlice.allItems)

   const dispatch = useDispatch()
   // const [page, setPage] = useState(1)
   // const [allItems, setallItems] = useState([])
   // const [isLoading, setIsLoading] = useState(true)
   // const [usersItems, setUsersItems] = useState([])

   const [searchValue, setSearchValue] = useState('')
   const [categoryId, setCategoryId] = useState('All')

   const all = categoryId && categoryId !== 'All' ? `status=${categoryId}` : ''
   const favorite = categoryId === 'Favorite' ? 'favorite=true' : ''

   useEffect(() => {
      if (pageTest) {
         dispatch(fetchData({pageTest, favorite, all}))
      }
   }, [categoryId, pageTest, favorite, all])

   const cats = [
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
   const onChangeSearch = (event) => {
      setSearchValue(event.target.value)
   }

   return (
      <>
         <Router>
            <Header searchValue={searchValue} onChangeSearch={onChangeSearch} />
            <Routes>
               <Route
                  path='/'
                  element={
                     <Contact
                        searchValue={searchValue}
                        onChangeSearch={onChangeSearch}
                        cats={cats}
                        categoryId={categoryId}
                        setCategoryId={setCategoryId}
                        isLoading={isLoading}
                        allItems={allItems}
                     />
                  }
               />
               <Route path='/add-contact' element={<AddContact />} />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
