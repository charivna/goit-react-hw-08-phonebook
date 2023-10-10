import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">PhoneBook</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
