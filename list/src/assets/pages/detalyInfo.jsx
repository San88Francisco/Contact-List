import React from 'react'
import {useSelector} from 'react-redux'
import {selectInfoUser} from '../redux/selectors'

const detalyInfo = () => {
   const infoUser = useSelector(selectInfoUser)
   if (infoUser) {
      console.log('✌️infoUser --->', infoUser)
   }

   return (
      <div className='detaly-info'>
         {infoUser ? (
            <div>
               <img src={infoUser.avatarLink} alt='' />
               <div></div>
            </div>
         ) : (
            <div>hello</div>
         )}
      </div>
   )
}

export default detalyInfo

// id: uuidv4(),
// firstName: '',
// lastName: '',
// phone: '',
// inst: '',
// email: '',
// avatarLink: '',
// gender: '',
// status: '',
// favorite: false,
