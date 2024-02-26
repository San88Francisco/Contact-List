import { createSlice } from "@reduxjs/toolkit"
import { fetchData, deleteData, addData, favoriteData } from "../operation/operation"
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
   filterItems: [],
   isLoading: false,
   error: null
}

const pageSlice = createSlice({
   name: 'page',
   initialState,
   reducers: {
      setPage(state, action) {
         state.page = action.payload
      },
      setSearchValue(state, action) {
         const searchValue = action.payload;

         const filterArray = state.items.filter(obj => {
            const fullName = (obj.firstName + obj.lastName + obj.email + obj.gender + obj.status).toLowerCase();
            const includesArray = fullName.includes(searchValue);
            console.log('✌️includesArray --->', includesArray);
            return includesArray;
         });

         state.filterItems = filterArray.length > 0 ? filterArray : [];

      }
   },
   extraReducers: (builder) => {
      //* очікує результат запиту
      builder.addCase(fetchData.pending, handlePending)

         //* стан помилки
         .addCase(fetchData.rejected, handleRejected)

         //* успішне виконання
         .addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload.data
         })

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
                  return { ...item, favorite: action.payload.data.favorite };
               }
               return item;
            });
         });

   }
})

export const { setPage, setSearchValue } = pageSlice.actions

export default pageSlice.reducer


