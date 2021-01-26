export const authorizatedKeys = [];

export const addKey = (key) => {
  const date = new Date();

  authorizatedKeys.push({
    key,
    createTime: date.getTime(),
  });
};

export const removeKey = (key) => {
  const authAccIndex = authorizatedKeys.findIndex((authAccount) => authAccount.key === key);

  if (authAccIndex !== -1) {
    authorizatedKeys.splice(authAccIndex, 1);
  }
};

export const checkKey = (key) => {
  const authAccByKey = authorizatedKeys.find((authAccont) => authAccont.key === key);

  if (authAccByKey) {
    const { accKey, createTime } = authAccByKey;

    const OneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;

    if (OneDay > createTime) {
      return true;
    }
    if (OneDay < createTime) {
      removeKey(accKey);
      return false;
    }
  }
  return false;
};
