// // AuthContext.jsx
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const login = () => {
//     // Perform login logic here, e.g., calling an API
//     setLoggedIn(true);
//   };

//   const logout = () => {
//     // Perform logout logic here, e.g., clearing local storage
//     setLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ loggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
