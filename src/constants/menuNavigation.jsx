import {
  ControlOutlined,
  DashboardOutlined,
  //     AimOutlined,
  //   DeploymentUnitOutlined,
  //   FolderOpenOutlined,
  //   MailOutlined,
  //   PicRightOutlined,
  //   UserAddOutlined,
  HomeOutlined,
  //   IssuesCloseOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

export const MENU_NAVIGATION = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Inicio',
    type: 'single',
    path: '/about',
  },
  {
    key: 'monitor',
    icon: <DashboardOutlined />,
    label: 'Monitorear',
    type: 'single',
    path: '/about',
  },
  {
    key: 'control',
    icon: <ControlOutlined />,
    label: 'Controlar',
    type: 'single',
    path: '/about',
  },
  {
    key: 'statics',
    icon: <PieChartOutlined />,
    label: 'Estadísticas',
    type: 'single',
    path: '/about',
  },

  // Maybe esto lo podemos mover fijo con la opc de cerrar sesión (SideBar.jsx)
  //   {
  //     key: 'actions',
  //     icon: <PicRightOutlined />,
  //     label: 'Acciones',
  //     type: 'nested',
  //     path: '/about',
  //     items: [
  //       {
  //         key: 'evidences',
  //         icon: <FolderOpenOutlined />,
  //         label: 'Nueva evidencia',
  //         type: 'single',
  //         path: '/about',
  //       },
  //       {
  //         key: 'measurements',
  //         icon: <DeploymentUnitOutlined />,
  //         label: 'Nueva medición',
  //         type: 'single',
  //         path: '/about',
  //       },
  //       {
  //         key: 'locations',
  //         icon: <AimOutlined />,
  //         label: 'Nueva ubicación',
  //         type: 'single',
  //         path: '/about',
  //       },
  //       {
  //         key: 'messages',
  //         icon: <MailOutlined />,
  //         label: 'Nuevo mensaje',
  //         type: 'single',
  //         path: '/about',
  //       },
  //       {
  //         key: 'users',
  //         icon: <UserAddOutlined />,
  //         label: 'Nuevo usuario',
  //         type: 'single',
  //         path: '/about',
  //       },
  //     ],
  //   },
  //   {
  //     key: 'exit',
  //     icon: <IssuesCloseOutlined />,
  //     label: 'Cerrar sesión',
  //     type: 'single',
  //     path: '/about',
  //   },
];
