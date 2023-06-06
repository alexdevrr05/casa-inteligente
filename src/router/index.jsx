import {Navigate, Route, Routes} from "react-router-dom";
import {AppRoutes, AuthRoutes} from "./routes.jsx";
import {useCheckAuth} from "../hooks/index.js";

export const AppRouter = () => {

    const status = useCheckAuth();

    if ( status === 'checking' ) {
        return <h1>Loading...</h1>;
      }

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path={'/*'} element={ <AppRoutes/> }/>
                    : <Route path={'/auth/*'} element={ <AuthRoutes/> }/>
            }

            <Route path={'/*'} element={<Navigate to={'/auth/login'}/>}/>

        </Routes>
    );
};