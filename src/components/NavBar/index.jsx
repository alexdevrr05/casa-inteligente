import './navbar.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startLogout} from "../../store/auth";
import {IconButton} from "@mui/material";
import {LogoutOutlined} from "@mui/icons-material";

export const NavBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    };

    const CustomLink = ({url, label}) => {
        return (
            <li>
                <NavLink to={url}>
                    { label }
                </NavLink>
            </li>
        );
    }

    return (
        <header className={'navbar'}>
            <div className={'logo'}>
                <h4>
                    <NavLink to={'/'}>
                        Casa inteligente
                    </NavLink>
                </h4>
            </div>
            <nav>
                <input type={'checkbox'} id={'check'}/>
                <label htmlFor={'check'} className={'btn-check'}>
                    <i className="bi bi-list"></i>
                </label>
                <ul className={'menu'}>
                    <CustomLink url={'/controlar'} label={'Controlar'}/>
                    <CustomLink url={'/Monitorear'} label={'Monitorear'}/>
                    <CustomLink url={'/Estadisticas'} label={'Estadisticas'}/>
                    <li>
                        <a> Acciones </a>
                        <ul className={'submenu'}>
                            <CustomLink url={'/evidencias'} label={'Evidencias'}/>
                            <CustomLink url={'/mensajes'} label={'Mensajes'}/>
                            <CustomLink url={'/ubicaciones'} label={'Ubicaciones'}/>
                            <CustomLink url={'/mediciones'} label={'Mediciones'}/>
                            <CustomLink url={'/usuarios'} label={'Usuarios'}/>
                        </ul>
                    </li>
                    <li>
                        <IconButton
                            color='error'
                            onClick={ onLogout }>
                            <LogoutOutlined />
                        </IconButton>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


