export const fetchWithAuth = async (url, options = {}) => {
  const authToken = localStorage.getItem("authToken"); // Или используйте контекст

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (authToken) {
    headers["Authorization"] = `Token ${authToken}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
};
