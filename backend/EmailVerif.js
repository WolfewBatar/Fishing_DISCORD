const UserDatas = require('./Users.js');

async function EmailVerif(emailtocheck){
    const UserModel = require('../schema.js');
    const result = await UserModel.findOne({
      email: emailtocheck
    });
    if(result) return false;
    else return true; 
}
module.exports = {EmailVerif};