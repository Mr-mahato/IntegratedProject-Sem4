import React from 'react';

export const SessionContext = React.createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = React.useState(
    JSON.parse(localStorage.getItem('session')) || null
  );

  React.useEffect(() => {
    localStorage.setItem('session', JSON.stringify(session));
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};