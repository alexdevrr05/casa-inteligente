import { useState } from 'react';
import { Button, Layout, Menu, theme, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { MENU_NAVIGATION } from "../../constants/menuNavigation.jsx";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export const Base = () => {
    const [ collapsed, setCollapsed ] = useState(false);
    const { token: { colorBgContainer }, } = theme.useToken();

    return (
        <Layout style={styles.mainLayout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={MENU_NAVIGATION || []}
                />
            </Sider>
            <Layout>
                <Header style={{...styles.header, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={styles.headerButton}/>
                    <Text style={{fontSize: '18px'}}>  Smart House</Text>
                </Header>
                <Content style={{...styles.content, background: colorBgContainer}}>
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};


const styles = {
    mainLayout: {
        height: '100vh'
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
    }
}