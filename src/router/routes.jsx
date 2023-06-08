import { Navigate, Route, Routes } from 'react-router-dom';
import { Login, Register, HomeScreen } from '../views/index.jsx';
import { SideBar } from '../components';

export const AppRoutes = () => {
  return (
    <>
    <SideBar Collapsed={false} />
    <Routes>
      <Route path={'/'} element={<HomeScreen />} />

      <Route path={'/monitor'} element={<h1> Hello </h1>} />
      <Route path={'about'} element={<h1>Hello world from about</h1>} />
      <Route path={'monitorear'} element={<h1>Hello world from monitorear</h1>} />
      <Route path={'controlar'} element={<h1>Hello world from controlar</h1>} />
      <Route path={'estadisticas'} element={<h1>Hello world from estadisticas</h1>} />

      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
    </>
  );
};

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={'/login'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
