import {useEffect, useState} from 'react'
import User from './User'
const UsersContact = ({itemsPages, filterPages}) => {
   const itemsPagsFinaly = filterPages.length > 0 ? filterPages : itemsPages
   return (
      <>
         {itemsPagsFinaly.map((contact) => (
            <User key={contact.id} {...contact} />
         ))}
      </>
   )
}

export default UsersContact
