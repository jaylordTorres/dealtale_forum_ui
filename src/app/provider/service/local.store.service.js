export function Store(key) {
  const saveItem = async (data = {}) => {
    try {
      const value = JSON.stringify(data);
      return localStorage.setItem(key, value);
    } catch (e) {
      throw new Error(`Failed to save ${key}: ${data}`);
    }
  };

  const getItem = async () => {
    try {
      const value = await localStorage.getItem(key);
      return JSON.parse(value);
    } catch (e) {
      throw new Error(`Failed parse ${key}: $[value} `);
    }
  };

  return {
    getItem,
    saveItem,
  };
}
