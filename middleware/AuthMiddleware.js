module.exports = (req, res, next) => {
  const HeaderAuth = req.headers.authorization;
  var accessTokenSecret = process.env.JWT_SECRET_KEY;
  if (HeaderAuth) {
    const token = HeaderAuth.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Route Access Forbidden",
          status: 403,
          success: false,
          data: null,
          timestamp: Date.now(),
        });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      message: "Unauthorized",
      status: 401,
      success: false,
      data: null,
      timestamp: Date.now(),
    });
  }
};
