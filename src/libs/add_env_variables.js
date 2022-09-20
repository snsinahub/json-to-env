const fs = require('fs');
const os = require('os');

let addToEnv = class {

    constructor(filePath) {
        this.filePath = filePath;
    }

    add_env_variable(name, val) {
        fs.appendFileSync(this.filePath, `${name}=${val}${os.EOL}`, {
            encoding: 'utf8'
        })
    }
}

module.exports = { addToEnv };