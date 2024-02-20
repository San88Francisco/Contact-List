//* libary
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//* pags
import AddContact from './assets/pages/addContact'
import Contact from './assets/pages/conatct'
import NotFound404 from './assets/pages/notFound404'

//* components
import Header from './assets/components/Header'

function App() {
   const [allItems, setallItems] = useState([])
   const [usersItems, setUsersItems] = useState([])
   const [searchValue, setSearchValue] = useState('')
   const [categoryId, setCategoryId] = useState('All')
   const [page, setPage] = useState(1)
   const [isLoading, setIsLoading] = useState(true)

   const all = categoryId && categoryId !== 'All' ? `status=${categoryId}` : ''
   const favorite = categoryId === 'Favorite' ? 'favorite=true' : ''

   useEffect(() => {
      Promise.all([
         fetch(`https://65d1f0ac987977636bfbb181.mockapi.io/Contact?page=${page}&limit=6&${favorite || all}`).then(
            (res) => res.json()
         ),
         fetch(`https://65d1f0ac987977636bfbb181.mockapi.io/Contact`).then((res) => res.json()),
      ])
         .then(([pagedData, allData]) => {
            setUsersItems(pagedData)
            setallItems(allData.length)
            console.log('✌️ Paged Data:', pagedData)
            console.log('✌️ Total items:', allData.length)
         })
         .catch((err) => {
            console.warn(err)
         })
         .finally(() => {
            setIsLoading(false)
         })
   }, [categoryId, page, favorite, all])

   //* - контакт
   const onClickDeleteUser = async (id) => {
      try {
         const response = await fetch(`https://65d1f0ac987977636bfbb181.mockapi.io/Contact/${id}`, {
            method: 'DELETE',
         })

         if (!response.ok) {
            throw new Error('Network response was not ok')
         }

         console.log('Item deleted successfully')

         const updatedUsers = usersItems.filter((item) => item.id !== id)
         setUsersItems(updatedUsers)
      } catch (error) {
         console.error('There was a problem with your fetch operation:', error)
      }
   }

   //* + контакт
   const onAddItem = async (obj) => {
      try {
         const response = await fetch('https://65d1f0ac987977636bfbb181.mockapi.io/Contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
         })

         if (!response.ok) {
            throw new Error('Network response was not ok')
         }

         const data = await response.json()
         console.log('data', data)
         const updatedUsers = [...usersItems]
         updatedUsers.unshift(obj)
         setUsersItems(updatedUsers)
      } catch (error) {
         alert('Помилка при додаванні товару в кошик на сервері')
         console.error('There was a problem with your fetch operation:', error)
      }
   }

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
   const onClickColorFavorite = async (id, favorite) => {
      if (id) {
         try {
            const updatedItems = usersItems.map((item) => {
               if (item.id === id) {
                  return {...item, favorite: !favorite}
               }
               return item
            })

            setUsersItems(updatedItems)

            // Відправка оновлених даних на сервер
            const response = await fetch(`https://65d1f0ac987977636bfbb181.mockapi.io/Contact/${id}`, {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({favorite: !favorite}),
            })

            if (!response.ok) {
               throw new Error('Network response was not ok')
            }

            console.log('Updated favorite status successfully')
         } catch (error) {
            console.error('There was a problem with your fetch operation:', error)
         }
      }
   }

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
                  path='/contact-list'
                  element={
                     <Contact
                        usersItems={usersItems}
                        searchValue={searchValue}
                        onChangeSearch={onChangeSearch}
                        onClickDeleteUser={onClickDeleteUser}
                        onClickColorFavorite={onClickColorFavorite}
                        cats={cats}
                        categoryId={categoryId}
                        setCategoryId={setCategoryId}
                        page={page}
                        setPage={setPage}
                        isLoading={isLoading}
                        allItems={allItems}
                     />
                  }
               />
               <Route
                  path='/add-contact'
                  element={<AddContact setUsersItems={handleAddContact} onAddItem={onAddItem} />}
               />
               <Route path='*' element={<NotFound404 />} />
            </Routes>
         </Router>
      </>
   )
}

export default App
