import { createSlice } from "@reduxjs/toolkit"
import { fetchData, deleteData, addData, favoriteData, infoUserData } from "../operation/operation"

const handlePending = (state) => {
   state.isLoading = true
}
const handleRejected = (state, action) => {
   state.isLoading = false
   state.error = action.payload
}
const handleFulfilled = (state, action) => {
   state.isLoading = false
   state.items = action.payload.data
   const allItems = state.items
   allItems.sort((a, b) => a.firstName.localeCompare(b.firstName));
}
const handleFulfilledDelete = (state, action) => {
   const deleteId = action.payload.id
   state.isLoading = false
   const updatedUsers = state.items.filter((item) => item.id !== deleteId)
   state.items = updatedUsers
}
const handleFulfilledAdd = (state, action) => {
   const newId = action.payload.data.obj
   state.isLoading = false

   state.items = [...state.items, newId]
}


const initialState = {
   page: 1,
   items: [],
   isLoading: false,
   error: null,
   searchValue: '',
   infoUser: null
}

const pageSlice = createSlice({
   name: 'page',
   initialState,
   reducers: {
      setPage(state, action) {
         state.page = action.payload
      },
      setSearchValue(state, action) {
         state.searchValue = action.payload
      }
   },
   extraReducers: (builder) => {
      //* очікує результат запиту
      builder
         .addCase(fetchData.pending, handlePending)
         //* стан помилки
         .addCase(fetchData.rejected, handleRejected)
         //* успішне виконання
         .addCase(fetchData.fulfilled, handleFulfilled)

         .addCase(deleteData.pending, handlePending)
         .addCase(deleteData.rejected, handleRejected)
         .addCase(deleteData.fulfilled, handleFulfilledDelete)

         .addCase(addData.pending, handlePending)
         .addCase(addData.rejected, handleRejected)
         .addCase(addData.fulfilled, handleFulfilledAdd)

         .addCase(favoriteData.pending, handlePending)
         .addCase(favoriteData.rejected, handleRejected)
         .addCase(favoriteData.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = state.items.map((item) => {
               if (item.id === action.payload.data.id) {
                  console.log('✌️action.payload.data --->', action.payload.data);
                  return { ...item, favorite: action.payload.data.favorite }
               }
               return item
            })
         })

         .addCase(infoUserData.pending, handlePending)
         .addCase(infoUserData.rejected, handleRejected)
         .addCase(infoUserData.fulfilled, (state, action) => {
            state.isLoading = false
            state.infoUser = action.payload.data
         })
   },
})

export const { setPage, setSearchValue, setInfoUser } = pageSlice.actions

export default pageSlice.reducer


