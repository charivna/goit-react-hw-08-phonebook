import { useAuth } from 'hooks/useAuth';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <StyledLink to="/">PhoneBook</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
