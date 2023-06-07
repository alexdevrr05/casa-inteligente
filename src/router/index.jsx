import {Navigate, Route, Routes} from "react-router-dom";
import {AppRoutes, AuthRoutes} from "./routes.jsx";
import {useCheckAuth} from "../hooks/index.js";
import {LoadingOutlined} from '@ant-design/icons';
import Typography from "antd/es/typography/Typography.js";

export const AppRouter = () => {

    const status = useCheckAuth();

    if ( status === 'checking' ) {
        return (
            <>
                <LoadingOutlined style={{fontWeight: 'bold'}}/>
                <Typography.Text> Loading ... </Typography.Text>
            </>
        );
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