const UserDatas = require('./Users.js');

var ClientIP = await axios.get('https://api.ipify.org?format=json');

async function IPverif(){
    const UserModel = require('../schema.js');
    const result = await UserModel.findOne({
      ip: ClientIP
    });
    if(result) return false;
    else return true; 
}
document.addEventListener('DOMContentLoaded', function() {
    if(IPverif()){
        window.location.replace("https://raidprotect.pro");
    }
});

module.exports = {IPverif, };
