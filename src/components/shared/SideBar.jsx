import { Layout, Menu } from 'antd';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";
import { MENU_NAVIGATION } from '../../constants/menuNavigation';
import { Navigate } from 'react-router-dom';


const { Sider } = Layout;


export const SideBar = ({ Collapsed }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }


    return (
        <Sider trigger={null} collapsible collapsed={Collapsed}>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={MENU_NAVIGATION || [] }
                onClick={(item) => {
                    console.log(item);
                    switch (item.key) {
                        case 'home': 
                            <Navigate to={'/'}/> 
                            break;
                        case 'monitor': break;
                        case 'statics': break;
                        case 'evidences': break;
                        case 'measurements': break;
                        case 'locations': break;
                        case 'messages': break;
                        case 'users': break;

                        case 'exit': 
                            onLogout();
                            break;

                        default:
                            break;
                    }
                }}
            />
        </Sider>
    );
};