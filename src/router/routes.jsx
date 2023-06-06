import {Navigate, Route, Routes} from "react-router-dom";
import {Login, Register} from "../views/index.jsx";
import HomeScreen from "../views/main/HomeScreen";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomeScreen />}/>

            <Route path='/*' element={ <Navigate to="/" /> }/>
        </Routes>
    );
};

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register />}/>

            <Route path='/*' element={ <Navigate to="/auth/login" /> }/>
        </Routes>
    );
};