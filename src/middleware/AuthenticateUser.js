const jwt = require('jsonwebtoken');

const AuthenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({message: "Você precisa fazer o login"});
  }

  try{
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken.user;
    next();
  }catch(err){
    res.status(401).json({message: 'Token invalido'});
  }

  module.exports = AuthenticateUser
}