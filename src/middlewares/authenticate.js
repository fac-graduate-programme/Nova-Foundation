const { verify } = require('../utils/cookie');

module.exports = async (req, res, next) => {
  try {
    const cookie = req.cookies.jwt;
    if (cookie) {
      const decoded = await verify(cookie);
      req.auth = decoded;
      next();
    }
    else res.status(401).send({ auth: false });
  } catch (error) {
    res.clearCookie('jwt');
    res.status(401).send({ auth: false });
  }
}