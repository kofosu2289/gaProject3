const Router = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

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
  console.log(req.body.username);
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
  
    if (await checkPassword(req.body.password, user.pw_hash)) {
      console.log('correct credentials')
      const respData = authResponse(user);
      res.json({ ...respData });
    } else {
      console.log('incorrect credentials');
      res.status(401).send('Invalid credentials');
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.get('/verify', restrict, (req, res) => {
  res.json({ user: res.locals.user})
})

module.exports = userRouter;