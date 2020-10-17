import React from 'react';

import Signin from './pages/Signin';
// import Signup from './pages/Signup';
import GlobalStyle from './styles/global';

import ToastContainer from './toastContainer/index';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);
export default App;
