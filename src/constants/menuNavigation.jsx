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
    getItem('Inicio', '1', <HomeOutlined />),
    getItem('Monitorear', '2', <DashboardOutlined />),
    getItem('Controlar', '3', <ControlOutlined />),
    getItem('Estadisticas', '4', <PieChartOutlined />),

    getItem('Acciones', '5', <PicRightOutlined />, [
        getItem('Nueva evidencia', 'subAction1', <FolderOpenOutlined />),
        getItem('Nueva medición', 'subAction1', <DeploymentUnitOutlined />),
        getItem('Nueva ubicación', 'subAction1', <AimOutlined />),
        getItem('Nuevo mensaje', 'subAction1', <MailOutlined/>),
        getItem('Nuevo usuario', 'subAction1', <UserAddOutlined />),
    ]),
    getItem('Cerrar sesión', '6', <IssuesCloseOutlined />),
];