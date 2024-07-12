export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  export const deleteCookie = (name) => {
    document.cookie = `${name}=; path=/; secure; sameSite=None`;
  }
  
  export const setCookie = (name, value) => {
    let cookieString = `${name}=${value}; secure; sameSite=None;`;

    document.cookie = cookieString;
  }
  