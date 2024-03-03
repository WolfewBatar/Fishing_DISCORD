const mongoose = require('mongoose');
require('dotenv').config();
const log = console.log;

module.exports.connect = async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        log(`[V] server mongodb is now CONNECTED`);
    })
    .catch(() => {
        log(`[X] CAN'T CONNECTED to the mongodb server`);
    })
}