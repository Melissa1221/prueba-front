import { IconType } from 'react-icons';
import { AiOutlineHome, AiOutlineSetting, AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';


export const ROUTES = {
  LOGIN: '/',
  MENU: '/menu',
  NEW_CLIENT: '/nuevo-cliente',
  CLIENT_LIST: '/consultar-clientes',
  SETTINGS: '/configuracion',
} as const;

// Type for route paths
export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

// Navigation config type
interface RouteConfig {
  path: RoutePath;
  label: string;
  Icon: IconType;
  showInNav?: boolean;
}

// Navigation routes configuration
export const NAV_ROUTES: RouteConfig[] = [
  {
    path: ROUTES.MENU,
    label: 'Inicio',
    Icon: AiOutlineHome,            
    showInNav: true
  },
  {
    path: ROUTES.NEW_CLIENT,
    label: 'Nuevo Cliente',
    Icon: AiOutlineUserAdd,
    showInNav: true
  },
  {
    path: ROUTES.CLIENT_LIST,
    label: 'Consultar Clientes',
    Icon: AiOutlineTeam,
    showInNav: true
  },
  {
    path: ROUTES.SETTINGS,
    label: 'Configuración',
    Icon: AiOutlineSetting,
    showInNav: true
  }
];

// Helper function to get route config by path
export const getRouteConfig = (path: RoutePath): RouteConfig | undefined => {
  return NAV_ROUTES.find(route => route.path === path);
};

// Helper to check if a route exists
export const isValidRoute = (path: string): path is RoutePath => {
  return Object.values(ROUTES).includes(path as RoutePath);
};
