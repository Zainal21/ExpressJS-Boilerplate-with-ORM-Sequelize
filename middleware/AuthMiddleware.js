module.exports = (req, res, next) => {
  const HeaderAuth = req.headers.authorization;
  var accessTokenSecret = process.env.JWT_SECRET_KEY
  if (HeaderAuth) {
    const token = HeaderAuth.split(' ')[1]
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.json({
          message: 'Forbidden',
          code: 403
        })
      }
      req.user = user;
      next();
    })
  } else {
    res.json({
      message: 'Unauthorized',
      code: 401
    })
  }
}