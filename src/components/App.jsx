// import Layout from './Layout/Layout';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
// import Home from 'pages/HomePage';

// import Login from 'pages/Login';

// import Contacts from 'pages/Contacts';
// import Register from 'pages/Register';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('../pages/HomePage'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
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
