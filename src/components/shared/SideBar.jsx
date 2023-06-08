import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';
import { MENU_NAVIGATION } from '../../constants/menuNavigation';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export const SideBar = ({ Collapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(startLogout());
  };

  const handleMenuClick = (key) => {
    switch (key) {
      case 'home':
        navigate('/');
        break;
      case 'monitor':
        navigate('/about');
        break;
      case 'exit':
        onLogout();
        break;
      default:
        break;
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={Collapsed}>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={MENU_NAVIGATION || []}
        onClick={({ key }) => {
          handleMenuClick(key);
          console.log(key);
        }}
      />
    </Sider>
  );
};
