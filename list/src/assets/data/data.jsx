import {useState} from 'react'

const useDataItems = () => {
   const [usersItems, setUsersItems] = useState([])
   return [usersItems, setUsersItems]
}
export default useDataItems
