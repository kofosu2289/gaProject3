const Router = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword } = require('../services/auth');

const userRouter = Router();

const authResponse = (user) => {
  const tokenData = {
    id: user.id,
    username: user.username,
  };

  const token = genToken(tokenData);
  const userData = {
    username: user.username,
    id: user.id,
  };

  return {
    user: userData,
    token,
  };
};

userRouter.post('/register', async (req, res) => {
  try {
    const hash = await hashPassword(req.body.password);

    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      pw_hash: hash,
    });

    const respData = authResponse(user);
    res.json({ ...respData });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.pw_hash)) {
      const respData = authResponse(user);
      res.json({ ...respData });
    } else {
      res.status(401).json({ err: 'Invalid credentials' });
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = userRouter;