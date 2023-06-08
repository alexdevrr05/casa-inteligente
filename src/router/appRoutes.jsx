import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Button, Layout, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SideBar } from '../components';
import { ControlScreen, HomeScreen, MonitorScreen, StaticsScreen } from '../views/index';

const { Header, Content } = Layout;
const { Text } = Typography;

export const AppRoutes = () => {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={styles.mainLayout}>
      <SideBar Collapsed={collapsed} />
      <Layout>
        <Header style={{ ...styles.header, background: colorBgContainer }}>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={styles.headerButton}
          />
          <Text style={{ fontSize: '18px' }}> Smart House</Text>
        </Header>
        <Content style={{ ...styles.content, background: colorBgContainer }}>
          <Routes>
            <Route path={'/'} element={ <HomeScreen/> } />

            <Route path={'/monitor'} element={ <MonitorScreen/> } />
            <Route path={'/control'} element={ <ControlScreen/> } />
            <Route path={'/statics'} element={ <StaticsScreen/> } />

            <Route path='/*' element={<Navigate to={'/'} />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const styles = {
  mainLayout: {
    height: '100vh',
  },
  header: {
    padding: 0,
  },
  headerButton: {
    fontSize: '16px',
    width: 64,
    height: 64,
  },
  content: {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
  },
};