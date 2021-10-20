import React from 'react';

import { ChangeStatusModalProvider } from './useChangeStatusModal';
import { ServicesProvider } from './useServices';


const AppProvider = ({ children }) => (
    <ServicesProvider>
      <ChangeStatusModalProvider>
        {children}
      </ChangeStatusModalProvider>
    </ServicesProvider>
);
export default AppProvider;