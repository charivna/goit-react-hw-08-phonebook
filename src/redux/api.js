import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://6517d5ac582f58d62d3526f0.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      toast.error('Something went wrong. Please try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const BASE_URL = 'https://6517d5ac582f58d62d3526f0.mockapi.io';

// export const fetchContacts = async () => {
//   const data = await fetch(`${BASE_URL}/contacts`);
//   return await data.json();
// };

// export const addContact = async data => {
//   const res = await fetch(`${BASE_URL}/contacts`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   });
//   return await res.json();
// };

// export const deleteContact = async id => {
//   const res = await fetch(`${BASE_URL}/contacts/${id}`, { method: 'DELETE' });
//   return await res.json();
// };
