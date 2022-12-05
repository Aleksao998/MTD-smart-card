export const loadStore = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStore = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("store", serializedState);
  } catch {
    console.log("error");
  }
};

export const removeStore = () => {
  if (typeof store !== "undefined") {
    localStorage.removeItem("store");
  }
};
