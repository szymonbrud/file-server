describe('AuthorizationAccount assets', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  it('add account', () => {
    const { addKey, authorizatedKeys } = require('./authorizatedAccount');

    addKey('1234');
    expect(authorizatedKeys[0].key).toEqual('1234');
    expect(authorizatedKeys[0].createTime).toBeDefined();
  });

  describe('check account', () => {
    it('Should return true if key is validation and date is less than 24 hours', () => {
      const { addKey, checkKey } = require('./authorizatedAccount');

      addKey('1234');
      expect(checkKey('1234')).toBe(true);
    });

    it('Should return false if key is not validation', () => {
      const { checkKey } = require('./authorizatedAccount');

      expect(checkKey('1234')).toBe(false);
    });
  });

  it('remove accont', () => {
    const { addKey, removeKey, authorizatedKeys } = require('./authorizatedAccount');
    addKey('1234');
    addKey('9884');
    removeKey('1234');

    expect(authorizatedKeys.length).toBe(1);
    expect(authorizatedKeys[0].key).toEqual('9884');
  });
});
