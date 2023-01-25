import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../FirebaseConfig/firebase.config';

export const AcceronixContext = createContext();

const AcceronixProvider = ({ children }) => {
  const auth = getAuth(app);
  const contextInfo = {
    name: 'shafin'
  }
  return (
    <div>
      <AcceronixContext.Provider value={contextInfo}>
        {children}
      </AcceronixContext.Provider>
    </div>
  );
};

export default AcceronixProvider;