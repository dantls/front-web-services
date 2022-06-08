import React from 'react';

import { ChangeStatusModalProvider } from './changeStatus';
import { MovementsServicesProvider } from './movementsService';
import { PickingsServicesProvider } from './pickingsService';
import { ServicesProvider } from './services';
import { AuthProvider } from './auth/';
import { ToastProvider } from './toast/';
import { NewServiceModalProvider1 } from './newService1/';
import { NewServiceModalProvider2 } from './newService2/';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <NewServiceModalProvider2>
        <NewServiceModalProvider1>
          <MovementsServicesProvider>
          <PickingsServicesProvider>
              <ServicesProvider>
                  <ChangeStatusModalProvider>
                    {children}
                  </ChangeStatusModalProvider>
              </ServicesProvider>
            </PickingsServicesProvider>
            </MovementsServicesProvider>
          </NewServiceModalProvider1>
      </NewServiceModalProvider2>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;