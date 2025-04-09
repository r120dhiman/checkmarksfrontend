


export const getUser = () => {
  try {
    const userInfo = localStorage.getItem('Authinfo');
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error('Error parsing user info:', error);
    return null;
  }
};

export const verifyToken = () => {
  try {
    const token = localStorage.getItem('Authinfo');
    if (!token) return null;
    
    // If using JWT, decode the token to get user info
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(window.atob(base64));
    
    return payload;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};