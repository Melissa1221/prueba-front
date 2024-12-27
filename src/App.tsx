import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MenuPage } from './pages/MenuPage';
import { NewClientPage } from './pages/NewClientPage';
import { ClientListPage } from './pages/ClientListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROUTES } from './shared/utils/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MENU} element={<MenuPage />} />
        <Route path={ROUTES.NEW_CLIENT} element={<NewClientPage />} />
        <Route path={ROUTES.CLIENT_LIST} element={<ClientListPage />} />
        <Route path={ROUTES.SETTINGS} element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
