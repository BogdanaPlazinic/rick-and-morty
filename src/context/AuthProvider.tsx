import React, { createContext, ReactNode, useState } from "react";


export const AuthContext = createContext(null);

interface AuthProviderProps {
  children: ReactNode; 
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;