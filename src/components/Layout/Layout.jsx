import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
