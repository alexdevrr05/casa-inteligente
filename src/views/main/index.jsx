import { useState } from 'react';
import { Button, Layout, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { SideBar } from '../../components/index';
import { useSelector } from 'react-redux';

const { Header, Content } = Layout;
const { Text } = Typography;

export const HomeScreen = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { displayName } = useSelector((state) => state.auth);

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
          Welcome {displayName || ''} 🤩
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
