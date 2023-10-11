// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';
import { Username, Wrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};

// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
//     </div>
//   );
// };
