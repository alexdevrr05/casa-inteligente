import {Navigate, Route, Routes} from "react-router-dom";
import {Login, Register, HomeScreen} from "../views/index.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomeScreen />}/>

            <Route path={'/monitor'} element={ <h1> Hello </h1> }/>
            {/* <Route path={'/statics'} element={<HomeScreen />}/> */}
            {/* <Route path={'/evidences'} element={<HomeScreen />}/> */}
            {/* <Route path={'/measurements'} element={<HomeScreen />}/> */}
            {/* <Route path={'/locations'} element={<HomeScreen />}/> */}
            {/* <Route path={'/messages'} element={<HomeScreen />}/> */}
            {/* <Route path={'/users'} element={<HomeScreen />}/> */}

            <Route path='/*' element={ <Navigate to={"/"} /> }/>

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