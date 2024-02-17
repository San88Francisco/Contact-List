import {useState} from 'react'

const useDataItems = () => {
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
         favorite: true,
      },
      {
         id: 'b866d822-17be-4228',
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
      {
         id: 'b866d822-17be-4228-9b4c',
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
   return [usersItems, setUsersItems]
}
export default useDataItems
