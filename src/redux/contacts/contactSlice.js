import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  handlePending,
  handleGetFulfilled,
  handleRejected,
  handleAddFulfilled,
  handleDeleteFulfilled,
} from './handlers';
import { addContact, deleteContact, fetchContacts } from './api';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, handleGetFulfilled)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactSlice.reducer;

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.items = [action.payload, ...state.items];
//     },

//     deleteContact(state, action) {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
// export const getContacts = state => state.contacts.items;

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// export const persistedReducer = persistReducer(persistConfig, contactsReducer);
