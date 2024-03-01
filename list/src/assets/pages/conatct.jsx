import UsersContact from '../components/UsersContact'
import Skeleton from '../components/ContentLoader'
import {useSelector, useDispatch} from 'react-redux'
import {setPage} from '../redux/slices/allSciles'
import {useEffect, useState} from 'react'
import { selectItems, selectPage } from '../redux/selectors'

const Contact = ({onClickColorFavorite, cats, categoryId, setCategoryId, isLoading}) => {
   const dispatch = useDispatch()
   const items = useSelector(selectItems)
   const page = useSelector(selectPage)
   const [pagsNum, setPagsNum] = useState(null)
   const [itemsPages, setItemsPages] = useState([])

   const sliceItems = (array, page) => {
      const startIndex = (page - 1) * 6
      const finishIndex = startIndex + 6
      const itemsPerPage = 6
      const totalPages = Math.ceil(array.length / itemsPerPage)
      const arrayTotalPages = [...Array(totalPages)]
      setPagsNum(arrayTotalPages)
      return array.slice(startIndex, finishIndex)
   }

   useEffect(() => {
      if (items.length > 0) {
         setItemsPages(sliceItems(items, page))
      }
   }, [items])
   
   return (
      <>
         <div className='contact-list'>
            <h1>Contact</h1>
            <div className='aside-contact'>
               <ul>
                  <span>filters:</span>
                  {cats.map((obj) => (
                     <li
                        onClick={() => setCategoryId(obj.name)}
                        id={categoryId === obj.name ? 'active-block' : ''}
                        key={obj.name}
                     >
                        {obj.name}
                     </li>
                  ))}
               </ul>
               <ul>
                  {pagsNum?.map((_, index) => (
                     <li
                        key={index + 1}
                        onClick={() => dispatch(setPage(index + 1))}
                        id={page === index + 1 ? 'active-block' : ''}
                     >
                        {index + 1}
                     </li>
                  ))}
               </ul>
            </div>
            <div className='container-contact'>
               {isLoading ? (
                  <div className='skeleton'>
                     <Skeleton />
                     <Skeleton />
                     <Skeleton />
                     <Skeleton />
                     <Skeleton />
                     <Skeleton />
                  </div>
               ) : (
                  <UsersContact
                     onClickColorFavorite={onClickColorFavorite}
                     itemsPages={itemsPages}
                  />
               )}
            </div>
         </div>
      </>
   )
}

export default Contact
