module.exports = (req, res) => {
  res.clearCookie('jwt');
  res.send({ logout: true });
}