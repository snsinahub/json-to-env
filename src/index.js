const _ = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');
const add_env = require('./libs/add_env_variables.js')
const json_utils = require('./libs/json_utils.js')
const fs = require('fs');


const filePath = process.env[`GITHUB_ENV`]

async function run() {
    const jsonPath = core.getInput('json_path')
    const envObj = new add_env.addToEnv(filePath)
    const jsonUtils = new json_utils.json_utils()

    let jsonObj = jsonUtils.read_json_file(jsonPath)
    

    _.forEach(jsonObj, function( key, value) {
        if (typeof key == 'object') {
            _.forEach(key, function( sub_key, sub_value) {
                envObj.add_env_variable(sub_value, sub_key)
            })
        } else {
            envObj.add_env_variable(value, key)
        }
    })
    fs.appendFileSync(process.env.GITHUB_OUTPUT, "vars=" + JSON.stringify(envObj));
}

run();