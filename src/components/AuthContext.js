// src/components/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("authToken") || null;
  });

  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return authToken ? true : false;
  });

  const login = (token) => {
    setAuthToken(null);
    setUserData(null);
    localStorage.setItem("authToken", token);
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setAuthToken(null);
    setUserData(null);
    setIsAuthenticated(false);
  };

  // Функция для получения данных текущего пользователя
  const fetchUserData = async (token) => {
    try {
      const response = await fetch(
        "https://api.dev.kozhura.school/api/auth/users/me/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        localStorage.setItem("userData", JSON.stringify(data));
      } else {
        console.error("Не удалось получить данные текущего пользователя");
        logout(); // Если токен недействителен, разлогиньтесь
      }
    } catch (error) {
      console.error("Ошибка при запросе данных пользователя:", error);
    }
  };

  useEffect(() => {
    if (authToken && !userData) {
      fetchUserData(authToken);
    }
  }, [authToken, userData]);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userData,
        isAuthenticated,
        login,
        logout,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
