const fs = require('fs');
const os = require('os');

const processor = (user) => {
    return os.cpus()[0].model;
};
const user = () => {
    return os.userInfo().username;
};

module.exports = {
    process : processor(),
    user : user(),
};

module.exports.logg = (user, processor) => {
    fs.appendFileSync('log.txt', `\nUser : ${user} || Processor : ${processor}`);
};
