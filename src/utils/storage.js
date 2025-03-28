const CACHE_PREFIX = 'ft_';

export const getLocalStorage = (key) => {
  try {
    const item = JSON.parse(localStorage.getItem(`${CACHE_PREFIX}${key}`));
    return item?.expiry > Date.now() ? item.value : null;
  } catch (error) {
    console.error('Storage read error:', error);
    return null;
  }
};

export const setLocalStorage = (key, value, ttl) => {
  try {
    const item = {
      value,
      expiry: Date.now() + (ttl * 1000)
    };
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(item));
  } catch (error) {
    console.error('Storage write error:', error);
  }
};