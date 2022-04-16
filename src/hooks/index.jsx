import React from 'react';

import { ChangeStatusModalProvider } from './changeStatus';
import { ServicesProvider } from './services';
import { AuthProvider } from './auth/';
import { ToastProvider } from './toast/';
import { NewServiceModalProvider } from './newService/';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <NewServiceModalProvider>
        <ServicesProvider>
            <ChangeStatusModalProvider>
              {children}
            </ChangeStatusModalProvider>
        </ServicesProvider>
      </NewServiceModalProvider>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;