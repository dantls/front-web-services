import React from 'react';

import { ChangeStatusModalProvider } from './useChangeStatusModal';
import { ServicesProvider } from './useServices';
import { AuthProvider } from './auth/';


const AppProvider = ({ children }) => (
  <AuthProvider>
    <ServicesProvider>
      <ChangeStatusModalProvider>
        {children}
      </ChangeStatusModalProvider>
    </ServicesProvider>
  </AuthProvider>
);
export default AppProvider;