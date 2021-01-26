import { checkKey } from 'assets/authorizatedAccount';

const checkAuthKeyValidation = (req, res, next) => {
  const isKeyValidate = checkKey(req.body.key);
  if (isKeyValidate) {
    next();
  } else {
    res.send({ status: 'OK', auth: false });
  }
};

export default checkAuthKeyValidation;
