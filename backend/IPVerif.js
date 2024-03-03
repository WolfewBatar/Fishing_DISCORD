const UserDatas = require('./Users.js');

async function IPverif(){
    
    const UserModel = require('../schema.js');
    const result = await UserModel.findOne({
      ip: ClientIP
    });
    if(result) return false;
    else return true; 
}

module.exports = {IPverif, ClientIP };
