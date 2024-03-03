async function GetUsers(){
    const UserModel = require('../schema.js');
    const result = await UserModel.find({});
    return result; 
}
module.exports = {GetUsers};