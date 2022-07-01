import React from 'react';

import { ChangeStatusModalProvider } from './changeStatus';
import { ChangeStatusModalProvider2 } from './changeStatus2';
import { MovementsServicesProvider } from './movementsService';
import { PickingsServicesProvider } from './pickingsService';
import { ServicesProvider } from './services';
import { Shipment2ServicesProvider } from './shipment2Service';
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
                <Shipment2ServicesProvider>
                  <ChangeStatusModalProvider>
                    <ChangeStatusModalProvider2>
                      {children}
                    </ChangeStatusModalProvider2>
                  </ChangeStatusModalProvider>
                </Shipment2ServicesProvider>
              </ServicesProvider>
            </PickingsServicesProvider>
            </MovementsServicesProvider>
          </NewServiceModalProvider1>
      </NewServiceModalProvider2>
    </ToastProvider>
  </AuthProvider>
);
export default AppProvider;