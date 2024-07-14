export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  export const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; secure; sameSite=None`;
  }
  export const setCookie = (name, value, options = {}) => {
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
    if (options.path) {
      cookieString += `; path=${options.path}`;
    }
    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
    if (options.secure) {
      cookieString += '; secure';
    }
    if (options.sameSite) {
      cookieString += `; samesite=${options.sameSite}`;
    }
  
    document.cookie = cookieString;
  };