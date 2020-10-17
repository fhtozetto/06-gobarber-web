import React from 'react';

import Signin from './pages/Signin';
// import Signup from './pages/Signup';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>

    <GlobalStyle />
  </>
);
export default App;
