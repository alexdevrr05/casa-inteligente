import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MENU_NAVIGATION } from '../../constants/menuNavigation';
import { IssuesCloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';

const { Sider } = Layout;

export const SideBar = ({ Collapsed }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Sider trigger={null} collapsible collapsed={Collapsed}>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        {MENU_NAVIGATION.map((menuItem) => (
          <Menu.Item key={menuItem.key} icon={menuItem.icon}>
            <Link to={menuItem.path}>{menuItem.label}</Link>
          </Menu.Item>
        ))}
        <Menu.Item key='exit' icon={<IssuesCloseOutlined />} onClick={onLogout}>
          Cerrar sesión
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
