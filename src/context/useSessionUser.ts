const USER = "@USER_SESSION";

const isLogged = () => {
  const userStorage = localStorage.getItem(USER);
  if (userStorage) {
    return true;
  }
  return false;
};

const setUser = async (user: any) => {
  await localStorage.setItem(USER, user);
};

const getUserEmail = () => {
  const userStorage = localStorage.getItem(USER);
  if (userStorage) {
    return JSON.parse(userStorage).email;
  }
  return null;
};

const deleteUser = () => {
  localStorage.removeItem(USER);
};

export { deleteUser, setUser, getUserEmail, isLogged };
