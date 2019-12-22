const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next()
  } catch (err) {
    console.log('JWT Token is expired');
    req.userID = undefined;
    res.status(401).json("Unauthorized");
  }
}