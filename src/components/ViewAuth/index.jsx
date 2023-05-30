import {useSelector} from "react-redux";
import './viewauth.css'
export const ViewAuth = () => {

    const { displayName } = useSelector( state => state.auth );

    return (
        <div className={'view-auth'}>
            <h3> Bienvenido, {displayName} </h3>
        </div>
    );
};