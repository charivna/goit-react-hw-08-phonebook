// import Layout from './Layout/Layout';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'pages/HomePage';

import Login from 'pages/Login';

import Contacts from 'pages/Contacts';
import Register from 'pages/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <h2>Contacts</h2>
//   <Filter />
//   <ContactList />
// </div>
