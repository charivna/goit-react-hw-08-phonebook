import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">PhoneBook</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </nav>
  );
};
