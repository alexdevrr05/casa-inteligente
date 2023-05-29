import {Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {Evidences} from "../Evidences";
import {Messages} from "../Messages";
import {Locations} from "../Locations";
import {Measurement} from "../Measurement";
import {Users} from "../Users";

export const SmartHouseRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={ <Home /> }/>
            <Route path={'/controlar'} element={ <Home /> }/>
            <Route path={'/monitorear'} element={ <Home /> }/>
            <Route path={'/estadisticas'} element={ <Home /> }/>

            <Route path={'/usuarios'} element={ <Users /> }/>
            <Route path={'/mediciones'} element={ <Measurement /> }/>
            <Route path={'/ubicaciones'} element={ <Locations /> }/>
            <Route path={'/mensajes'} element={ <Messages /> }/>
            <Route path={'/evidencias'} element={ <Evidences /> }/>
        </Routes>
    );
};