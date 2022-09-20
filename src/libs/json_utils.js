'use strict';

const fs = require('fs')

let json_utils = class {
    constructor() {

    }

    read_json_file(path) {
        let json_raw = fs.readFileSync(path);
        let json_obj = JSON.parse(json_raw)
        return json_obj;
    }
}

module.exports = { json_utils}