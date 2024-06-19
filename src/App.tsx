import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { Route, Routes } from 'react-router-dom';
import { msalConfig } from './config/msalConfig';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import User from './pages/User';

const msalInstance = new PublicClientApplication(msalConfig);

export default function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </MsalProvider>
  );
}
