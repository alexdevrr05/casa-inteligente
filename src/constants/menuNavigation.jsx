import {
    AimOutlined,
    ControlOutlined, DashboardOutlined, DeploymentUnitOutlined,
    FolderOpenOutlined, HomeOutlined, IssuesCloseOutlined,
    MailOutlined,
    PicRightOutlined, PieChartOutlined, UserAddOutlined,
} from "@ant-design/icons";


const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
};


export const MENU_NAVIGATION = [
    getItem('Inicio', 'home', <HomeOutlined />),
    getItem('Monitorear', 'monitor', <DashboardOutlined />),
    getItem('Controlar', 'control', <ControlOutlined />),
    getItem('Estadisticas', 'statics', <PieChartOutlined />),

    getItem('Acciones', '5', <PicRightOutlined />, [
        getItem('Nueva evidencia', 'evidences', <FolderOpenOutlined />),
        getItem('Nueva medición', 'measurements', <DeploymentUnitOutlined />),
        getItem('Nueva ubicación', 'locations', <AimOutlined />),
        getItem('Nuevo mensaje', 'messages', <MailOutlined/>),
        getItem('Nuevo usuario', 'users', <UserAddOutlined />),
    ]),
    getItem('Cerrar sesión', 'exit', <IssuesCloseOutlined />),
];