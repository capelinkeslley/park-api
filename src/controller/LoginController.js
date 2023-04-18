const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

module.exports = {
  async login(req, res){
    const {email, password} = req.body;

    User.findOne({
      where: { email }
    }).then(user => {
      if(!user){
        return res.status(401).json({message: 'Usuário não encontrado'});
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch){
          const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '1d'});
          res.json({token});
        }else{
          res.status(401).json({message: 'Senha incorreta'});
        }
      });
    });
  }
}