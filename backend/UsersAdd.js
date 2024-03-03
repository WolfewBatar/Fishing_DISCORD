const EmailVerif = require('./EmailVerif.js');
async function AddUser(Fpassword,Femail,Fip){
    const verifmail = await EmailVerif.EmailVerif(Femail);
    const AddCount = require('./UserCount.js');
    if(verifmail){
        const UserModel = require('../schema.js');
        count = await AddCount.AddCount();
        Fdate= new Date();
        const User = new UserModel({id: count ,email:Femail ,password:Fpassword ,date:Fdate });
        await User.save();
        
    }
}
module.exports = {AddUser};