import React from 'react';

import { ChangeStatusModalProvider } from './changeStatus';
import { ServicesProvider } from './services';
import { AuthProvider } from './auth/';
import { ToastProvider } from './toast/';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ServicesProvider>
        <ChangeStatusModalProvider>
          {children}
        </ChangeStatusModalProvider>
      </ServicesProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;